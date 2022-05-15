'use strict';

let score = 0;

console.log('Good Day World');

let responseOne = prompt('Do I have children?');

if(responseOne === 'no' || responseOne =="n"){
  alert('That is correct!');
  score++;
} else if (responseOne === 'yes' || responseOne === 'y'){
  alert('That is incorrect');
}

let responsetwo = prompt('Do I currently live in Florida?');

if (responsetwo == 'yes' || responsetwo == 'Y'){
  alert ('Nice Job!');
  score++;
} else if (responsetwo == 'no' || responsetwo == "n"){
  alert ('Dang it! Try again');
}

let responsethree = prompt('Is favorite color is blue?');

if(responsethree == 'yes' || responsethree == 'y'){
  alert('Great Job!');
  score++;
} else if (responsethree == 'no' || responsethree == 'n'){
  alert ('Almost try again!');
}

let responsefour = prompt('Is favorite artist is Drake?');

if (responsefour == 'yes' || responsefour == 'Y'){
  alert('That was an easy one!');
  score++;
} else if (responsefour == 'no' || responsefour == 'n'){
 alert ('this was not even close!');
}

let responsefive = prompt('Am I a Golden state fan?');

if (responsefive == 'yes' || responsefive == 'Y'){
  alert('Correct!');
} else if (responsefive == 'no' || responsefive == 'n'){
  alert ('this was not even close!');
  score++;
}
let name = prompt("What is your name?",);
document.write("Hello " + name);

let myAge = 22;

  for(let i = 0; i < 4; i++){
    let userGuess = +prompt('How old am I?');
    if(myAge === userGuess){
      alert('You are correct!');
      score++;
      i = 4;
    } else if(myAge > userGuess){
      alert('Sorry too  low');
    } else if(myAge < userGuess){
      alert('Sorry too high');
    }

    if(i === 3){
      alert ('Too many guesses I am 22');
    }
  }

  let Favalbums = ['take care','CLB','Trapsoul','Funk wave bounce'];

  for(let i = 0; i < 6; i++){
    let Favalbumsguess = prompt('What is one of my favorite albums?').toLowerCase();
    for(let j = 0; j < Favalbums.length; j++){
    if(Favalbumsguess === Favalbums[j]){
        alert('wow you know me so well!'); 
        score++;
        i = 6
        break;
     }
   }

}
alert(`Here are my top four albums ${Favalbums}`);

alert(`Your score was ${score} out of 7`);
