#from flask import Flask
#import MySQLdb
#from flaskext.mysql import MySQL

#app = Flask(__name__)
#mysql = MySQL()

from flask import Flask, json, request, render_template
import pymysql
app = Flask(__name__)
db = pymysql.connect("localhost", "root", "root", "chat")




@app.route('/cars')
def someName():
    cursor = db.cursor()
    sql = "SELECT * FROM licence_plates"
    cursor.execute(sql)
    results = cursor.fetchall()
    return json.dumps(results)

#app.config['MYSQL_DATABASE_USER'] = 'root'
#app.config['MYSQL_DATABASE_PASSWORD'] = 'root'
#app.config['MYSQL_DATABASE_DB'] = 'chat'
#app.config['MYSQL_DATABASE_HOST'] = 'localhost'
#mysql.init_app(app)
#conn = MySQLdb.connect(host="localhost",
#                         user="root",
#                         passwd="root",
#                         db="chat")
#conn = mysql.connect()
#cursor = conn.cursor()
#@app.route('/')
#def index():


       #cursor.execute('SELECT * FROM licence_plates')
    #data = cursor.fetchall()
    #return data
    
    #c = conn.cursor()
    #asd = c.execute('''SELECT * FROM licence_plates''')
    #return asd.fetchall()

    #return c.fetchall()
    #return c, conn
    #cur = mysql.connection.cursor()
    #cur.execute('SHOW TABLES;')
    #rv = cur.fetchall()
    #return str(rv)


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
