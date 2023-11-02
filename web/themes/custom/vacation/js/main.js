// Отримати всі елементи з класом "spv_close"
let elements = document.getElementsByClassName("spv_close");

// Пройтися по кожному елементу і додати клас "button"
for (let i = 0; i < elements.length; i++) {
  elements[i].classList.add("button");
}
let close = document.querySelector(".spv_close");
let container = document.querySelector("#popup-state form .form-actions");
// Перевірити, чи обидва елементи існують на сторінці
/*if (close && container) {
  // Перемістити елемент в контейнер
  container.appendChild(close);
}*/

document.addEventListener("DOMContentLoaded", function() {
  // Отримати всі елементи з класом "spv_close"
  var spvCloseElements = document.querySelectorAll(".spv_close");

  // Пройтися по кожному елементу і змінити вміст на "No"
  spvCloseElements.forEach(function(element) {
    element.textContent = "No";
  });
});

const block = document.querySelector("#block-vacationusermenu");
const navigation = document.querySelector("#block-vacationusermenu .menu");
const region = document.querySelector(".region-primary-menu");
const formregion = document.querySelector(".page-wrapper__node-edit-form");

// Додайте div з класом .burger-menu
const burgerMenu = document.createElement("div");
burgerMenu.classList.add("burger-menu");
block.appendChild(burgerMenu);

// Додайте слухач події на клик
burgerMenu.addEventListener("click", function() {
  // Додайте клас .show
  burgerMenu.classList.toggle("show");
  navigation.classList.toggle("show");
  region.classList.toggle("show");
  formregion.classList.toggle("show");
});

const expanded = document.querySelectorAll(".menu-item");

expanded.forEach(element => {
  if (element.classList.contains("menu-item--expanded")) {
    const plus = document.createElement("div");
    plus.classList.add("sub-burger");
    element.insertBefore(plus, element.firstChild);
  }
});

const exp = document.querySelectorAll(".sub-burger");

exp.forEach(element => {
  element.addEventListener("click", function() {
    this.classList.toggle("show");
    const submenu = this.closest(".menu-item--expanded");
    submenu.classList.toggle("show");
  });
});
window.addEventListener("resize", () => {
  // Отримуємо ширину вікна в пікселях
  const windowWidth = window.innerWidth;

  // Якщо ширина вікна >= 801 пікселів, видаляємо клас `show` з елемента `navigation`
  if (windowWidth >= 801) {
    navigation.classList.remove("show");
    region.classList.remove("show");
    burgerMenu.classList.remove("show");
    formregion.classList.remove("show");
  }
});
