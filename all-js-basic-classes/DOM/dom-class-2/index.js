// set timeout, setinterval, 

// clock function  project 1

function digitalClock (){
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var timeFormat = "AM";


    // var finalOutput = hours + " : " + minutes + " : " + seconds;

    // console.log(finalOutput)


    if(hours > 12 ){
        var finalOutput = 0 + hours + " : " + minutes + " : " + seconds;
    }
    if(minutes < 10 ){
        var finalOutput =  hours + " : " + 0 + minutes + " : " + seconds;
    }
    if(seconds < 10 ){
        var finalOutput =  hours + " : " + minutes + " : " + 0 + seconds;
    }

    if(hours === 0 ){
        hours = 12
    }
    else{
        hours = hours - 12;
        timeFormat = "PM"
    }

    


    var clock = document.getElementById('timer');
    var formate = document.getElementById('clock-timer');

    clock.innerText = finalOutput;
    formate.innerText = timeFormat;
}

setInterval(digitalClock, 1000);




// slider project start 
var allImages = [
    "./images/1.png",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg"
]
// console.log(allImages)

var slider = document.querySelector('.sliders img');

var prev = document.querySelector(".prev");
var next= document.querySelector('.next');

function sliderFunc (){
   


next.addEventListener('click' , function(){


    // console.log('click')
    var current = slider.getAttribute('src');
    // console.log(current); for getting current value 

    var currentIndex = allImages.indexOf(current);

    if(currentIndex == allImages.length -1){
        slider.src = allImages[0]; // for error handndling if data is not found or not in array
    } 
    else{
        slider.src = allImages[currentIndex + 1];
    }
    // console.log(currentIndex)

    
})
prev.addEventListener('click' , function(){


    
    var current = slider.getAttribute('src');
    // console.log(current); for getting current value 

    var currentIndex = allImages.indexOf(current);

    if(currentIndex == 0){
        slider.src = allImages[allImages.length - 1];
    } 
    else{
        slider.src = allImages[currentIndex - 1];
    }
    // console.log(currentIndex)

    
})

}

sliderFunc()





// slider project end


