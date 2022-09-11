/*You can use document.write() instead of console.log() for printing n array in HTML page 
    syntax: document.write(n);*/

/*Using Javascript is New Keyword in creating an Array*/
var school = new Array('desk', 'book', 'student');
console.log(school);


/*The length property in an Array
    1.Always returns the number of elements in an Array
*/
var school = ('desk', 'student', 'blackboard', 'teacher');
console.log(school.length);


/*For Loop-Loops through a block of code

...syntax...

for(statement 1; statement 2; statement 3){

code to be executed;

}

    statement 1- Executed once before the block of code 
    statement 2- Defines the condition for executing the block of code
    statement 3- Executed each time after the block of code has been executed
*/
//FOR Loop example
var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i = 0; i < Numbers.length; i++) {
    console.log(Numbers[i] + '<br>');
}


/* FOR...OF Loop
For...of iterates over elements of an array*/
let scores = [50, 60, 80, 25];
for (let score of scores) {
    score = score + 6;
    console.log(score + '<br>');
}


/* ARRAY METHODS

1.IndexOf Method
    i. Searches the array for a specific item and returns its position
    ii. Always returns -1 if the item is not found
        syntax: arr.indexOf("item");

2.Join() method
    i. Returns an array as a string
    ii. Elements will be separated by a specified separator
    iii. The default is the (',') with a comma
        syntax: arr.join('separator);

3. Reverse method
    -This method is used to reverse the order of an array
        syntax: arr.reverse();

4. Slice method
    i. Returns the selected elements in an array as a new array
    ii. The end is not included
        syntax: arr.slice(startingIndex, endingIndex);

5. Splice method
    i. Adds or removes items from an array
    ii. Always returns removed items
        syntax: arr.splice (starting Index, deleteCount,
                            newItem1,newItem2,.....
                            );

6. Push Method
    -Adds a new item at the end of an array syntax
    syntax: arr.push('push');

7. Pop Method
    -Removes an new item at the end of an array
        syntax: arr.pop(');

8. Concat Method
    -Used to merge two or more arrays together
        syntax: arr1.concat(arr2);

9. Shift Method
    -Used to remove the first element of an array
        syntax: arr1.shift;

10. Unshift Method
    -Used to add a new element at the beggining of an array
        syntax: arr1.unshift();

11. Includes Method
    -Determines whether an array contains a specific element
    -Returns TRUE if it contains and FALSE if it does not
        syntax: arr.includes('item');
*/

var school = ['desk', 'teacher', 'book', 'student'];
var n = school.indexOf("tutor");
console.log(n);

var school = ['desk', 'book', 'student', 'teacher'];
var n = school.join(' & ');
console.log(n);

var school = ['start', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'end'];
var n = school.reverse();
console.log(n);

var school = ['A', 'B', 'C', 'D', 'E'];
var n = school.slice(1, 3);
console.log(n);

var school = ['A', 'B', 'C'];
var n = school.splice(2, 1, 'X');
// alert(school);
console.log(n);

var car = ['blue', 'green', 'orange'];
car.push('black', 'yellow', 5, 8, 10);
// alert(car);
console.log(car);

var car = ['red', 'blue', 'black', 2, 5, 8, 7, 9, 10];
car.pop();
car.pop();
car.pop();
console.log(car);

var nums = [1, 2, 3, 4];
// document.write(nums + '<br>');
console.log(nums);
var colors = ['red', 'blue'];
// document.write(colors + '<br>');
console.log(colors);
var cars = ['big', 'small'];
// document.write(cars + '<br>');
console.log(cars);
var newarray = nums.concat(colors, cars);
// document.write(newarray);
console.log(newarray);
// alert(newarray);

var farm = ['fruit', 'apples', 2, 4, 5, 8, 7, 5, 6];
var removed = farm.shift();
var removed = farm.shift();
var removed = farm.shift();
console.log(removed);
// alert(farm);
console.log(farm);

var farm = ['apple', 'oranges'];
farm.unshift('pawpaws');
farm.unshift('nanas');
farm.unshift('grapes');
farm.unshift(10);
console.log(farm);

var farm = ['mangoes', 'oranges', 'grapes', 'pawpaws'];
var newitem = farm.includes('avocado');
console.log(newitem);