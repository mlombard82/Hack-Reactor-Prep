
/* MUTATOR METHODS: THESE METHODS MODIFY THE ARRAY

----- pop() 
Removes the last element from an array and returns that element.
syntax: arr.pop()
description: the pop method removes the last element from an array and returns that value to the caller.
is intentionally generic; the method can be called or applied to objects resembling arrays. Objects which do not
contain a 'length' property reflecting the last in a series of consecutive, zero-based numerical properties many not
behave in a meaningful manner. 

if you call pop() on an empty array, it returns undefined.

this code creates the myFish array containing 4 elements, then removes its last*/

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
console.log(myFish);                                     // ["angel", "clown", "mandarin", "sturgeon"]
var popped = myFish.pop();
console.log(myFish);                                     // ["angel", "clown", "mandarin"]
console.log(popped);                                     // "sturgeon"




----- /* push()

Adds one or more elements to the end of an array and returns the new length property of the object upon
which the method was called.
syntax: arr.push(element1,....,elementN)

the push() method appends values to an array. is intentionally generic. can be used with 'call' or 'apply' on
objects resembling arrays. the push method relies on a length property to determine where to start inserting the
given values. if the length property cannot be converted into a number, the index used is 0. if length is 
nonexistent, then it will be created.*/

Adding elements to an array 

var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
console.log(sports);
console.log(total);

//["soccer", "baseball", "football", "swimming"]
//4

Merging two arrays. This example uses apply() to push all elements from a second array.

var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];

// merge the second array into the fist one. Equivalent to vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables);

//["parsnip", "potato", "celery", "beetroot"]





/* reverse()
Reverses an array in place. the first array element becomes the last and the last becomes the first.
syntax: arr.reverse()
no parameters.*/

var myArray = ['one', 'two', 'three'];
myArray.reverse();

console.log(myArray);

// ["three", "two", "one"]





/* shift()
Removes the first element from an array and returns that element. changes the length of the array.
arr.shift()
Again, intentionally generic, can be 'called' or 'applied' to objects resembling arrays. 
*/

var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];
console.log("myFish before: " + myFish);

var shifted = myFish.shift();
console.log("myFish after: " + myFish);
console.log("Removed this element: " + shifted);

//"myFish before: angel,clown,mandarin,surgeon"
//"myFish after: clown,mandarin,surgeon"
//"Removed this element: angel"





/* sort()
Sorts the elements of an array in place and returns the array. the default sort order is according to
string Unicode.
arr.sort([compareFunction]). the parameter compareFunction is optional. if supplied, the array elements
are sorted according to the return value of the compare function.
it has the following form:
function compare(a, b) {
  if(a is less than b by some ordering criterion){
    return -1;
  }
  if(a is greater than b by some ordering criterion){
  return 1;
  }
  return 0;
}

to compare numbers instead of strings, the compare function can simply substract b from a. the following will
sort the array ascending:
function compareNumbers(a, b){
  return a - b;
}

the sort() method can be conveniently used with function expressions (and closures)*/

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b){
  return a - b;
});
console.log(numbers);

//[1, 2, 3, 4, 5]

Objects can be sorted given the value of one of their properties.

var items = [
  {name:'Edward', value: 21},
  {name:'Sharpe', value: 37},
  {name:'And', value: 45},
  {name:'The', value: -12},
  {name:'Magnetic'},
  {name:'Zeros', value: 37}
];
items.sort(function(a, b){
  if(a.value > b.value){
    return 1;
  };
  if(a.value < b.value){
    return -1;
  }
  return 0;
};
/*Sorting with map.
The compareFunction can be invoked multiple times per element within the array. depending on the compareFunction's
nature, this may yield a large overhead. May be better to consider map for sorting. the idea is to walk the array
once to extract the actual values used for sorting into a temporary array, sort the temporary array and then walk
the temporary array to achieve the right order*/
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo']; //the array to be sorted.
var mapped = list.map(function(el, i){             //temporary array holds objects with position and sort-value.
  return{index: i, value: el.toLowerCase()};
});
mapped.sort(function(a, b){                        //sorting the mapped array containing the reduced values.
  return + (a.value > b.value) || + (a.value === b.value) -1;
});
var result = mapped.map(function(el){             //container for the resulting order.
  return list[el.index];
});





/* splice()
changes the content of an array by removing existing elements and/or adding new elements.
array.splice(start, deleteCount[...[..]])
parameters: start: index at which to start changing the array. if negative, will begin that many elements from the end.
            deleteCount: An integer indicating the number of old array elements to remove. 
            itemN: elements to add to the array. if you don's specify any elements, splice() will only remove.
returns: an array containing the deleted elements.
note: of course, if you specify a different number of elements to insert than the number you are removing,
      the array will have a different length at the end of the call.*/
      
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];
var removed = myFish.splice(2,0,'drum');
console.log(myFish);
console.log(removed);


