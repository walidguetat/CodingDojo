

from flask import Flask,render_template,request,session
app = Flask(__name__) 
app.secret_key="shhhhhhht" 

@app.route('/',methods=['POST'])          
def HomeDojoSurvey():
    name=request.form['name']
    countries=request.form['countries']
    langage=request.form['langage']
    comments=request.form['comments']
    return render_template('dojo survey.html',name=name,countries=countries,langage=langage,comments=comments) 

@app.route('/displayinfo')          
def displayInfo():
    print(request.form)
    return render_template('results.html') 
if __name__=="__main__":      
    app.run(debug=True)    

