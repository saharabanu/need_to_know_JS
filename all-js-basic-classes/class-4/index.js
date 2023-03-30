var text = 'sahara Banu';

// text k uppercase, lowercase, indexOf, split,  all string methods in w3 school and string search methods, includes, etc.

// how to convert text to array  using split
// console.log(text.split('B'));


// how to reduce empty or extra space  using trim

// console.log(text.trim())

// concate  
//  console.log(text.concat(' ' + text))

// console.log(text[text.length -1])
//  console.log(text.indexOf('B'))


// parameter vs arguments
// function , recieve kore parameter, kono kisu pass kora argument,

//  4 type, only parameter return kore,  parameter nei and return kore, 

function sum(){
    var randNum = Math.floor(Math.random() * 5);

    return randNum;
}

// console.log(sum())

// recursion 
function sum1(num1){
    // console.log(num1);
    num1--;
    if(num1 === 1){
        // console.log('1 will be return');
        return num1;
    }
    sum1(num1)

    
}

sum1(6);

/// object, mutable mane update kora jai and immutable update kora jai na, object method, object keys and vlaue and pair, and entites


var myInfo= {
    name: 'sahara Banu',
    age: 27,
    profession: 'developer',
    status: 'married',
    wishes: ['leftenanat', 'cornel','PHD'],
    print: function () {
        console.log (this.wishes);
    },
    
}
var myInfo1= {
    name: 'amirul',
    age: 31,
    profession: 'mio',
    status: 'married',
    wishes: ['leftenanat', 'cornel','PHD'],
    print: function () {
        console.log (this.wishes);
    },
    
}
var myInfo2= {
    name: 'habibullah',
    age: 14,
    profession: 'student',
    status: 'unmarried',
    wishes: ['leftenanat', 'cornel','PHD'],
    print: function () {
        // console.log (this.wishes);
    }
   
}

var arr = [myInfo, myInfo1, myInfo2]

// console.log(myInfo);
// console.log(arr);
// console.log(arr[2]);

// how to access object property , .notation and [bracket]
// console.log(arr[2].name);
// console.log(arr[2]['age']);

// how to update object value 

// arr[2]['age'] = 15;
// arr[1].print()
// console.log(arr[2]['age']);
// console.log(arr[1].print());

var obj = {
    name: 'habibullah',
    age: 14,
    profession: 'student',
    status: 'unmarried',
    wishes: ['leftenanat', 'cornel','PHD'],
    print: function () {
        // console.log (this.wishes);
    }
   
}

for(var prop in obj){
    // console.log(obj[prop])
}

// console.log(Object.entries(obj))
// delete obj.status
// console.log(Object.entries(obj));


// constructor pattern 
var Person = function(name, age, address) {
    this.name =  name;
    this.age =  age;
    this.address =  address;
}

var person1 = new Person('Sahra', 26, 'dhaka')

// object er vitore array ase, oi array er lowest and highest value ber korte hobe.


console.log(Math.min() > Math.max)