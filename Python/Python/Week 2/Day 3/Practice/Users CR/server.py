
from flask import Flask,render_template # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"





@app.route('/')          # The "@" decorator associates this route with the function immediately following
def my_app_project():
    return 'New Project Users CR !'  # Return the string 'Hello World!' as a response

@app.route('/create')          # The "@" decorator associates this route with the function immediately following
def create_users():
    return render_template('create.html')  # Return the string 'Hello World!' as a response









if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.


