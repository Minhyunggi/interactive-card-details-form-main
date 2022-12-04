let inputText = document.querySelectorAll("#card-input");
let blank = document.querySelectorAll(".blank");
for (let i = 0; i < inputText.length; i++) {
  inputText[i].addEventListener("focusout", function () {
    if (inputText[i].value == "") {
      blank[i].classList.remove("hidden");
    } else {
      blank[i].classList.add("hidden");
    }
  });
}
