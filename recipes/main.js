//import recips.mjs//
import recipes from './recipes.mjs';
//console.log(recipes);//

//random function//
function randomNumber(num) {
	let random = Math.floor(Math.random()*(num-1));
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
					${recipe.tags.map(tag => `<span class="tag">${tag}</span>`)}
                </div>
                
                <h2>${recipe.name}</h2>
                
                <span
	                class="rating"
	                role="img"
	                aria-label="Rating: ${recipe.rating} out of 5 stars"
                >
	                <span aria-hidden="true" class="icon-star">⭐</span>
	                <span aria-hidden="true" class="icon-star">⭐</span>
	                <span aria-hidden="true" class="icon-star">⭐</span>
	                <span aria-hidden="true" class="icon-star-empty">⭐</span>
	                <span aria-hidden="true" class="icon-star-empty">☆</span>
                </span>
                
                <p class="recipe-description">
                    ${recipe.description}
                </p>
            </article>
        </section>
	`;
}

console.log(recipeTemplate(generateRecipe(recipes)));
//template function to generate markup to display tags (takes list of tags as parameter)//

//template function for rating stars, takes numbers as a parameter for number of stars to display//

//create init function to run when the page loades to render out a random recipe.//

//test page//