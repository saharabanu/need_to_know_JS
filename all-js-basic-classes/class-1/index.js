var Num1 = "te";   //it is pasecal case
var num2 = "67";
var is_right= true ;
var numconvert = Number(Num1);
// number e convert 
var isNumber = true  // it is a camel case

// console.log(   numconvert + isNumber , num2, isNumber)

/* 
 alt+shift+a dile multiple line comment
*/

// console.log(Number(true));
// console.log(Number(false));
// console.log(Number("10"));
// console.log(Number("  10"));
// console.log(Number("10  "));
// console.log(Number(" 10  "));
// console.log(Number("10.33"));
// console.log(Number("10,33"));
// console.log(Number("10 33"));
// console.log(Number("John"));

var x = 123.45346;
// console.log(x.toExponential(2));
// console.log(x.toFixed(2));
// console.log(x.valueOf());
// console.log(x.toString());
// console.log(x.toString());

var num = 49.4538538;
var numm = 6;
// console.log(Math.floor(num));
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.random(numm));


var name = ' saLeha '
// console.log(name.toLowerCase());

var date = new Date();
// console.log(date);
// console.log(date);
// console.log(date);
// console.log(date);
// console.log(date);

// const sentence = 'Mastering JS is a very helpful website';
var sentc = 'he is a good boy'
// console.log(sentc.slice(-7)); // 'website'
// console.log(sentc.substring(3)); // 'website'
// console.log(sentc.slice(4, 1)); // 'website'
// console.log(sentc.substring(3)); // 'website'

const sentence = 'Mastering JS is a very helpful website';
console.log(sentence.substring(12, 0)); // 'Mastering JS'
console.log(sentence.slice(3, 8)); // ''
console.log(sentence.slice(0, 12)); // 'Mastering JS'

// console.log(sentence.substring( 14)); // 'Mastering JS'

// console.log(sentence.slice(0, -26)); // 'Mastering JS'


// console.log(new Date(date ));
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)


var name = 'kawser kabir'
// console.log(name.slice(3,6));
// console.log(name.substring(3,6));


var sum = 0;

for(i= 1; i <= 10; i++){

    if(i % 2 == 0){
        sum += i
    }

}
console.log(sum);