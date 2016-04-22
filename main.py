from flask import Flask, render_template


app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"


@app.route('/new/')
@app.route('/show/<id>')
def form():
    return render_template('form.html', id=id)


if __name__ == "__main__":
    app.run(debug=True)
