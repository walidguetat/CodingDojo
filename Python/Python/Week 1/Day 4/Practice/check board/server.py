

from flask import Flask, render_template


app = Flask(__name__)    

@app.route('/')          
def CheckBoardApp():
    return render_template('checkboard1.html',)  

@app.route('/<int:x>')          
def getX(x):
    print (x)
    return render_template('checkboard2.html',x=x)


@app.route('/<int:x>/<int:y>')          
def getXAndY(x,y):
    print (x,y)
    return render_template('checkboard3.html', x=x, y=y)


@app.route('/<int:x>/<int:y>/<color1>/<color2>')          
def getxAndYAndColor(x,y,color1,color2):
    print (x,y,color1,color2)
    return render_template('checkboard.html', x=x,y=y,color1=color1,color2=color2)



if __name__=="__main__":      
    app.run(debug=True)    

