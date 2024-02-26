

# create a server for my app play ground

# Import Flask to allow us to create our app
from flask import Flask,render_template

# Create a new instance of the Flask class called "app"
app = Flask(__name__)  

# The "@" decorator associates this route with the function immediately following
@app.route('/play') 

# Return the string 'Hello World!' as a response
def hello_world():
    return render_template('index.html')  

# Ensure this file is being run directly and not from a different module 
if __name__=="__main__":  

# Run the app in debug mode.
    app.run(debug=True)    

