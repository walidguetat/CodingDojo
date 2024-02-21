// Algorithm Challenge: Pop Front (Optional)

// create this function popFront are print the first value of array arr[0] and print the remainder of array [v1,v2,v(n-1)]
function popFront(arr){
  console.log(arr[0]);  // print the first value of array arr[0]
  for(var i=0;i<arr.length;i++){ // used th loop for ()
     
        
        arr[i]=arr[i+1]; // intiallized the value of arr[i] with next value of arr[i+1]
       
     
  }
  arr.pop();  // delete the last value of array 
   
return(arr);  // return the array
}

var newarr=popFront([5,93,22,4]);
console.log(newarr); // print at screen the new array ..

