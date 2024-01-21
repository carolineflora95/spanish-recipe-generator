function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");

  let apiKey = "9a33fd779e40o2b13tb533b7a79f4beb";
  let prompt = `User Instructions = Generate a Spanish Recipe Idea which uses ${instructionsInput.value} as its main ingredient`;
  let context =
    "You are an experienced Spanish chef. Please give a recipe idea which includes the ingredient provided by the user. It should be only the name of the dish and a short description, but don't label the sections";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating"> ⏲️ Generating a Spanish Recipe Using ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let formElement = document.querySelector("#recipeForm");
formElement.addEventListener("submit", generateRecipe);
