let bigger = 0;
let smaller = 0;
let rounds = 0;
let number = 0;
let attempts = 1;
let guess = null;

function start() {
  let number, guess, button, submit, label3, attempts, rounds, label4;
  label3.config(text = "");
  attempts = 1;
  rounds += 1;
  number = Math.floor(Math.random() * 100) + 1;
  button.destroy();
  submit.config(height = 1, width = 6);
  submit.pack();
  button = document.createElement("button");
  button.innerText = "skip round";
  button.addEventListener("click", start);
  guess.pack();
  label4.config(text = "total round(s): " + rounds);
  label4.pack();
  label2.config(text = "new round has started");
}

function done() {
  guess.pack();
  try {
    let guessValue = parseInt(guess.get());
    if (guessValue === number) {
      label1.config(text = "you win!", font = "arial 25");
      label3.config(text = "total attempts: " + attempts);
      label3.pack();
      bigger = 0;
      smaller = 0;
      button.innerText = "play again";
    } else if (guessValue > number) {
      bigger = 0;
      smaller += 1;
      label1.config(text = "guess smaller ×" + smaller, font = "arial 25");
      attempts += 1;
    } else if (guessValue < number) {
      smaller = 0;
      bigger += 1;
      label1.config(text = "guess bigger ×" + bigger, font = "arial 25");
      attempts += 1;
    }
  } catch (error) {
    label1.config(text = "error!", font = "arial 25");
  }
}

let label = document.createElement("label");
label.innerText = "guess the number (1-100)";
label.pack();

let label1 = document.createElement("label");
label1.pack();

let submit = document.createElement("button");
submit.innerText = "submit";
submit.addEventListener("click", done);

let button = document.createElement("button");
button.innerText = "start!";
button.addEventListener("click", start);
button.pack();

let label2 = document.createElement("label");
let label3 = document.createElement("label");
let label4 = document.createElement("label");

document.body.appendChild(label);
document.body.appendChild(label1);
document.body.appendChild(submit);
document.body.appendChild(button);
document.body.appendChild(label2);
document.body.appendChild(label3);
document.body.appendChild(label4);
