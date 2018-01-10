from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)
mysql = MySQL()


app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'user_info'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)


conn = mysql.connect()
cursor = conn.cursor()

@app.route('/')
def index():
    return "Homepage"


if __name__ == "__main__":
    app.run(debug=True)
