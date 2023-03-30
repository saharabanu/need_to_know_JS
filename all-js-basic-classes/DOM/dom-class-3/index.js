// window,  document innerheight, width, BOM, ES6, let, const, tempplate literals, ternary operator, rest parameter, spread operator, modules, for of loop, array method, mutable  an dimmutable array method


const test = () => {
    // console.log('test')
}

var arr = [3,67, 5,780,90]

arr.forEach((i, index, arr)=>{
    // console.log(i, index, arr)
})

arr.map((num) => {
    // console.log(num)
})

// console.log(arr)

// mutable  // jeita main array change kore seita mutable, aigulu onek
// immutable  // jeita main array change korena seita immutable, filter, map, slice, concat



// class 4   functional programming, higher order function, filter, map, reduce, sort, api

// filter // immutable, return new array

let people = [
    {name: 'Sahara', age: 27},
    {name: 'Acia', age: 32},
    {name: 'Ayesha', age: 35},
    {name: 'Saleha', age: 50},
    {name: 'Asma', age: 52},
    {name: 'Ramjan', age: 42},
    {name: 'Elias', age: 40},
    {name: 'Yeaqub', age: 30},
];


let func = people.filter((i)=> {
    return i.name[0] === "Y"
})

// console.log(func)


// using for loop 

let newarr = [];

for (let i = 0; i < people.length; i++) {
    // if(people[i].name[0] === "Y"){
    //       newarr.push(people[i])
    // }
    // if(people[i].age >=40){
    //       newarr.push(people[i])
    // }

    let data = `My name is ${people[i].name } + " ." + My age is ${people[i].age}`
    // console.log(data)
    
}
//  console.log(newarr)
let myData = people.map(i => {
    // console.log(`My name is ${i.name } + " ." + My age is ${i.age}`)
})

// using map 
//map



let sum = arr.reduce((prev, curr,index, arr)=>{
    // console.log(arguments)
    const data = prev + curr;

    return data

},0)
// console.log(sum)


let data = `amir 24 dhaka
sumir 34 borishal 
julei 21 cumilla`

data = data.split('\n')
.map((i) =>{
    return i.split(' ')
})
.reduce((prev, curr) =>{
    prev[curr[0]] = prev[curr[0]] || [];
    prev[curr[0]].push({
        age: curr[1],
        address: curr[2],
    });
   return prev
},{})


// console.log(data);



let testData =` Taher Mamun  55  Sylhet
 Oliba Oli  23  Dhaka
 Shara Banu  25  Ctg`;

// system 1 object in array [{}]

let data1 = testData.split("\n").map(item =>item.split('  ')).reduce((prev, curr) =>{
prev.push({
    name: curr[0],
    age: curr[1],
    address: curr[2],
})
return prev
},[])

// console.log("1 object in array",data1, )

  
// system 2 object in array [[{}]] 

let data3 = testData.split("\n").map(item =>item.split('  ')).reduce((prev, curr) =>{
    
    
prev.push( [
    
    {
        
        name: curr[0],
        age: curr[1],
        address: curr[2],
    }
])
return prev
},[])

// console.log("Object in Array and Array", data3)
// system 2 object in array [[{},{},{}]]

let data4 = testData.split("\n").map(item =>item.split('  ')).reduce((prev, curr) =>{
    
prev.push([
    
       
       { name: curr[0]},
       { age: curr[1]},
        {address: curr[2]},
    
])
return prev
},[])

// console.log("Object of Array in Array",data4)
let data5 = testData.split("\n").map(item =>item.split('  ')).reduce((prev, curr) =>{
    prev[curr[0]] =  prev[curr[0]]|| [];
    prev[curr[0]].push(
      
       
       { age: curr[1]},
       {address: curr[2]},
    
)
return prev
},{})

// console.log("Object in Array[0] and object in array ",data5);




// sorting in Array 


const number = [20, 40,720, 409, 564, 97265, 435,2, 7, 100, 610, 1];

const fruits = [ "Jackfruits", "plum", "orange", "banana","Bramble", "black berry", "mango", "lichi", "Apple"];

const ans = fruits.sort((a, b) =>{
    let first = a.toLowerCase();
    let second = b.toLowerCase();
    return first=== second ? 0: first > second ? 1 : -1; 

})
console.log(ans)

// fruits.map((item)=>{
//     const handleCase = item.toLowerCase();

//     console.log(handleCase.sort());
// })


// console.log(handleCase.sort())

var nums = [5,2,3,1];

const sorting =nums.sort((a,b) =>{
    return a-b
})
var sortArray = function(nums) {
     var sot = nums.sort((a,b)=>{
        return a-b
        
    });
    console.log(sot) 
};
sortArray(nums)

var notdefined;
var myarray = ['a', 'c', null, notdefined, 'nulk', 'BYE', 'nulm'];

myarray.sort(ignoreCase);

// alert(JSON.stringify(myarray));    // show the result

function ignoreCase(a,b) {
    return (''+a).toUpperCase() < (''+b).toUpperCase() ? -1 : 1;
}
console.log(myarray);

const students = [
    { name: "Saim", age: 25 },
    { name: "Ratna", age: 34 },
    { name: "Eaqub", age: 13 },
    { name: "Sam", age: 41 },
  ]
  students.sort((firstItem, secondItem) => firstItem.age - secondItem.age);
  console.log(students)






