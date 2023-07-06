'use Strict';

let ratings = document.querySelectorAll('.ratings');
let submit = document.querySelector('button');
let thxCard = document.querySelector('.thxCard');
let youSelected = document.querySelector('.youSelected');
let thxCardWrapper = document.querySelector('.thxCardWrapper');

/*stores each element from the Nodelist
tp facilitate code readability while creating 
the if statements 
*/
let rate = new Object({
  rate1: ratings[0],
  rate2: ratings[1],
  rate3: ratings[2],
  rate4: ratings[3],
  rate5: ratings[4],
});
console.log(rate);
/*Loops through the NodeList
to have access to each item
*/
ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    //callback function that removes the orange background of every element
    removeRatedClass();
    // sets the background color of the chosen rating btn to orange
    rating.classList.add('rated');
  });
});

// function to remove the '.rated' class from all elements before the click
function removeRatedClass() {
  ratings.forEach((rating) => {
    rating.classList.remove('rated');
  });
}
/* onclick submit button will have its default prevented 
and will show the 'Thank you message
*/
submit.addEventListener('click', (e) => {
  e.preventDefault(); //prevents the submit button from reloading the page
  /*permits the user to go back
     to the rating page*/
  thxCardWrapper.classList.remove('invisible');
  /*displays the 'thank you' card on submit*/
  createRatingMsg();
  removeRatedClass();
});
/* returns to the rating card page when clicked anywhere 
outside of the 'Thank you' card */
thxCardWrapper.addEventListener('click', () => {
  thxCardWrapper.classList.add('invisible');
});

/*creates the message of how well it was rated by the user */
function createRatingMsg() {
  let small = '';
  if (rate.rate1.classList.contains('rated')) {
    small = `<small class= "youSelected"> You rated us ${rate.rate1.innerHTML} out of 5!</small>`;
  } else if (rate.rate2.classList.contains('rated')) {
    small = `<small class= "youSelected"> You rated us ${rate.rate2.innerHTML} out of 5!</small>`;
  }
  if (rate.rate3.classList.contains('rated')) {
    small = `<small class= "youSelected"> You rated us ${rate.rate3.innerHTML} out of 5!</small>`;
  }
  if (rate.rate4.classList.contains('rated')) {
    small = `<small class= "youSelected"> You rated us ${rate.rate4.innerHTML} out of 5!</small>`;
  } else if (rate.rate5.classList.contains('rated')) {
    small = `<small class= "youSelected"> You rated us ${rate.rate5.innerHTML} out of 5!</small>`;
  }

  youSelected.innerHTML = small;
}
