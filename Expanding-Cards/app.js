const panels = document.querySelectorAll(".panel");

// for(let i=0; i<panels.length;i++){
//   panels[1].addEventListener()
// }

panels.forEach(function (panel) {
  panel.addEventListener("click", function () {
    // 모든 패널에서 active 클래스 제거하기
    removeActiveClass();
    panel.classList.add("active");
  });
});
function removeActiveClass() {
  // 패널에 있는 모든 엑티브 클래스를 제거한다.
  // panels[0].classList.remove("active");
  // panels[1].classList.remove("active");
  // panels[2].classList.remove("active");
  // panels[3].classList.remove("active");
  // panels[4].classList.remove("active");
  panels.forEach(function (p) {
    p.classList.remove("active");
  });
}
