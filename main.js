const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {
    const searchValue = document.getElementById('search').value;

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            findFood(data.meals);

        })
        .catch(error=>alert('Failed to find you food'));


    const findFood = food => {
        const FoodBox = document.getElementById('food-box');
        food.forEach(meals => {
            const foodName = meals.strMeal;
            const image = meals.strMealThumb;
            const idName = meals.idMeal;


            const createDiv = document.createElement('div');


            createDiv.className = "foodDesign";


            const foodsName = `
        <img onclick="displayFoodDetail('${idName}')" src="${image}" id="imageStyle">
        <h1 onclick="displayFoodDetail('${idName}')" id="foodName"> ${foodName} </h1>
        
        `;

            createDiv.innerHTML = foodsName;


            FoodBox.appendChild(createDiv);


        });


    }


});

const displayFoodDetail = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const foodData = data.meals[0];
            const foodImg = foodData.strMealThumb;
            renderFoodInfo(foodData, foodImg);

        });
}



const renderFoodInfo = (foodNamesId, foodImg) => {


    const ingredients = document.getElementById('ingredients');

    ingredients.innerHTML = ` 
            
    
    <u><span style="color:orange">INGREDIENTS <span> </u>  <br/> <img style="width:200px; border:2px solid #ddd; border-radius:1rem; margin-top:4px;" src ="${foodImg}">  <br/>  ${foodNamesId.strIngredient1} <br/> ${foodNamesId.strIngredient2} <br/> ${foodNamesId.strIngredient3} <br/> ${foodNamesId.strIngredient4} <br/> ${foodNamesId.strIngredient5}

    
            `;
    ingredients.style.border = "2px solid goldenrod";
    ingredients.style.height = "450px";
    ingredients.style.fontFamily = "cursive";
    ingredients.style.fontSize = "30px";
    ingredients.style.width = "550px";
    ingredients.style.padding = "20px";
    ingredients.style.borderRadius = "2rem";
    ingredients.style.marginTop = "5rem";
    ingredients.style.background = "antiquewhite";
    ingredients.style.textAlign = "center";
    ingredients.style.paddingTop = "20px";
    ingredients.style.marginLeft = "29%";




}

