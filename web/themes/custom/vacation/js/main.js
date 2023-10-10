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
