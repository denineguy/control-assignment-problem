const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// Example #1: Write code that shows an alert (with any message) when the randomNumber is greater than 0.7
if (randomNumber > 0.7) {
    alert("Hi you are greater than 0.7");
}

// Example 2: Create an array of numbers and loop through the array in two different ways - outputting the numbers inside of the loop.
const myArray = [1, 2, 3, 4, 5];
for(let i = 0; i < myArray.length ; i++) {
    console.log (myArray[i]);
}

let j = 0;
while(j <= myArray.length) {
    console.log (myArray[j]);
    j++;
}

//Example 3:  Adjust one of the loops from the last task such that it actually starts at the end (last element) of the array and loops to the first element.
for(let i = myArray.length - 1; i >= 0 ; i--) {
    console.log (myArray[i]);
}

/* Example 4: Create another random number (in a separate constant) and show an alert in two different scenarios: Both are greater 0.7 OR at least 
one of the two is NOT greater than 0.2. */
const randomNumber = Math.random();
const otherRandomNumber = Math.random();

if ((randomNumber > 0.7 && otherRandomNumber > 0.7) || (randomNumber <= 0.2 || otherRandomNumber <= 0.2) ) {
    alert("Yay you are either greater than 0.7 or one is less than 0.2 randomNumber " + randomNumber + " otherRandomNumber " + otherRandomNumber);
    console.log("Yay you are either greater than 0.7 or less than 0.2 randomNumber " + randomNumber + " otherRandomNumber " + otherRandomNumber);
} 