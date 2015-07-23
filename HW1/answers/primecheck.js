#!/usr/bin/env node
 
var count = 0;  //Counts number divisors that don't leave a remainder
var arrdiv = [];  // logs count for each divisor that doesn't leave a remainder
var arr = [];  // logs the prime numbers that only have 2 divisors

 

// Function that checks if a number 'n' is prime or not.
pcheck = function(n){

//Set our counter to 0
count = 0;

	// Divide n by all positive i values less than n
	for (var i = n; i > 0; i--) {

		// Define Variables
		var div = n/i;
		var divbot = Math.floor(div);
		var divtop = Math.ceil(div);
		
		// If the number 'n' divided by any positive real number less than it
		// is equal the  number 'n' divided by any positive real number less than it
		// rounded up and rounded down then we have found an even divisor 
		if(div == divbot && divbot == divtop) {
			// Increment count to keep track of how many even divisors we have found
			count++;
		}

	}

	// If there are only 2 even divisors for n, we have found a prime number so return it.
	// Alternatively, return 0 and we will filter these results out.
	if(count == 2) {
		console.log("count final = " + count);
		console.log("n = " + n);
		{return n;}
	} else {
		{return 0;}
		console.log("count final = " + count);
		console.log("n = " + n);
	}

}


// Find prime numbers between zero and the value "k".
// Push the return of the prime numbers from, pcheck, into an array, arr[]
var findp = function(k) {

// Set our array to empty again for this "k" value.
arr = [];
	for (var inc = 2; inc<k+1;  inc++) {
		var filter = pcheck(inc);
		if(filter !== 0) {
			arr.push(filter);
			console.log("this is the array " + arr);
			console.log("the array is this long " + arr.length);
		}
	}
	return arr;
};


// Turn the array into a string to print to the console
var showarr = function(arr) {
	return arr.join(",");
};


// Find prime numbers until you have found 100 of them.

var s = 0;

while(arr.length < 100) {
	console.log("S = " + s);
	console.log(showarr(findp(s)));
	console.log("BAL " + arr.length);
	s = s + 1;
}

var writy = require('fs');
var outy = "100primes.txt";
var conty = arr;
writy.writeFileSync(outy, conty);
console.log("wrote out a file called " + outy);
