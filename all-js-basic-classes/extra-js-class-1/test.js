// problem 1
// "You have 100 seer Apple. Now ,  write a javascript program how to 
// convert it to mon . Remember that 40 seers = 1 mon.  // ( you have to  check the type of variable ) "

var appleSeer = 100;

if( appleSeer !== 'number' && appleSeer >= 0){
    console.log("please, type valid number");
}

else{
    var convertToMon = appleSeer / 40;
    console.log(convertToMon);
}




 



// 40 seer = 1 mon;
// 1 seer = 1 / 40;
// 100 seer = 1 * 100/ 40

//  problem 2
// "Write a JavaScript program to determine whether a given year is a leap
//  year in a calendar."

// var year = 2024;

// if(year % 4 === 0 && year % 100 !== 0  || year % 400 === 0){
//     console.log('It is a leap year' + " " + year);
// }
// else{
//     console.log('It is a  not leap year' );
// }

// problem 3
// "Write a JavaScript program to convert temperatures from Celsius to 
// Fahrenheit"	

// problem 4
// "At first, you create three new strings. And then concate each other. 
// Now convert this concating string in uppercase.
// "	
// problem 5				
// "Write a JavaScript program where the program takes a random integer 
// between 1 to 10, the user is then prompted to input a guess number. 
// If the user input matches with guess number, the program will display 
// a message ""Great, this number has been matched"" otherwise display a 
//  message ""Not matched this number""
// "	


var integr = Math.round(Math.random () * 10);
// console.log(integr);
var number = prompt("type number 1 to 10")

if( number >= integr) {
    console.log('"Great, this number has been matched"');
}
else{
    console.log('Not matched this number"');
}
// problem 6		
// "Write a JavaScript program to find the area of a triangle where lengths of 
// the three of its sides are 5, 6, 7.


// "	
// problem 7				
// "Write a JavaScript program to get the difference between a given number
//  and 13, if the number is greater than 13 return double the absolute difference"

//  problem 8
// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7

// problem 9
// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values. 	

// problem 10
// Write a JavaScript program to check the total marks of a student in various examinations. The student will get average A+ grade if the total marks are in the range (80-100), A grade (70- 79), A- grade (60- 69), B grade (50 -59), C grade (40-49), D grade (33- 39) , Fail (0-32).  You or your friend have got in 80 marks in Bangla, 87 marks in Religeon, 75 marks in English, 90 in Math, 57marks in science, 43 marks in social science.	

// problem 11

// Suppoese, you are distributing  blanket for 20 poor people. Every man will get one blanket. Now write a javascript program how to distribute blanket with them. Using ( for loop)	

// problem 12
// Wirte a Js program to get each character  from a string in its length or position wise. Using while loop	

// problem 13
// You have gone market to buy 2kg potato ( 20 tk per kg), 1kg tomato ( 40 tk per kg),3kg sugar ( 120 tk per kg) and 5 litre mustard oil ( 200 tk per kg).Your mother has given 2000tk to buy those. Write a js program to calculate the total price and how much money will you return in your mother after completing market. You have to show two output( total price and how much money return). 	

// problem 14
// Write a javascript program to check the value 60 is greater than 89 using not equal operator.		


// problem 15 
// ami jopdi pas kori baba amaka scylse dinban . jodi fail kori baba amaka tk dawa  of kora diban .jodi  golden A+ pai abong amar teacher amar valo bola tahola   akta famaly tour dibo