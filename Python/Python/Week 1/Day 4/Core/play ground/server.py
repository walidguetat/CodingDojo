

# create a server for my app play ground

# Import Flask to allow us to create our app
from flask import Flask,render_template

# Create a new instance of the Flask class called "app"
app = Flask(__name__)  


@app.route('/play') 
def index():
    return render_template('index.html')  


@app.route('/play/<int:number>/') 
def play_number(number):
    print (number)
    return render_template('index.html',number=number)


@app.route('/play/<int:number>/<color>') 
def play_color(number,color):
    print (number)
    print(color)
    return render_template('index.html',number=number,color=color)

# Ensure this file is being run directly and not from a different module 
if __name__=="__main__":  

# Run the app in debug mode.
    app.run(debug=True)    

