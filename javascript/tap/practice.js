document.querySelectorAll(".list")[0].addEventListener("click", (e) => {
  console.log(e.target.dataset.id);
  tabButton(e.target.dataset.id);
});

function tabButton(a) {
  document.querySelectorAll(".tab-button")[a].addEventListener("click", () => {
    // 모든 요소를 class를 remove 하고
    for (let i = 0; i < document.querySelectorAll(".tab-button").length; i++) {
      document.querySelectorAll(".tab-button")[i].classList.remove("here");
      document.querySelectorAll(".tab-content")[i].classList.remove("show");
    } // 이벤트된 요소만 클래스 add해서 보여주기
    document.querySelectorAll(".tab-button")[a].classList.add("here");
    document.querySelectorAll(".tab-content")[a].classList.add("show");
  });
}
