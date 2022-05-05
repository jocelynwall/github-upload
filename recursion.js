/*


  _____           _      ____
 |  __ \         | |    / __ \
 | |__) |_ _ _ __| |_  | |  | |_ __   ___
 |  ___/ _` | '__| __| | |  | | '_ \ / _ \
 | |  | (_| | |  | |_  | |__| | | | |  __/
 |_|   \__,_|_|   \__|  \____/|_| |_|\___|

 The Fibonacci Sequence
*/

// The Fibonacci sequence is a series of numbers where each
// term is the sum of the previous two terms
// This sequence is important in many mathematical and systems
// https://en.wikipedia.org/wiki/Fibonacci_number

/// creating the fibonacci sequence using recursion

function fib(n) {
  // create a base case that returns the input
  // 'n' if the input is equal or less than one
  if (n <= 1){
    return n;
  }
  // create a recursive case that returns the sum of
  // of calling function with the inputs of
  // n-1 and n-2
  else{
    return (fib(n-1) + fib(n-2))
  }

  return 0; // delete this line when you add your code
}

// checking the results
console.log(`The fourth term in the Fibonacci Sequence is: ${fib(4)}`); // should print 3 in the console
console.log(`The tenth term in the Fibonacci Sequence is: ${fib(10)}`); // should print 55 in the console

// looping through the Fibonacci sequence from 0-10 and
// printing it in the HTML
let str = fib(0);
for (let i = 1; i < 11; i++) {
  str = str + ", " + fib(i);
}

document.getElementById("fibber").innerHTML = str


//  _____           _     _______
// |  __ \         | |   |__   __|
// | |__) |_ _ _ __| |_     | |_      _____
// |  ___/ _` | '__| __|    | \ \ /\ / / _ \
// | |  | (_| | |  | |_     | |\ V  V / (_) |
// |_|   \__,_|_|   \__|    |_| \_/\_/ \___/
//
// Drawing with recursion

// starting example code showing our recursive circles
// your challenge will be to develop drawings of the shapes we
// studied in class

// example code:
let circ = document.getElementById("myCirc").getContext('2d');

function myBestCircle(x, s) {
  circ.beginPath();
  circ.arc(x, 250, s, 0, Math.PI * 2);
  circ.stroke();
  let ns = s / 2;
  let left = x - ns;
  let right = x + ns;
	// recursive case
  if (s > 5) {
    myBestCircle(left, ns );
    myBestCircle(right, ns);
  }
}

myBestCircle(250,200)

// Drawing recursive squares
let square = document.getElementById("mySquare").getContext('2d');

function myBestSquare(x, y, s) {
	square.beginPath();
	square.rect(x-s/2, y-s/2, s, s);
	square.stroke();
	// add recursion here

  let newS = s/2

  let newX1 = x - newS;
  let newX2 = x + newS;
  let newY1 = y - newS;
  let newY2 = y + newS;


  if (s > 50){
    myBestSquare(newX1, newY1, newS, newS);
    myBestSquare(newX1, newY2, newS, newS);
    myBestSquare(newX2, newY1, newS, newS);
    myBestSquare(newX2, newY2, newS, newS);
  }
}

myBestSquare(250,250,200)

// Drawing Sierpinski Triangle
let tri = document.getElementById("myTriangle").getContext('2d');

function myBestTri(x, y, s) {
	// drawing a triangle from its center
	tri.beginPath();
	tri.moveTo(x-s/2,y+0.2887*s);
	tri.lineTo(x+s/2,y+0.2887*s);
	tri.lineTo(x,y-0.5773*s)
	tri.closePath()
	tri.stroke();
	// add recursion here

  let newS = s/2;
  //let newH = Math.sin(60)*(s);
  let newX1 = x;
  let newX2 = x - newS/2;
  let newX3 = x + newS/2;
  let newY1 = y + (s/2)*(Math.tan(60));
  let newY2 = y - (s/2)*(Math.tan(30));
  //let newY3;

  if (s > 10){
    myBestTri(newX1, newY1, newS);
    myBestTri(newX2, newY2, newS);
    myBestTri(newX3, newY2, newS);
  }
}

myBestTri(250,250,300);

// Drawing a dragon Curve
let drag = document.getElementById("myDragon").getContext('2d');

function myBestDragon(s) {
	// drawing a right angle shape
	// see: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate

	drag.beginPath();
	drag.fillRect(0,0,1,s);
	drag.translate(0,s);
	drag.rotate(Math.PI/2);
	drag.fillRect(0,0,1,s);
	drag.stroke();
	// add recursion?



}
drag.translate(250,250);
drag.rotate(Math.PI)
myBestDragon(100);
