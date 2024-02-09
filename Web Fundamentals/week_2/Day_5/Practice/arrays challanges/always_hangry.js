
// used loop for 

console.log("---------------------------------------------------------------");
console.log("---- Used loop for ----");
console.log("---------------------------------------------------------------");

function alwayshangry(arr){
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]==="food")
        {
            console.log("yummy");
        }
        else
        {
            console.log("I'm hangry");
        }
    }
}

alwayshangry([3.14,"food","pie",true,"food"]);
console.log("-------------------");
alwayshangry([4,1,5,7,2]);


console.log("---------------------------------------------------------------");
console.log("---- Used loop while ----");
console.log("---------------------------------------------------------------");

// used loop while

function alwayshangry(arr){
    var i=0;
    while(i<arr.length)
    {
        if(arr[i]==="food")
        {
            console.log("yummy");
        }
        else
        {
            console.log("I'm hangry");
        }
        i++;
    }
}

alwayshangry([3.14,"food","pie",true,"food"]);
console.log("-------------------------------------------------");
alwayshangry([4,1,5,7,2]);