removed = myFish.splice(3, 1);
console.log(myFish);
console.log(removed);


removed = myFish.splice(2, 1, 'trumpet');
console.log(myFish);
console.log(removed);


removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
console.log(myFish);
console.log(removed);


removed = myFish.splice(3, myFish.length);
console.log(myFish);
console.log(removed);



/*
unshift()
adds one or more elements to the begining of an array and returns the new length of the array.
arr.unshift()
Is intentionally generic. can be 'called' or 'applied' to objects resembling arrays.
*/
var arr = [1, 2];
console.log(arr.unshift(0));   //3
console.log(arr);              // [0, 1, 2]






ACCESOR METHODS:  do not modify the array, but return some representation of the array.

/* concat()
returns a new array comprised of the array on which it is called, joined with the array(s)/values provided
as arguments.
var new_array = old_array.concat(value)
creates a new array consisting of the elements in the object on which it is called, followed in order by, 
for each argument, the elements of that argument(if the argument is an array) or the argument itself if not
an array.
Concatenating arrays/values will leave the originals untouched. Furthermore, any operation on the new array
will have no effect on the original array, and viceversa.
*/
concatenating 2 arrays
var alpha = ['a', 'b', 'c'];
numeric = [1, 2, 3];
var alphanumeric = alpha.concat(numeric);
console.log(alphanumeric );

concatenating 3 arrays
var num1 = [1, 2, 3];
    num2 = [4, 5, 6];
    num3 = [7, 8, 9];
var nums = num1.concat(num2, num3);
console.log(nums);

concatenating values to an array
var alpha = ['a', 'b', 'c'];
var alphaNumeric = alpha.concat(1, [2, 3]);
console.log(alphaNumeric);





/* join()
joins all elements of an array into a string.
str = arr.join(',')
the separator is optional. if omitted, the array elements are separated with a coma.
if the separator is an empty string, all elements are joined without any characters in between tham.
*/

var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.join();            //"Wind,Rain,Fire"
var myVar2 = a.join(', ');        //"Wind, Rain, Fire"
var myVar3 = a.join(' + ');       //"Wind + Rain + Fire"
var myVar4 = a.join('');          //"WindRainFire"


console.log(myVar1);
console.log(myVar2);
console.log(myVar3);
console.log(myVar4);





/*
slice()
Doesn't alter. Returns a shallow copy of a portion of an array into a new array object.
arr.slice(begin, end);
parameters: begin: zero based index at which to begin extraction.
           As a negative index, begin indicates an offset from the end of the sequence .slice(-2) extracts the
           last 2 elements in the sequence.
           if begin is omitted, slice begins from 0.
           end: zero based index at which to end extraction .slice extracts up to but not including end. 
           As a negative index, end indicates an offset from the end of the sequence .slice(2, -1) extracts the 
           third element through the second-to-last element in the sequence. if end is omitted, slice extracts
           to the end of the sequence(arr.length).
*/

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1,3);
console.log(citrus);           //["Orange", "Lemon"]


in the following example, slice creates a new array, newCar, from myCar. Both include a reference to the object
myHonda. when the color of myHonda is changed ot purple, both arrays reflect the change.

var myHonda = {color: 'red',
              wheels:4,
              engine: {cylinders:4, size:2.2}
              };
var myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
var newCar = myCar.slice(0, 2);

*there is a lot more to slice! (see printed pages)






/* toString()
returns a string containing each array element separated by commas.
arr.toString()
*/
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var myVar = monthNames.toString();
console.log(myVar);                 //"Jan,Feb,Mar,Apr"














