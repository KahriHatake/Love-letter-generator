function displayPoem(response) {
    const poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "";

  new Typewriter(poemElement, {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "4b08f845751300d9odtfbffbbf0216ac";
  let prompt = `User instruction: Generate a sonnet about ${instructionsInput.value}`;
  let context = `let context = "You are a poem-writing expert who generates heartfelt short poems. Return a 10 line poem that rhymes using simple <br> tags for new lines. Do not wrap the output in <html> or <body> tags. Only return the poem.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `<span class="blink">⏳</span> Generating poem...`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
