function displayPoem(response) {
  console.log("poem generated");

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
    "User instructions: You are a dark comedy expert and love to write short poems. Your mission is to generate a four line poem with basic HTML and separate the line with a <br />. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI'";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`Promt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
