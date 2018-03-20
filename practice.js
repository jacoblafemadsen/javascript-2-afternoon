/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

/*
  Create an object called me. 
  Give it a key of name with the value being your name, and another key of age with the value being your age. 
  Then alert your name using dot notation.
*/

var me = {
  name: 'Jacob Madsen',
  age: 22
}
alert(me.name);


////////// PROBLEM 2 //////////

/*
  Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. 
  Have the values to those keys be your favorite thing in that category.
*/

var favoriteThings = {
  band: 'None',
  food: 'Mecian',
  person: 'None',
  book: 'Wheel of Time',
  movie: 'Gladiator',
  holiday: 'Christmas'
}



/*
  After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.
*/

favoriteThings.car = 'Sting Ray';
favoriteThings.brand = 'Corvette';


/*
  Now change the value of the food key in your favoriteThings object to be 'Chicken Nuggets' and change the value of the book key in your favoriteThings object to be 'Harry Potter'.
*/

favoriteThings.food = 'Chicken Nuggets'
favoriteThings.book = 'Harry Potter'


////////// PROBLEM 3 //////////

/* 
  Create an empty Object called backPack. 
  Now, create a variable called 'item' and set it equal to the string 'firstPocket'. 
  Using bracket notation, add a 'firstPocket' key (or property) to backPack, using 'item'.
  Set the value of that key to 'chapstick'.
  Using dot notation, add another key (or property) to your backPack object that is named color, with the value being the color of your backpack. 
*/

var backPack = {};
var item = 'firstPocket';
backPack[item] = 'chapstick';
backPack.color = 'Grey';



/*
  After you do the above, alert your entire backPack object.
*/

alert(backPack)



/*
You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. 
*/

console.log(backPack)


////////// PROBLEM 4 //////////

// Do not edit the code below.
var user2 = {
  name: 'Ty',
  age: 24,
  pwHash: 'U+Ldlngx2BYQk',
  email: 'ty33@gmail.com',
  birthday: '05/02/1990',
  username: 'tylermcginnis33'
};
// Do not edit the code above.

/* 
  Let's say I, the user, decided to change my name and email address to the following:
  name -> 'Tyler S. McGinnis' and email -> 'tyler.mcginnis@devmounta.in'. 
  Make that change without modifying the original object code above.
*/

user2.name = 'Tyler S. McGinnis'

user2.email = 'tyler.mcginnis@devmounta.in'


////////// EXTRA PRACTICE PROBLEMS BELOW //////////

////////// PROBLEM 5 //////////

/*
  Create an empty object called methodCollection.
*/

var methodCollection = {

}



/*
  Now add two methods (functions that are properties on objects) to your methodCollection object. 
  One called 'alertHello' which alerts 'hello' and another method called 'logHello' which logs 'hello' to the console. 
*/

methodCollection.alertHello = () => alert('hello');
methodCollection.logHello = () => console.log('hello');



/*
  Now call your alertHello and logHello methods.
*/

methodCollection.alertHello;
methodCollection.logHello;



////////// PROBLEM 6 //////////

/* 
  Create a function called makePerson which takes in name, birthday, ssn as its parameters. 
  Return a new object with all of the information that you passed in.
*/

function makePerson(name, bDay, ssn) {
  var person = {
    name: name,
    birthday: bDay,
    ssn: ssn
  }
  return person;
}


////////// PROBLEM 7 //////////

/*
  Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object.
  Return that object so that whenever you invoke makeCard, you get a brand new credit card.
*/

function makeCard(cN, eD, sC) {
  var creditCard = {
    cardNumber: cN,
    expirationDate: eD,
    securityCode: sC
  }
  return creditCard;
}

