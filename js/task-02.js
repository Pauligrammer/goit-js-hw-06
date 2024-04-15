const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

ingredients.forEach(ingredient => {
  const elem = document.createElement("li");

  elem.textContent = ingredient;
  elem.classList.add("item");

  ingredientsList.appendChild(elem);
});