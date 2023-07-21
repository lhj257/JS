// alert("h1");
// 이미지요소(엘러먼트)들을 선택
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const h1 = document.querySelector("h1");

// 랜덤 넘버 1에서 6
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1);
console.log(randomNumber2);

// 이미지 객체에 src속성의 값을 입력
img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

//누가이겼는지 판단!
// h1.innerText = "누가 이겼음!🚩";

if (randomNumber1 > randomNumber2) {
  h1.innerText = "🚩Player 1 Win!";
} else if (randomNumber1 < randomNumber2) {
  h1.innerText = "Player 2 Win!🚩";
} else if (randomNumber1 == randomNumber2) {
  h1.innerText = "Draw!";
}
