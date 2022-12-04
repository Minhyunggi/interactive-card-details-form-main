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

inputText[0].addEventListener("change", function () {
  document.querySelector(".card-front-subbox p").innerHTML = inputText[0].value;
});

inputText[1].addEventListener("change", function () {
  document.querySelector(".card-front-cardnumber p").innerHTML =
    inputText[1].value;
});
inputText[2].addEventListener("change", function () {
  document.querySelector(".mm").innerHTML = inputText[2].value;
});
inputText[3].addEventListener("change", function () {
  document.querySelector(".yy").innerHTML = inputText[3].value;
  document.querySelector(".slash").innerHTML = "/";
});
inputText[4].addEventListener("change", function () {
  document.querySelector(".card-back-cardnumber p").innerHTML =
    inputText[4].value;
});
