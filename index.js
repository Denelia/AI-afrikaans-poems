function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:"Ek was gevra om ietsie oor Pa te sê",
    autoStart:true,
    delay:1,
    cursor:"",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
