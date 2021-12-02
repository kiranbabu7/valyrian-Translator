const url = "https://api.funtranslations.com/translate/valyrian.json";
const userInput = document.querySelector("#userinput");
const translateBtn = document.querySelector(".translate");
const translatedOutput = document.querySelector(".translated-output");

function constructURL(inputText) {
  return `${url}?text=${inputText}`;
}

function buttonClickHandler() {
  var input = userInput.value;
  var finalURL = constructURL(input);
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((jsonResponse) => {
      translatedOutput.textContent = jsonResponse.contents.translated;
    })
    .catch((error) => {
      alert("Erorr occured. Check console for more details");
      console.log(error);
    });
}

translateBtn.addEventListener("click", buttonClickHandler);
