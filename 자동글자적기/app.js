const textEl = document.querySelector("#text");
const speedEl = document.querySelector("#speed");

const text = "안녕하세요🙋‍♂️ 257의 포트폴리오 사이트 입니다.👏👏";

let idx = 1; //문자열 인덱스번호 1 초기값
let speed = 300 / speedEl.value; //문자열 출력속도

writeText(); //초기 실행하면 계속실행됨
function writeText() {
  textEl.textContent = text.slice(0, idx); // 첫번째 문자부터 idx까지 잘라내기
  idx++;
  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(writeText, speed); //speed초 후에 writeText함수 실행함(계속 반복됨)
}
//문자열 속도 변경시
speedEl.addEventListener("change", function (e) {
  speed = 300 / speedEl.value;
});
