// class 3\


// truthy and falsy value  

// all falsy value are  false, 0, -0, "", null, undefined, naN, On

// all truthy value are    "0", "false", [], {}, function (){} and everything is truthy value without falsy value



// function 

// var a = 5 ;
// var b = 6;

function  add (a, b) {
//  console.log( a + b)
}
add(4,5)

var a = 60; // it is global scope
// function scope 


// invoke function 

(function add1 (a){
    // console.log('hello', a)
})(6)


// variable store function or function expression
var multiplyFunc = function add1 (a,b){
    var multiply = a * b
    return multiply
}
// console.log(multiplyFunc(6,9))



// array , index, length, iteration, travers,

var array1 = [ 'a', 'b','c', 'f'];

var numArray = new Array(1,34, 67, 89,89) ;// eivabew array create kora jai

// console.log(array1,numArray)

// how to access data  from array using index
// console.log(numArray[0]);
// console.log(numArray[0] = 2);

// how to add data  in array using index

var num = [];

num[0] = 5;
num[1] = 5;
num[6] = 5;
// console.log(num)

//  array and function 
function helloFunc (name, msg, index){
//   console.log('this  number is ', name, msg, index);
}

var num2Array = [200,673,893,544,538,90]; // it is one dimensional array

// console.log(num2Array.length);

for( var i = 0; i < num2Array.length; i++){
    // console.log(num2Array[i])
    if(i %2 == 0){
        helloFunc(num2Array[i],'all even number', i )
    }
    else{
        helloFunc(num2Array[i], 'not even', i)
    }
}

// reverse 

for( var i = num2Array.length - 1; i >=0; i--){
// console.log(num2Array[i])
}

var num3Array = [[200,300,400,500],[675,789],[568,894,234]]; // it is two dimensional array
// console.log(num3Array[0][2])

for(var i = 0; i<num3Array.length; i++){

    // console.log(num3Array[i])

    for (let j = 0; j < num3Array[i].length; j++) {
        // console.log(num3Array[i][j])
        
    }

}

// array data Structure and how to add new element in last 

var num4Array = [2,5,7,9,20,30,56];

var addLastNumber = num4Array[(num4Array.length -1) + 1] = 90; // this system are same;
var add1LastNumber = num4Array[ num4Array.length] = 100  // this system are same;
// console.log(num4Array,addLastNumber, add1LastNumber);

// array data Structure and how to add new element in first
for(var i = num4Array.length; i>=0; i--){
    // console.log(num4Array[i], num4Array.length)

    num4Array[i] = num4Array[i -1];

    //   console.log(num4Array[i], num4Array.length)
    if(i == 0){
        num4Array[0] = 800;

    // console.log(num4Array, num4Array.length)
    }

    

}
num4Array[0] = 900;// same

    //  console.log(num4Array, num4Array.length)

// array Push, pop, shift, unshift 

//linear  search algorithm 

for(var i = 0; i<=num4Array.length -1; i++){
    if(num4Array[i] === 30){
        // console.log('It is very important', num4Array[i])
    }
    else{
        // console.log('alll', num4Array[i])
    }
}


var maxNumber = [56,90,45,34,55, 24, 900];
// console.log(Math.max(...maxNumber))
function maxNumberFunc(maxNumber) {
    var max = maxNumber[0];
    for (let i = 1; i <= maxNumber.length ; i++) {
        
        if(maxNumber[i] >= max){
           max = maxNumber[i];
           return max
           
        //    console.log(max);
          
        }
        
       
        
    }
    // return max
}
// console.log(maxNumberFunc(maxNumber))


