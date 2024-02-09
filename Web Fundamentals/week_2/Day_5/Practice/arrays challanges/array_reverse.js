console.log("---------------------------------------------------------------");
console.log("---- Used loop for ----");
console.log("---------------------------------------------------------------");

function arrayReverse(arr){
    var temp=0;
    l=arr.length-1;
    for(var i=0;i<l;i++)
    {
        temp=arr[i];
        arr[i]=arr[l];
        arr[l]=temp;
        l--;    
    } 
    return arr;
}
var result=arrayReverse(["a","b","c","d","e"]);
console.log(result);




console.log("---------------------------------------------------------------");
console.log("---- Used loop while ----");
console.log("---------------------------------------------------------------");

// used loop while

function arrayReverse(arr){
    var temp=0,i=0;
    l=arr.length-1;
    while(i<l)
    {
        temp=arr[i];
        arr[i]=arr[l];
        arr[l]=temp;
        l--; 
        i++;   
    } 
    return arr;
}
var result=arrayReverse(["a","b","c","d","e"]);
console.log(result);