
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
.then(response => response.json())
.then(data => displayMeals(data.meals));

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals');


    meals.forEach(meal => {

        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        
        const mealInfo = `
            <a href = "${meal.strMealThumb}">
            <img class = "meal-detail" onclick = "displayMealDetails(${meal.strMeal})" src ="${meal.strMealThumb}">
            <h3 class = "meal-name">${meal.strMeal}</h3>
        `;
        mealDiv.innerHTML = mealInfo;
        mealsContainer.appendChild(mealDiv);
    });

}

const displayMealDetails = meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    fetch(url)
    .then(response => response.json())
    .then(data => renderMealInfo(data[0]));
}

const renderMealInfo = meal => {
    const mealDiv = document.getElementById('meal-detail');
    mealDiv.innerHTML = `
        <h1>${meal.strMeal}<h1>
        <img src ="${meal.strMealThumb}">
    
    `
}

