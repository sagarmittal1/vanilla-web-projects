const getMealBtn = document.querySelector('.btn');
const mealContainer = document.querySelector('.meal');

function createMeal(meal) {
  const ingredients = [];
  for(i = 1; i <= 20; i++) {
    if(meal[`strIngredient${i}`]) {
      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
    }else{
      break;
    }
  }

  mealContainer.innerHTML = `
<div class="side-bar">
  <img id="meal-image" src=${meal.strMealThumb} alt="Meal Img">
  <p id="category"><strong>Category:</strong> ${meal.strCategory}</p>
  <p id="area"><strong>Area:</strong> ${meal.strArea}</p>
  <p id="tags"><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>
  <h2>Ingredients: </h2>
  <ul id="ingredients">
    ${ingredients.map(ingredient => `
      <li>${ingredient}</li>
    `).join('')}
  </ul>
</div>
<div class="main">
  <h2 id="meal-name">${meal.strMeal}</h2>
  <p id="instructions">${meal.strInstructions}</p>
  <div id="meal-video">
  <iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"></iframe>
  </div>
</div>
  `;
}

getMealBtn.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((res) => res.json())
    .then((data) => {
      createMeal(data.meals[0]);
    });
});
