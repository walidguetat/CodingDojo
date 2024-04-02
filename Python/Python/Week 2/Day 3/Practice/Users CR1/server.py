

from flask import Flask,render_template,request,redirect

app = Flask(__name__)    


# view route
# view route
@app.route('/users')          
def read_all_users():
    print (request.form)
    return render_template('read_all.html') 


# action route
@app.route('/create_user',methods=['POST'])          
def create_user():
    print ("hello world")
    return redirect('create.html')

if __name__=="__main__":       
    app.run(debug=True,port=8000)    

