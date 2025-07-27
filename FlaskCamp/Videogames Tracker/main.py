from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

# Create the Flask Application
app = Flask(__name__)

# Setup the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqllite:///videogames.db'
videogame = []

# Create a table in the database
db = SQLAlchemy(app)

class Videogame(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(400), nullable=False)
    date_created = db.Column(db.Datetime, default=datetime.utcnow)

    def __repr__(self):
        return f'<Videogame {self.id!r}>' 

@app.route("/")
def home_page():
    # NOTE: Books variable needs to be created
    return render_template("home.html", videogame=videogame)

@app.route("/add", methods=['POST', 'GET'])
def add():
    return render_template("add.html")

@app.route("/delete/<int:id>")
def delete(id):
    return redirect('/')

@app.route('/update/<int: id>', methods=['GET', 'POST'])
def update(id):
    return render_template('update.html', videogame=videogame)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', port=8080) 