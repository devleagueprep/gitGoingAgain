
/*Congratulations Prepsters, you've been selected for ANOTHER top secret mission (dare I say a sequel??). Should you choose to accept it, do a git fetch and git pull to find your specific mission. From here, create a new branch to work on your handcrafted mission. After you complete your mission, commit your work and do a pull request.

This repo will self-destruct in five seconds. Good luck (again)!!*/

// Mission 1: 
// Team Member: Sean

/*@param {String}
@return {String}*/

/*Create a function that will take in a string input and returns the reverse of that string.*/


// Mission 2: 
// Team Member: Yao

/*@param {Number}
@return {Number}*/

/*Create a function that will loop through 50 numbers and returns the sum of all the odd numbers.*/


// Mission 3:
// Team Member: Tyler



/*@param {Array}
@return {Array}*/

/*Create a function that will iterate through the calendar array and will return an array of all of the elements in a single array.*/
var calendar = [["Jan", "MLK Day"], ["Feb", "Pres. Day"], ["Mar", "Good Fri"]];

var combArray = [];

function holiday(arr, newArr){

	for (var i = 0; i < arr.length; i++){

    	for(var k=0; k<arr[i].length; k++) {

			newArr.push(arr[i][k]);

		}

	}

}
holiday(calendar, combArray);
console.log(combArray);
// Mission 4:
// Team Member: Jace

var numArr1 = [2, 4, 6];
var numArr2 = [8, 10, 12];

/*@param {Array}
  @param {Array}
  @return {Number}*/

/*Create a function that will take in two arrays of numbers and returns the sum of both arrays.*/


// Mission 5:
// Team Member: Reese

var numberArr = [10, 20, 30];

/*@param {Array}
@return {Array}*/

/*Create a function that will take in an array of numbers and returns an array with each element half of its original value.*/


// Mission 6:
// Team Member: Ben

var nihongo = ["shinjirarenai", "hisashiburi", "otsukaresama", "itadakemasu", "guchisuusama"];

/*@param {Array}
@return {Array}*/

/*Create a function that will take in an array of strings and returns an array of string lengths.*/


// Mission 7:
// Team Member: May

/*@param {Array}
@return {Number}*/

/*Create a function that will take in an array of strings (use the nihongo array above) and returns the last element with the letter 'u' replaced with the letter 'o'.*/


// Mission 8:
// Team Member: Cyrus

var num = [1,2,3,4,5,6,8,9,10,12,14,16,18];

/*@param {Array}
@return {Number}*/

/*Create a function that will take in an array of numbers and will return the sum of all even numbers below 12.*/


