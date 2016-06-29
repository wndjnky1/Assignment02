// Assignment 2 - Part 2

// 2.2.1 STEP 1

/*
var yourNumber = prompt('Please enter a number');
var newNumber = Number(yourNumber);
var absValue = (Math.abs(newNumber));
window.console.log(absValue);
*/

/*
// 2.2.1 STEP 2
var decNumber = prompt('Please enter a decimal number');
window.console.log(Math.ceil(decNumber));
*/

/*
// 2.2.1 STEP 3
var decNumber = prompt('Please enter a decimal number');
window.console.log(Math.floor(decNumber));
*/

/*
// 2.2.1 STEP 4
var yourNumString = prompt('Please enter a series of five (5) numbers separated by commas');
var numArray = yourNumString.split(',');
window.console.log(Math.max.apply(null, numArray));
window.console.log(Math.min.apply(null, numArray));
*/

/*
// 2.2.1 STEP 5
var yourNum= prompt('Please enter a number');
window.console.log(Math.sqrt(yourNum));
*/

/*
// 2.2.2 STEP 6
var todayDate = new Date();
console.log(todayDate.toDateString());
*/
 

/*
// 2.2.2 STEP 7
var endMonth = new Date();
var daysMonth = new Date(endMonth);
//set the month to next month
endMonth.setMonth( endMonth.getMonth() + 1);

//set date to 1 day before start of month;
endMonth.setDate(0);
var timeInMonth = (endMonth.setMonth( endMonth.getMonth() + 1)) - endMonth.setDate(0);
var daysInMonth = Math.ceil(timeInMonth / 86400000);
window.console.log(daysInMonth);
*/

/*
// 2.2.2 STEP 8
var todaysDate = new Date();
var month = (todaysDate.toDateString());
window.console.log(month.substring(4, 7));
*/

/*
// 2.2.2 STEP 9
var todayIs = new Date();
//window.console.log(todayIs.getDay());

if(todayIs.getDay() == 0 || todayIs.getDay() == 6){
                window.console.log('Great! It\'s the weekend!');
            } else {
                window.console.log('Today is not a weekend.');
    }
*/

/*
// 2.2.2 STEP 10
var todayIs = new Date();
var daysWeek = new Array(7);
daysWeek[0] = 'Sunday';
daysWeek[1] = 'Monday';
daysWeek[2] = 'Tuesday';
daysWeek[3] = 'Wednesday';
daysWeek[4] = 'Thursday';
daysWeek[5] = 'Friday';
daysWeek[6] = 'Saturday';

if(todayIs.getDay() == 0 ){
                window.console.log('Yesterday was ' + daysWeek[6]);
            } else if(todayIs.getDay() == 1 ) {
                window.console.log('Yesterday was ' + daysWeek[0]);
            } else if(todayIs.getDay() == 2 ) {
                window.console.log('Yesterday was ' + daysWeek[1]);
            } else if(todayIs.getDay() == 3 ) {
                window.console.log('Yesterday was ' + daysWeek[2]);
            } else if(todayIs.getDay() == 4 ) {
                window.console.log('Yesterday was ' + daysWeek[3]);
            } else if(todayIs.getDay() == 5 ) {
                window.console.log('Yesterday was ' + daysWeek[4]);
            } else if(todayIs.getDay() == 6 ) {
                window.console.log('Yesterday was ' + daysWeek[5]);
    }
*/


/*
// 2.2.2 STEP 11
var todaysDate = new Date();
var getDay = (todaysDate.toDateString());
var thisDay = (getDay.substring(0, 3));
console.log(thisDay.substring(0, 1));
*/

/*
// 2.2.3 STEP 12
var yourNum1 = prompt('Please enter an integer number');           
var yourNum2 = prompt('Please enter another integer number');
window.console.log(Math.max(yourNum1,yourNum2));
*/

