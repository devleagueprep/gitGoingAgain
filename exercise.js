
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
function yaoNumbaOne(number){
	for(var n = 0; n<number.length; n++){
		if(n%1 === true){
			return number + odd;
		}
	}
}
console.log(yaoNumbaOne());

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



/*@param {Array}
  @param {Array}
  @return {Number}*/

/*Create a function that will take in two arrays of numbers and returns the sum of both arrays.*/
var numArr1 = [2, 4, 6];
var numArr2 = [8, 10, 12];
function summer(array1, array2){
	for (var i = 0; i <array1.length && array2.length; i++){
		console.log(array1[i]+array2[i]);
	}
}summer(numArr1, numArr2);


// Mission 5:
// Team Member: Reese

var numberArr = [10, 20, 30];

/*@param {Array}
@return {Array}*/

/*Create a function that will take in an array of numbers and returns an array with each element half of its original value.*/

var halfArray = [];
function half(arr){
	for(var i = 0; i < arr.length; i++){
		halfArray.push(arr[i] / 2);
	}
	return halfArray;
}

console.log(half(numberArr));

// Mission 6:
// Team Member: Ben

var nihongo = ["shinjirarenai", "hisashiburi", "otsukaresama", "itadakemasu", "guchisuusama"];

/*@param {Array}
@return {Array}*/

/*Create a function that will take in an array of strings and returns an array of string lengths.*/

function lengths(strings){
	var temp = [];
	for (i = 0; i < strings.length; i++){
		temp.push(strings[i].length);
	}
	return temp;
}
console.log(lengths(nihongo));

// Mission 7:
// Team Member: May

/*@param {Array}
@return {String}*/

/*Create a function that will take in an array of strings (use the nihongo array above) and returns the last element with the letter 'u' replaced with the letter 'o'.*/


// Mission 8:
// Team Member: Cyrus

var num = [1,2,3,4,5,6,8,9,10,12,14,16,18];

/*@param {Array}
@return {Number}*/

/*Create a function that will take in an array of numbers and will return the sum of all even numbers below 12.*/

function sum(arr) {
	var result = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0 && arr[i] < 12) {
			result += arr[i];
		}
	}
	return result;
}

console.log(sum(num));


