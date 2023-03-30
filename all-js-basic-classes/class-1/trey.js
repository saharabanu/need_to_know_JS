var hasan= 50; //130
var rahim = 80;


// console.log(hasan += rahim);

// Write a JavaScript program to display the current day and time .

var date = new Date();

var today = date.getDay();

// if(today === 0){
//     console.log("today is sunday");
// }
// else if (today === 1){
//     console.log("today is Monday");
// }
// else if (today === 2){
//     console.log("today is Tuesday");
// }
// else if (today === 3){
//     console.log("today is Wednesday");
// }
// else if (today === 4){
//     console.log("today is Thursday");
// }
// else if (today === 5){
//     console.log("today is Friday");
// }
// else if (today === 6){
//     console.log("today is Saturday");
// }
// else{
//     console.log("today");
// }


// var nummm = 90;
// console.log(17   % 5);

var arr = [1,5 ,8]

// console.log(arr.indexOf(0), arr.indexOf(1));
// console.log(6 != 6);



// Problem 2: You have 100 seer Apple. Now ,  convert it to mon . Remember that 40 seers = 1 mon. ( they will check the type of number or others ).
// function seerToMon(seer){
//     // error for string
//     if(typeof seer !='number' ){
//     return 'please,give a number.then check';
//     }
//     // error for less than 0 and equal
//     else if(seer<=0){
//     return 'please,give a positive integer'
//     }
//     // error end
//     const mon = seer / 40 ;
//     return mon;
//     }
//     const mySeer = 800 ;
//     const mon = seerToMon(mySeer);
//     console.log(mon);


var appleSeer = -466 ;

if(typeof appleSeer !== 'number'){
    
    console.log('please, write correct tyof number');
}
else if(appleSeer <= 0){
    console.log('please, type integer number');
}
else{
   
    var convertTomon = appleSeer / 40;
    console.log(convertTomon);
}

// var convertTomon = appleSeer / 40;
// console.log(convertTomon);




