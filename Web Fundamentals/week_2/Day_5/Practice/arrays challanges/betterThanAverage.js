console.log("---------------------------------------------------------------");
console.log("---- Used loop for ----");
console.log("---------------------------------------------------------------");

function betterThanAverage(arr){
    var sum=0,count=0;
    for(var i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    var avg=sum/arr.length;
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]>avg)
        {
            count++;
        }
    }
    return count;
}
var result=betterThanAverage([6,8,3,10,-2,5,9]);
console.log(result);




console.log("---------------------------------------------------------------");
console.log("---- Used loop while ----");
console.log("---------------------------------------------------------------");

// used loop while

function betterThanAverage(arr){
    var sum=0,count=0,j=0;
    while(j<arr.length)
    {
        sum+=arr[j];
        j++;
    }
    var avg=sum/arr.length;
    j=0;
    while(j<arr.length)
    {
        if(arr[j]>avg)
        {
            count++;
        }
        j++;
    }
    return count;
}
var result=betterThanAverage([6,8,3,10,-2,5,9]);
console.log(result);