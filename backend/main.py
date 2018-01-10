from flask import Flask, jsonify, json, request
from flaskext.mysql import MySQL


app = Flask(__name__)
mysql = MySQL()


# MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'hulichat'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)


@app.route('/')
def get():
    cur = mysql.connect().cursor()
    cur.execute('select * from hulichat.message_data, hulichat.user_data')
    r = [dict((cur.description[i][0], value)
              for i, value in enumerate(row)) for row in cur.fetchall()]
    return json.dumps(r)


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    username = request.args.get("username")
    password = request.args.get("password")
    return "Hola"


@app.route('/login')
def login():
    return "login"


@app.route('/messages')
def messages():
    cur = mysql.connect().cursor()
    cur.execute('select message_text from hulichat.message_data')
    r = [dict((cur.description[i][0], value)
        for i, value in enumerate(row)) for row in cur.fetchall()]
    return json.dumps(r)


@app.route('/users')
def users():
    cur = mysql.connect().cursor()
    cur.execute('select user_name from hulichat.user_data')
    r = [dict((cur.description[i][0], value)
        for i, value in enumerate(row)) for row in cur.fetchall()]
    return json.dumps(r)


@app.route('/users/<user_id>')
def user_search(user_id):
    cur = mysql.connect().cursor()
    cur.execute('select user_name from hulichat.user_data WHERE user_id = "' + user_id + '"')
    r = [dict((cur.description[i][0], value)
        for i, value in enumerate(row)) for row in cur.fetchall()]
    return json.dumps(r)


@app.route('/messages/<message_id>')
def message_search(message_id):
    cur = mysql.connect().cursor()
    cur.execute('select message_text from hulichat.message_data WHERE message_id = "' + message_id + '"')
    r = [dict((cur.description[i][0], value)
        for i, value in enumerate(row)) for row in cur.fetchall()]
    return json.dumps(r)



if __name__ == "__main__":
    app.run(debug=True)
