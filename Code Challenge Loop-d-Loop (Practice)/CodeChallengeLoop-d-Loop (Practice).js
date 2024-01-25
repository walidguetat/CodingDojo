// Code Challenge: Loop-d-Loop (Practice)

/*

MVP Story:

A local fitness coach and a mechanical engineer are building an IoT device that pops out a piece of candy every time a runner reaches 2 miles on a treadmill but stops giving candy out at mile 6. You're tasked with building the loop functionality to know when to give a piece of candy and when to stop.

Step 1: Using comments in your VS Code, answer the following questions:

   1) How do we know we need a loop here?
   2) What's the starting point of the loop?
   3) How will the loop know when to stop?
   4) What's incrementing for each iteration of the loop?
   5) What variables do we need?


*/


//  -----------------------     my ansewrs    -----------------------     

// Question 1 :   i need a loop for() because number of iteration is a favor is a number six 6 

// Question 2 :   the point of starting this loop is 0 car number of runner to reachs miles 

// Question 3 :   the loop is finish or stop at number of miles is a equal to six

// Question 4 :   on incement by two (2) milles by step of the loop 

// Question 1 :   am need three varriables in this program  [ i intiallized by zero 0 ] , [ nbBonbon intiallized by 0 ] and [ nbFinish intiallized by 6 ] 


// ---------------------- code of this program ------------------------------------

// intiallized this varriable nbBonbon by zero 
var nbBonbon=0;
// intiallized this varriables to start this count  by zero 
var i=0;
// intiallized number of finich nbFinish by six 6 
var nbFinish=6;
// used this loop for because number of iteration is a favor
for(i=0;i<=nbFinish;i++)
{
  if(i%2===0)
  {
    nbBonbon++;
  }
}
if(i===6)
{
  console.log("Number of candy is : "+nbBonbon);
  break;
}


// ---------------------------------   Ninja Bonus   ---------------------------------

// Create a new loop where the runner only gets a piece of candy every 2 miles AND if they were going faster than 5.5 miles per hour.


// ---------------------- code of this program  -   Ninja Bonus ------------------------------------

// intiallized this varriable nbBonbon by zero 
var nbBonbon=0;
// intiallized this varriables to start this count  by zero 
var i=0;
// intiallized number of finich nbFinish by six 6 
var nbFinish=6;
// used this loop for because number of iteration is a favor
for(i=0;i<=nbFinish;i+5.5)
{
  if(i%5.5===0)
  {
    nbBonbon++;
  }
}
if(i===6)
{
  console.log("Number of candy is : "+nbBonbon);
  break;
}
