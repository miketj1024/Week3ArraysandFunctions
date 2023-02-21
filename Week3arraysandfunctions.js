
// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // 1. ages array 
console.log("Original array ",ages);
let abc = ages;
function subtraction(a){// ages array function
   
let lastIndex =  a[a.length - 1];// removing last index
let firstIndex = a[0];// removing first index
console.log("this is my first index",firstIndex);// the first index removed printed
console.log("this is my last index",lastIndex)// the last index removed printed
console.log("\n\nSum of subtracting first index from last index: ",  lastIndex - firstIndex);
}
 abc.splice(0,1,20,21,55,78,99);// splicing in new ages starting at index 2 removing the age 23 adding 20
 //console.log("\n Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).\n New ages after puting in 20 at index 2 and removing 23",newAges);

 subtraction(abc);// calling the subtraction function 
console.log(" the is new ages array after splicing in 20 to 99",abc);

function averages (b){
    var sum = 0;
for (let i = 0; i < b.length; i++){
sum += b[i];
 } 
let aveAbc = sum/b.length;
 console.log("\n\n this is the sum of dividing the total of ages by length of ages array", aveAbc);
}
averages(abc);



console.log('\n\nlength of new ages array', abc.length)

let sumOfAges = abc.reduce(function(accumulator,currentvalue,){
    return accumulator + currentvalue;
    });
    console.log("\n\nThis is the sum of new ages\n we used reduce method:\n ", sumOfAges);

// Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy','Tim', 'Sally','Buck','Bob'];
function aveNumOfLetters(z){
let sum1 = 0;
for (let i = 0; i < z.length; i++){
    sum1 += z[i]  
}
avg = z.join().length/z.length// this allows us to join the array names, count all letters then divid by array count
console.log("this is avg length of letters per name.", avg);
}
aveNumOfLetters(names)

function concatName(p){
let sum2 = 0;
for(let i = 0; i < p.length; i++){
    sum2 += p[i];// adding to sum after every loop
   concat1 = p.join(' ');
}console.log("this is the concatonated array with spaces between the names. ",concat1)
}
concatName(names)

//https://www.geeksforgeeks.org/get-the-first-and-last-item-in-an-array-using-javascript/

let getLastElementArray = [1, 2, 3, 4, 5];
let firstEx = getLastElementArray.slice(-1);
let secondEx = getLastElementArray.pop();
getLastElementArray.splice(4,1,5)
let thirdEx =  getLastElementArray[getLastElementArray.length - 1];
console.log("first ex using splice ", firstEx, "\n second ex using pop() ", secondEx, "\n third ex using length - 1 ",thirdEx)
//How do you access the first element of any array?
let getfirstElementArray = [1, 2, 3, 4, 5, 6];
let secondOne = getfirstElementArray[0];
let thirdOne = getfirstElementArray.shift();
console.log( "\n using index 0 ", secondOne, "\n  ex using shift() ",thirdOne )


//Create a new array called nameLengths.
// Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

//For example:

//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array
let nameLengths = [];// empty array created 
let sumProb4 = 0;// sum set to zero
for (let i = 0; i < names.length; i++){// iterating through array

nameLengths.push(names[i].length)// assigning name length to namesLengths array
}
console.log(nameLengths);

//loop to iterate over nameLengths array
function sumOfEle(a){
    let sumq5 = 0;
    for (let i = 0 ; i < a.length; i++){
        sumq5+=a[i]
    }
    total = sumq5
    console.log(`this is the sum of name lengths ${total}`)
}
sumOfEle(nameLengths)

//7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function nameNamesConcat(word, n){// functon that takes arguments
    return word.repeat(n)// repeat word n times
 
 
 };
 console.log(nameNamesConcat("mike", 3));// prints out mime 3 time

 //Write a function that takes two parameters, firstName and lastName, and returns a full name. 
  //The full name should be the first and the last name separated by a space.

  function fullNameFunc(firstName, lastName){// create function to take varibles
     let together = firstName + " " + lastName;// create a varible that joins varibles with a space
    console.log("This is the first name and last name combined with a space " ,together);

  }
fullNameFunc("Jack","Jake")// call function with arguments

//Write a function that takes an array of numbers 
//and returns true if the sum of all the numbers in the array is greater than 100
let array22 = [1, 1, 2, 1,1000]// test array

function arrayOfNumbers(arr){// fucntion that accepts array
    let sum = 0;// sum defined
    for(let i = 0; i < arr.length; i++){// for loop to iterate through array
        sum += arr[i]// adding current element to sum
    }
    if (sum>100){// if statement to return true if array sum over 100
        return true
    }else {
       return false
    }
}
console.log(arrayOfNumbers(array22));



//Write a function that takes an array of numbers and returns the average of all the elements in the array
function arrayAvarages(arr){// declaring function
    let sum = 0;// initializing sum 
    for (let i =0; i<arr.length; i++){// for loop to iterate through array
        sum+=arr[i]// add each element together
        ave = sum/arr.length// creating the average for array
    }return ave
} console.log(arrayAvarages(array22));

//  Write a function that takes two arrays of numbers
//and returns true if the average of the elements in the first array is greater than the average of the elements in the second array
let arrr = [1,2,3,4,5,10];
let arrr2 = [1,2,3,4,5,22];
function twoArrays(arr1, arr2){
    let sum1 = 0;
    for(let i = 0; i < arr1.length; i++){
        sum1+=arr1[i]
        averageArr1 = sum1/arr1.length
    }let sum2 = 0;
    for(let j = 0; j < arr2.length; j++){
        sum2+=arr2[j]
        averageArr2 = sum2/arr2.length
    }if(averageArr1 > averageArr2){
        return true
    }else{
        return false
    }
    
}console.log(twoArrays(arrr,arrr2));
//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside,moneyInPocket){// declare function with two arguments
    if(isHotOutside == true && moneyInPocket > 10.50){// set the if statement
        return true 
    }else {
        return false
    }
}console.log(willBuyDrink(true, 11))
//Create a function of your own that solves a problem
function canWalk(num){
    if(num > 99){
        console.log("Too hot to walk.");
    }else if (num < 99 && num > 50) {console.log("It is ok to walk.");
}else{
    console.log("It is too cold to walk.");
}
}
canWalk(100);

