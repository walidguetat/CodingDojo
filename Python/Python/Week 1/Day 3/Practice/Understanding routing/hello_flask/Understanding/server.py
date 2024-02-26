
# Import Flask to allow us to create our app
from flask import Flask  

# Create a new instance of the Flask class called "app"
app = Flask(__name__)    

# 1- localhost:5000/ - have it say "Hello World!"

# create the first route  localhost:5000/
  
@app.route('/')          
def sucess():
    return 'Hello world' 
 
# Return the string 'Hello World!' as a response

# 2 - localhost:5000/dojo - have it say "Dojo!"

# create the second route  localhost:5000/<name> 
@app.route('/<name>')          
def name_print(name):
    print (name)
    return (name+"!") 
# Return the string 'Hello World!' as a response

# 3 - Create one url pattern and function that can handle the following examples:

# # create the third route  localhost:5000/say/<name>

@app.route('/say/<name>') 
def say(name):
    print(name)
    return "Hi "+ name+"!"


# 4 - Create one url pattern and function that can handle 
#     the following examples (HINT: path variables are by default passed as strings.
#     How might you handle a number?):

# create the forth route localhost:5000/repeat/35/hello - have it say "hello" 35 times

@app.route('/repeat/<int:number>/<text>') 
def repeat(number, text):
    print(number)
    for x in range(0,number):
        print(text)
    return repeat(number,text)




if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

