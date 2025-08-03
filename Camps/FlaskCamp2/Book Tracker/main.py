from flask import Flask, render_template, redirect, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///books.db'

db = SQLAlchemy(app)
books = []

class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(400), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.now(timezone.utc))

    def __repr__(self):
        return f'<Book {self.id!r}>' 
    
@app.route('/')
def homepage():
    return render_template("home.html", books=books)

@app.route("/add", methods=['POST', 'GET'])
def add():
    if request.method == "POST":
        book_title = request.form['title']
        book_description = request.form['description']
        new_book = Book(title=book_title, description = book_description)

        db.session.add(new_book)
        db.session.commit()
        return redirect('/')
    else:
        return render_template("add.html")

@app.route('/delete/<int:id>')
def delete(id):
    return redirect('/')

@app.route('/update/<int:id>')
def update(id):
    return render_template('update.html', book=books)

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', port=8080)