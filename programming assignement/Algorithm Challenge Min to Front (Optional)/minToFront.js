// Algorithm Challenge: Min to Front (Optional)

// am create this function minToFront 
function minToFront(arr){
    min=arr[0];    // intiallized min at value at the first value of array 
   for(var i=0;i<arr.length;i++)  // used loop for
    {
      if(arr[i]<min)   // compare enter min and value of arr[i] if less than min then assign min at value of arr[i]
      {
        min=arr[i];  // assign min by value of arr[i]
      }
    }
console.log("Min is : "+min); // print the min of this array 
console.log("-----------------------------------");
var arrnew=[];  // intilized the new array 
arrnew[0]=min;  // intiallized the first value of new array by min 
arrnew.length=arr.length; // intiallized size of new array by value of last array
for(var i=1;i<arrnew.length;i++)  // am used the loop for but and intiallized i by 1 
{
    arrnew[i]=arr[i-1];  // assign the value of new array arrnew[i] by last array minimized 1 arr[i-1]
}

return(arrnew); // return a new array arrnew
}

var result=minToFront([5, 93, 22, 4]);
console.log(result); // print the result of the new array