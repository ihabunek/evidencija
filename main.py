from flask import Flask, render_template


app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route('/new/', methods=['GET', 'POST'])
def new_form():
    # if request.method == 'POST':
        # save_new(request)

    return render_template('form.html', new=True)

@app.route('/show/<id>')
def form():
    return render_template('form.html', new=False, id=id)



# def save_new(request):
#     print(request)




if __name__ == "__main__":
    app.run(debug=True)
