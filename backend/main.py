from flask import Flask, jsonify,json
from flaskext.mysql import MySQL


app = Flask(__name__)
mysql = MySQL()


# MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'chat'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'

mysql.init_app(app)



@app.route('/')
def get():
    cur = mysql.connect().cursor()
    cur.execute('''select * from chat.licence_plates''')
    r = [dict((cur.description[i][0], value)
              for i, value in enumerate(row)) for row in cur.fetchall()]
    return json.dumps({'myCollection' : r})



@app.route('/signup')
def signup():
    return "register"


@app.route('/login')
def login():
    return "login"


@app.route('/messages')
def messages():
    return "messages"


@app.route('/users')
def users():
    return "users"

#signup
#login
#messages
#users
#


if __name__ == "__main__":
    app.run(debug=True)
