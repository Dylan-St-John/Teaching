from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)

# Set up the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///books.db'
db = SQLAlchemy(app)

# Create a model and define database columns;
class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(400), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

def __repr__(self):
    return '<Book %r>' % self.id

@app.route("/")
def homepage():
    books = Book.query.order_by(Book.date_created).all()
    return render_template("home.html", books=books)

@app.route("/add", methods=['POST', 'GET'])
def add():
    if request.method == 'POST':
        book_title = request.form['title']
        book_description = request.form['description']
        new_book = Book(title=book_title, description=book_description)
        db.session.add(new_book)
        db.session.commit()
        return redirect('/')
    else:
        return render_template("add.html")
    
@app.route('/delete/<int:id>')
def delete(id):
    book_to_delete = Book.query.get_or_404(id)
    db.session.delete(book_to_delete)
    db.session.commit()
    return redirect('/')

@app.route('/update/<int:id>', methods=['GET', 'POST'])
def update(id):
    book = Book.query.get_or_404(id)
    if request.method == 'POST':
        book.title = request.form['title']
        book.description = request.form['description']
        db.session.commit()
        return redirect('/')
    else:
        return render_template('update.html', book=book)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', port=8080)