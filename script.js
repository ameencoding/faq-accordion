"use strict";

const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  const element = e.target.closest(".question");
  const currentQuote = element.querySelector("blockquote");
  const currentBtns = element.querySelectorAll(".icons img");

  currentQuote.classList.contains("hide")
    ? hideAnswer(currentQuote, currentBtns[0], currentBtns[1])
    : showAnswer(currentQuote, currentBtns[0], currentBtns[1]);
});

const hideAnswer = (quote, btn0, btn1) => {
  quote.classList.remove("hide");
  btn0.classList.add("hide");
  btn1.classList.remove("hide");
};

const showAnswer = (quote, btn0, btn1) => {
  quote.classList.add("hide");
  btn0.classList.remove("hide");
  btn1.classList.add("hide");
};
