//first assisgnment, question 1 to 25 

//Question 1
//Create a variable called bunny using var and assign it your bunny's name. Then declare dog with let and cat with const. Print all three names.

//solution
var bunny = "mimi";
let dog = "shadow";
const cat = "coco";
console.log(bunny); //output: mimi
console.log(dog); //output: shadow
console.log(cat); //output: coco

//Question 2
//Which of these names are allowed in JavaScript? For each one, write valid or invalid, then write a correct version of any invalid name.

//solution
//1bunny    invalid
//_bunny    valid
//$bunny    valid
//-bunny    invalid
//@bunny    invalid
//bunnyName valid

//Question 3
//Predict the output, then run the code. In one or two sentences, explain why var and let behave differently here.

//solution
var pet = 'lucy';
console.log(pet);  //output: lucy

let animal = 'tom';
console.log(animal); //output: tom

//var is function-scoped and allows redeclaration, while let is block-scoped and does not allow redeclaration within the same scope. This means that var can be accessed outside of the block it was declared in, while let cannot.

//Question 4
//Write two short examples:
//a local variable inside a function called animalName
//a global variable that the same function can still print
//Call the function and show both results.

//solution
let globalDog = "Jack"; // Global variable

function animalName() {

    let localDog = "Bingo"; // Local variable
    
    // Both variables can be accessed inside this function
    console.log(localDog + " is fighting a " + globalDog); // Output: Jack is fighting a Bingo
}
animalName(); // Call the function to show both output
