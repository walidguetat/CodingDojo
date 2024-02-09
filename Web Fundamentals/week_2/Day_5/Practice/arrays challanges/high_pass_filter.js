// used loop for 

console.log("---------------------------------------------------------------");
console.log("---- Used loop for ----");
console.log("---------------------------------------------------------------");

function highPass(arr,cutoff){
    var filteredAdr=[];
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]>cutoff)
        {
            filteredAdr.push(arr[i]);
        }
    }
    return filteredAdr;
}
var result=highPass([6,8,3,10,-2,5,9],5);
console.log(result);




console.log("---------------------------------------------------------------");
console.log("---- Used loop while ----");
console.log("---------------------------------------------------------------");

// used loop while

function highPass(arr,cutoff){
    var filteredAdr=[];
    i=0;
    while(i<arr.length)
    {
        if(arr[i]>cutoff)
        {
            filteredAdr.push(arr[i]);
        }
        i++;
    }
    return filteredAdr;
}
var result=highPass([6,8,3,10,-2,5,9],5);
console.log(result);