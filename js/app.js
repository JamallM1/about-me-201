'use strict';

console.log('Good Day World');

function one(){
  let responseOne = prompt('Do I have children?');

  if(responseOne === 'no' || responseOne =="n"){
    alert('That is correct!');
  } else if (responseOne === 'yes' || responseOne === 'y'){
    alert('That is incorrect');
  }
}

one();

function two(){
  let responsetwo = prompt('Do I currently live in Florida?');

  if (responsetwo == 'yes' || responsetwo == 'Y'){
    alert ('Nice Job!');
  } else if (responsetwo == 'no' || responsetwo == "n"){
    alert ('Dang it! Try again');
  }
}

two();

function three(){
  let responsethree = prompt('Is favorite color is blue?');

  if(responsethree == 'yes' || responsethree == 'y'){
    alert('Great Job!');
  } else if (responsethree == 'no' || responsethree == 'n'){
    alert ('Almost try again!');
  }
}

three();

function four(){
let responsefour = prompt('Is favorite artist is Drake?');

if (responsefour == 'yes' || responsefour == 'Y'){
  alert('That was an easy one!');
} else if (responsefour == 'no' || responsefour == 'n'){
  alert ('this was not even close!');
}
}

four();

function five(){
let responsefive = prompt('Am I a Golden state fan?');

if (responsefive == 'yes' || responsefive == 'Y'){
  alert('Correct!');
} else if (responsefive == 'no' || responsefive == 'n'){
  alert ('this was not even close!');
}
}

five();

let name = prompt("What is your name?",)
document.write("hello" + name)
