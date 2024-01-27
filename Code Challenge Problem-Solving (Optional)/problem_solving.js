

// Code Challenge: Problem-Solving (Optional)


//  first : read the problem 
//  second : reads varriables
//  third : reads conditions 
//  forth : select the loops to used 
//  fifth : create code of my programs
//  six   : testing my code used T-diagrame
//  seven : write my programs used another methode 




// Debug the following code that removes negative values from an array

function removeNegatives(arr) { // delete var because arr it's parameter 
    for(var i=0; i<arr.length; i++) {   // delete signe equal (=)
        if(arr[i] < 0) // delete signe equal (=) and zero is positif number 0>
         {
            
            arr[i]=arr.pop();
            i--;
         }
    }
    return arr;
}

var result = removeNegatives([3,7,-23,0,2.5,-4]);
console.log(result);