/*
// 2.2.3 STEP 13
var stuName = ['Ursula', 'Paul', 'Henry', 'Tabitha', 'Lucy']; 
for (var x in stuName) {
//	window.console.log(stuName[x]);
}
var scores = [80, 77, 88, 95, 68];
for (var y in scores) {
  //  window.console.log(scores[y]);
}
var grade = [];
for (var i=0; i < scores.length; i++) {
   if(scores[i] <= 60 ) {
      grade[i] = 'F'; 
            window.console.log(stuName[i] + ' ' + grade[i]);
            } 
    else if (scores[i] > 60 && scores[i] <= 70) { 
        grade[i] = 'D'; 
                window.console.log(stuName[i] + ' ' + grade[i]);
    }
    else if (scores[i] > 70 && scores[i] <= 80) { 
        grade[i] = 'C';
                window.console.log(stuName[i] + ' ' + grade[i]);
    }
    else if (scores[i] > 80 && scores[i] <= 90) {
        grade[i] = 'B'; 
                window.console.log(stuName[i] + ' ' + grade[i]);
    }       
    else if (scores[i] > 90 && scores[i] <= 100) {
        grade[i] = 'A';  
                window.console.log(stuName[i] + ' ' + grade[i]);
    }
}
*/

/*
// 2.2.3 STEP 14
var num = [];
for (var i = 0; i < 15; i++) { 
    num[i] = i + 1;
}
var numString = ' ';
for (var i=0; i < num.length; i++) {
    numString += num[i] + ' ';
    }
for (var i=0; i < num.length; i++) {
    if(num[i] % 2 == 0) {
        window.console.log(num[i] + ' is even' );
            } 
    else if (num[i] % 2 !== 0) {  
        window.console.log(num[i] + ' is odd');
    }    
}
*/

/*
// 2.2.3 STEP 15
     
    for (var i=0; i < 100; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            window.console.log(i + ' FizzBuzz');     
         }
        else if(i % 3 == 0) {
            window.console.log(i + ' Fizz'); 
          }
        else if (i % 5 == 0) {
            window.console.log(i + ' Buzz');    
          }
        else if ((i % 3 != 0) && (i % 5 != 0)) {
            window.console.log(i);  
      }    
}; 
*/

/*
// 2.2.4 The “Hitchhiker’s Guide to the Galaxy” Game 
// 2.2.4 STEP 1
var youReady = confirm('Are you ready to play the game?');
    if (youReady == true) {
    alert('Awesome, our hero is waiting!');
        }
     else if (youReady == false) {
    alert('Too bad, we’re going to play anyway because our hero desperately needs your help!');
}
*/

/*
//2.2.4 STEP 2
alert('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…');
*/

/*
//2.2.4 STEP 3
var pickDir = prompt('Which direction would you like to head (please enter forward, left, or right).');
var message;
*/

/*
//2.2.4 STEP 4
switch ( pickDir ) {
    case 'forward':
        alert(message = 'You walk about 100 yards and safely make your way out of the cave.');
        break;
    case 'left':
        alert(message = 'Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.');
        break;
    case 'right':
        alert(message = 'You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.');
        break;
    default:
        alert(message = 'The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option…loser.');
        break;
}
*/

/*
//2.2.4 STEP 5
var rateUs = prompt( 'Please rate this game on a scale of 1 thru 10 ');
 if (rateUs >=6 && rateUs <= 10 ){
     alert('Thank you, we will continue to make improvements to the game!');
 }
else if (rateUs >=1 && rateUs <6) {
    alert('Whatever, you weren’t very good at this game anyway!');
}
*/

/*
//2.2.4 STEP 6
var rateUs;
while (true) {
    rateUs = parseInt(prompt( 'Please rate this game on a scale of 1 thru 10 '));
    if ( isNaN(rateUs) || rateUs < 1 || rateUs > 10 ) {
        alert('Invalid entry. Try again.');
    } else {
    break;
    }
}
if (rateUs >=6 && rateUs <= 10 ){
     alert('Thank you, we will continue to make improvements to the game!');
 }
else if (rateUs >=1 && rateUs <6) {
    alert('Whatever, you weren’t very good at this game anyway!');
}
*/


