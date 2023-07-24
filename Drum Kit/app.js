// alert("ㅇ아아아아아아아");
const btn1 = document.querySelector("button");
const btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    console.log(e.target.innerText);
    const key = e.target.innerText;
    // 내가 클릭한 드럼의 글자색을 흰색으로 변경
    e.target.style.color = "white";
    // 내가 클릭한 드럼의 소리를 냄!
    drumPlay(key);
  });
}
document.addEventListener("keydown", function (e) {
  const key = e.key;
  drumPlay(key);
});

// 반복되는코드 정리
function drumPlay(key) {
  if (key == "w") {
    const audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (key == "a") {
    const audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (key == "s") {
    const audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (key == "d") {
    const audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (key == "j") {
    const audio = new Audio("sounds/snare.mp3");
    audio.play();
  } else if (key == "k") {
    const audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (key == "s") {
    const audio = new Audio("sounds/kick.mp3");
    audio.play();
  }
}

// btn1.addEventListener("click", function () {
//   alert("클릭됨");
// });

// function handleClick() {
//   alert("클릭됨!");
// }
