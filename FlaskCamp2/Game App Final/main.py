from flask import Flask, render_template, request, redirect, session
from flask_sqlalchemy import SQLAlchemy
import os
from hashlib import md5

from dotenv import load_dotenv

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///players.db'

db = SQLAlchemy(app)

load_dotenv()

app.secret_key = os.getenv('PASSWORD')
print(app.secret_key)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    highscore = db.Column(db.Integer, unique=False, nullable=True)
    
    def getScore(self):
        if self.highscore is not None:
            return self.highscore
        else:
            return "0"
    def __repr__(self):
        return '<User %r>' % self.username
    
@app.route('/')
def home():
    #if logged in go to home
    #if not logged i go to login page
    if "username" in session:
        email = session["username"]+"@codingwithkids.com"
        image = "http://www.gravatar.com/avatar/%s?d=mm&s=%d&d=robohash" % (md5(email.encode('utf-8')).hexdigest(), 32)
        user = User.query.filter_by(username=session["username"]).first()
        highscore = user.highscore
        return render_template("home.html", highscore=highscore, username=session["username"], image = image)
    
    else:
        return render_template('login.html')
    
@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        user = User.query.filter_by(username=username).first()
        
        if user and (password == user.password):
            session['username'] = username
            return redirect("/")
        else:
            return render_template("login.html", error = "Invalid username or password")
    else:
        return render_template('login.html')

@app.route('/signup', methods=['POST', 'GET'])
def signup():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        confirm_password=request.form["confirm-password"]
        
        if password!=confirm_password:
            return render_template("signup.html",error="Passwords do not match!")
        user = User.query.filter_by(username=username).first()
        
        if user:
            return render_template("signup.html", error = "Username already exists.")
        new_user = User(username=username, password=password, highscore = "0")
        # add the new user to the database
        
        db.session.add(new_user)
        db.session.commit()

        session['username'] = username

        return redirect("/")
    
    else:
        return render_template('signup.html')

@app.route('/logout')
def logout():
    # remove the username from the session if it's there
    session.pop('username', None)
    return render_template("login.html")

@app.route('/api/<highestScore>/')
def save_highscore(highestScore):
    user = User.query.filter_by(username=session["username"]).first()

    if( user.highscore < int(highestScore)):
        user.highscore = int(highestScore)
        db.session.commit()

    return redirect("/")

@app.route("/leaderboard")
def leaderboard():
    users = User.query.order_by(User.highscore.desc()).all()
    email = session["username"]+"@codingwithkids.com"
    image = "http://www.gravatar.com/avatar/%s?d=mm&s=%d&d=robohash" % (md5(email.encode('utf-8')).hexdigest(), 32)

    return render_template("leaderboard.html",image=image, username=session["username"], users=users)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', port=8080)