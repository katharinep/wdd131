//import recips.mjs//
import recipes from './recipes.mjs';
//console.log(recipes);//

//random function//
function randomNumber(num) {
	let random = Math.floor(Math.random()*(num));
	return random;
}

//function that takes the imported recipes and uses random function to return a recipe//
function generateRecipe(recipes) {
	const randomRecipe = randomNumber(recipes.length);
	return recipes[randomRecipe];
}

//console.log(generateRecipe(recipes));//

//create template function in HTML//
function recipeTemplate(recipe) {
	return `<section id="recipes">
            <img src="${recipe.image}" alt="${recipe.name}">
            <article class="recipe">

                <div class="tags">
					${tagsTemplate(recipe.tags)}
                </div>
                
                <h2>${recipe.name}</h2>
                
				${ratingTemplate(recipe.rating)}
                
                <p class="recipe-description">
                    ${recipe.description}
                </p>
            </article>
        </section>
	`;
}

//console.log(recipeTemplate(generateRecipe(recipes)));//

//template function to generate markup to display tags (takes list of tags as parameter)//
function tagsTemplate(tags) {
	return tags.map(tag => `<span class="tag">${tag}</span>`).join('');
}

//template function for rating stars, takes numbers as a parameter for number of stars to display//
function ratingTemplate(rating) {
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
	for (let i = 1; i <= 5; i++) {
		if (i <= rating) {
			html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
		} else {
			html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
		}
	}

	html += `</span>`
	return html;
}

//const recipe = generateRecipe(recipes);//
//console.log(recipeTemplate(recipe));//

//create init function to run when the page loades to render out a random recipe.//
function renderRecipes(recipeList) {
	// get the element we will output the recipes into
	const recipeArticle = document.getElementById("recipes");
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
	// Set the HTML strings as the innerHTML of our output element.
	recipeArticle.innerHTML = recipeList.map(recipeTemplate).join('');
}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();
//test page//