function generatePoem(event) {
  event.preventDefault();

  const poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "";

  new Typewriter(poemElement, {
    strings: "La tombe dit à la rose",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
