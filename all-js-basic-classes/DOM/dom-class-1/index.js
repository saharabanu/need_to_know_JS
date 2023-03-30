document.body.style.background = 'orange'

var title = document.querySelector('#title');
title.innerText = 'hello';

title.style.textTransform = 'uppercase';

var inputs = document.querySelectorAll("input");
console.log(inputs[0].value);

// createElement, appendchils, append are same, prepend, removechild 

var li = document.createElement('li');
li.innerText = '4444';

var list = document.querySelector('.list');
var list = document.querySelector('.list').children[1];
// console.log(list)

// list.appendChild(li) // add in last
//  list.prepend(li) // add in first
list.insertBefore(li,list.children[1]) // add in middle or any where
// list.insertAdjacentElement(li,list.children[1]) // add in  dekhe nite hobe


var link = document.querySelector('a');

link.getAttribute('href')// to get attribute
link.setAttribute('class','link2')// to set any attribute

console.log(link.getAttribute('class',link.setAttribute('id', "link3"))  ); // to set and get together

// link.href = 'gghh'

// console.log(link.parentElement  );
// nextelement siblinf etc

// console.log(link.classList);
// console.log(link.classList.add('happy'))
// console.log(link.classList.toggle('')) // dekhte hobe

