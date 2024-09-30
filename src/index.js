function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "69fo350cf347a61tc6a94bf3497a464e";
  let prompt = `Generate a French poem about ${instructionsInput.value}`;
  let context =
    "User instructions: You are a jokes expert and love to write short poems. Your mission is to generate a 4 line French poem in basic HTML and separate each line with a <br />. Do not add a title to the poem. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI'";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a french poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
