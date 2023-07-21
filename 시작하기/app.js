// 대화 상자 함수
// let age = prompt("나이를 입력해 주세요!", 100);
// alert(`당신의 나이는 ${age} 입니다!`);

// let result = confirm("당신이 주인인가요?");

// alert(result);

// let a = prompt("덧셈할 첫 번째 숫자를 입력하세요.", 1);
// let b = prompt("덧셈할 두 번째 숫자를 입력하세요.", 2);

// alert(Number(a) + Number(b));

// if 문
// let 사과 = 11,
//   바나나 = 10;
// if (사과 > 바나나) {
//   console.log("사과가 바나나보다 많습니다.");
// } else if (사과 == 바나나) {
//   console.log("사과와 바나나는 같습니다.");
// } else if (사과 < 바나나) {
//   console.log("바나나가 사과보다 많습니다.");
// }

// for 반복문
// 1에서 100까지 콘솔에 출력하라!
// for (let i = 1; i < 101; i++) {
//   console.log(i);
// }

// 1부터 100까지 합계
// let sum = 0;
// for (let i = 1; i < 101; i++) {
//   console.log(i);
//   sum = sum + i;
// }
// console.log("1부터 100까지 합계는:" + sum);

// 3일때 삼삼 5일때 오오 15일때 삼삼오오
// for (let i = 1; i < 101; i++) {
//   if (i % 15 == 0) {
//     console.log("삼삼오오");
//   } else if (i % 3 == 0) {
//     console.log("삼삼");
//   } else if (i % 5 == 0) {
//     console.log("오오");
//   } else console.log(i);
// }

// 함수 function
// 함수의 선언
// let user = "홍길동";
// function showMessage() {
//   let message = "안녕!";
//   alert(user + "님" + message);
// }

// 함수 호출(실행)
// showMessage();

// 지역변수 전역변수
// let b = "b";
// {
//   let a = "a";
//   var c = "c";
//   console.log(a);
//   console.log(b);
// }
// console.log(c);
// console.log(b);
// console.log(a);

// 함수의 인수
function showMessage(who, text) {
  who = "🚀" + who + "🚀";
  alert(who + ":" + text);
}

// 함수의 리턴(반환값)
function 더하기(a, b) {
  return a + b;
}
function 곱하기(a, b) {
  return a * b;
}
console.log(곱하기(10, 10));
let result = 곱하기(7, 10);
