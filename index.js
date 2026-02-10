  
  function displayPoem(response){
  new Typewriter("#poem", {
    strings:response.data.answer,
    autoStart:true,
    delay:1,
    cursor:"",
  });
}


function generatePoem(event) {
  event.preventDefault();


let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ba30d32cb59f4of366560at60dd0fa87";
  let context =
    "You are a romantic Poet and love to write short poems. You have to please to generate a 4 line poem and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a Afrikaans poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating an Afrikaans poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
