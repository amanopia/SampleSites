var randomNumber1 = Math.ceil(Math.random()*6)
var randomNumber2 = Math.ceil(Math.random()*6)
var diceFace1 = "images/dice"  + randomNumber1 + ".png";
var diceFace2 = "images/dice"  + randomNumber2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", diceFace1);
document.querySelectorAll("img")[1].setAttribute("src", diceFace2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Won!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector('h1').innerHTML = "Player 2 Won! 🚩";
} else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
