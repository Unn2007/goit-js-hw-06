const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listIngredients = document.querySelector("#ingredients");
const itemsIngredients = [];

ingredients.forEach((item, index) => {
  itemsIngredients.push(document.createElement("li"));
  itemsIngredients[index].textContent = item;
  itemsIngredients[index].classList.add("item");
});
listIngredients.prepend(...itemsIngredients);
