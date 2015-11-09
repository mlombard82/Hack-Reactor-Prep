
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
})
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