/*
// 2.2.5 The “Coin Flip” Game 
// 2.2.5 STEP 1
var coinFlip = Math.random();
// STEP 2
var choice = prompt('Choose Heads or Tails');
// STEP 3
if (coinFlip >=0 && coinFlip <.5) {
    console.log(coinFlip);
    coinFlip = 'Heads';
}
else if ((coinFlip > .5) && (coinFlip < 1)){
    console.log(coinFlip);
    coinFlip = 'Tails';   
}
// STEP 4
if ((coinFlip == 'Heads') && (choice == 'Heads')) {
    alert('The flip was heads and you chose heads...you win!');
}
// STEP 5
else if  ((coinFlip == 'Heads') && (choice == 'Tails')) {
    alert('The flip was heads but you chose tails...you lose!');
}
// STEP 6
else if  ((coinFlip == 'Tails') && (choice == 'Heads')) {
    alert('The flip was tails but you chose heads...you lose!');
}
// STEP 7
else if  ((coinFlip == 'Tails') && (choice == 'Tails')) {
    alert('The flip was tails and you chose tails...you win!');
}
*/

/*
// 2.2.5 STEP 8

var getRandomNumber = function (max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random();
        random = Math.floor(random * max);
        random = random + 1;
    }
   return random; 
};
var coinFlip = getRandomNumber(10);
var isValid;
var choice = prompt('Choose Heads or Tails');
if ((coinFlip > 0) && (coinFlip <= 5)) {
    isValid = true;
    console.log(coinFlip);
    console.log(isValid);
  }
else if ((coinFlip > 5) && (coinFlip < 10)){
    isValid = false;
    console.log(coinFlip);
    console.log(isValid);
  }

if ((isValid == true) && (choice == 'Heads')) {
    alert('The flip was heads and you chose heads...you win!');
}

else if  ((isValid == true) && (choice == 'Tails')) {
    alert('The flip was heads but you chose tails...you lose!');
}

else if  ((isValid == false) && (choice == 'Heads')) {
    alert('The flip was tails but you chose heads...you lose!');
}

else if  ((isValid == false) && (choice == 'Tails')) {
    alert('The flip was tails and you chose tails...you win!');
}
*/ 

/*
// 2.2.6 The “Coin Flip” Game Redux
// 2.2.6 STEP 1
var coinFlip;
*/
/*
// 2.2.6 STEPs 2 & 3
for (var i=0; i < 10; i++) {
    coinFlip = Math.random ( );
    var coinFlipInt = Math.round (coinFlip);
 
// 2.2.6 STEP 4
    if (coinFlipInt == 0) {
        window.console.log(' Heads');
    } 
    if (coinFlipInt == 1) {
        window.console.log(' Tails');
    } 
};
*/

/*
// 2.2.7 The “Coin Flip Streak” Game
// 2.2.7 STEP 1
var coinFlip;
*/

/*
// 2.2.7 STEPs 2 & 3
do {
    coinFlip = Math.random ( );
    var coinFlipInt = Math.round (coinFlip);
    //window.console.log(coinFlipInt);
 */   
/*   
// 2.2.7 STEP 4    
    if (coinFlipInt == 0) {
       console.log(' Heads');
    } 
    if (coinFlipInt == 1) {
        console.log(' Tails');
    } 

} while (coinFlipInt == 0);
*/

/*
// 2.2.8 The “Looping Triangle”
// 2.2.8 STEP 1

var numHash = '';
for (var i = 0; i < 7; i++) {
  console.log(numHash += '#');
}
*/

/*
// 2.2.9 Odd or Even
var num = [];
for (var i = 0; i <= 15; i++) { 
    num[i] = i;
}
var numString = ' ';
for (var i=0; i < num.length; i++) {
    numString += num[i] + ' ';
    }
for (var i=0; i < num.length; i++) {
    if(num[i] % 2 == 0) {
        window.console.log(num[i] + ' is even' );
            } 
    else if (num[i] % 2 !== 0) {  
        window.console.log(num[i] + ' is odd');
    }    
}
*/
