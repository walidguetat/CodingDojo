



from flask import Flask, render_template


app = Flask(__name__)    

@app.route('/')          
def htmlTable():
    users = [{'first_name' : 'Michael', 'last_name' : 'Choi'},{'first_name' : 'John', 'last_name' : 'Supsupin'},{'first_name' : 'Mark', 'last_name' : 'Guillen'},{'first_name' : 'KB', 'last_name' : 'Tonel'}]
    x=len(users)
    # print(x)
    # print(users)
    return render_template('html_table.html',users=users,x=x)  





if __name__=="__main__":      
    app.run(debug=True,port=3100)    

