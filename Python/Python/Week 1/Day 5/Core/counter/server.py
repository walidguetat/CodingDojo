



from flask import Flask, render_template, request, redirect, session


app = Flask(__name__) 
app.secret_key = 'keep it secret, keep it safe' # set a secret key for security purposes


@app.route('/')          
def displayCounter():
    if 'counter' not in session:
            session['counter']=1
    return render_template('counter.html')  

@app.route('/increment',methods=['POST'])
def onClickIncrementCounter():
    if 'counter' in session:
            session['counter']+=1
    return redirect('/')

@app.route('/plustwo',methods=['POST'])
def onClickPlusTwo():
    if 'counter' in session:
            session['counter']+=2
    return redirect('/')

@app.route('/clear',methods=['POST'])
def onReset():
    session.pop('counter')
    return redirect('/')





if __name__=="__main__":      
    app.run(debug=True,port=3200)    

