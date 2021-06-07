///////////// --------   бургер меню
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
  });
})();
const navEl = document.querySelector("[data-menu]");
const menuBtnRef = document.querySelector("[data-menu-button]");
navEl.addEventListener("click", (e) => {
  if (e.target instanceof HTMLAnchorElement) {
    navEl.classList.remove("is-open");
    menuBtnRef.classList.remove("is-open");
  }
});
//////////////////////////////

////////// ------ плавный переход по ссылкам-якорям
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
///////////////////////

///// -----  попытка перебора массива

// первый массив
let arr = ["#monkey", "#Bone", "#Box"];
// получаем случайное значение первой секции слот-машины
let rand = Math.floor(Math.random() * arr.length);
console.log(arr[rand]);
// второй массив
let secondArr = ["#monkey", "#Bone", "#Box"];
// получаем случайное значение второй секции слот-машины
let secondRand = Math.floor(Math.random() * arr.length);
console.log(secondArr[secondRand]);
// третий массив
let thirdArr = ["#monkey", "#Bone", "#Box"];
// получаем случайное значение третей секции слот-машины
let thirdRand = Math.floor(Math.random() * arr.length);
console.log(thirdArr[thirdRand]);

function multi() {
  let startBalance = 100;
  for (let i = startBalance; i < 1000; i++) {
    if (
      arr[rand] === secondArr[secondRand] &&
      arr[rand] === thirdArr[thirdRand]
    ) {
      document.getElementById("result").innerHTML = "You are win";
      balance = startBalance;
      document.getElementById("balance").innerHTML = balance + "$";
    } else {
        document.getElementById("result").innerHTML = "Loser";
        balance = startBalance - 10;
        document.getElementById("balance").innerHTML = balance + "$";
      }
  }
}

document.getElementById("btn").addEventListener("click", function () {
  multi();
});
