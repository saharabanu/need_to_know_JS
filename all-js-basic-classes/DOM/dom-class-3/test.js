 const getData = (api,callbackFunc) => {
 fetch(api)
.then(res => res.json())
.then(data => callbackFunc(data.meals));
};

// display data 
const displayData = (data) => {

    const foodSection = document.querySelector('.all-food');
    foodSection.innerHTML = null;
    const notFound = document.getElementById("not_result");
    
       data.map( item =>{
        const div = document.createElement("div");
        div.classList ="card";
        let allItem = ` 
        <img src=${item.strMealThumb} alt="food-img">
        <h3>${item.strMeal}</h3>
      `
      div.innerHTML = allItem;

      foodSection.appendChild(div)

    }) 
//  console.log(data)

};

const history = [];
// search food 
const form  = document.querySelector('.search-box');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = document.getElementById('input-box').value;
    // console.log(history)
    handleHistory(value) 
    getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`, displayData)
    
});


const handleHistory = (data) => {
  const found = history.filter(item => item.keyword === data);
  // console.log(found);
  if(found == false){
    history.push({
      id: Date.now(),
      keyword : data,
      numberOfItem : 1
    });
    
  }
  else if(found){
    history.map(item => {
      if(found[0].id === item.id){
        item.numberOfItem++

      }
    })

  }

  displayHistory()

};

// show history  

const displayHistory  = () => {
  const divHistory =  document.getElementById('show_history');
  divHistory.innerHTML = null;
  history.map(item => {
  
    const p = document.createElement("p");
    p.innerText = `${item.keyword}  -  ${item.numberOfItem}`;
    divHistory.appendChild(p)
  });
  
};
getData('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian', displayData);



