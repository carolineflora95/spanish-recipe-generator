function generateRecipe(event) {
  event.preventDefault();

  let recipeSpace = document.querySelector("#recipe");

  new Typewriter("#recipe", {
    strings: "The Recipe Will Go Here",
    autoStart: true,
    delay: 50,
  });
}

let formElement = document.querySelector("#recipeForm");
formElement.addEventListener("submit", generateRecipe);
