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

document.addEventListener("DOMContentLoaded", function() {
  // Отримати кнопку за її id
  let button = document.getElementById("edit-actions-workflow-request-status-sancel");

  // Отримати body
  let body = document.body;

  // Додати обробник події для кліку на кнопку
  button.addEventListener("click", function() {
    // Створити новий div з класом "bg"
    let div = document.createElement("div");
    div.className = "bg";

    // Додати клас "lock" до body
    body.classList.add("lock");

    // Додати створений div до body
    body.appendChild(div);
  });

  // Отримати всі елементи з класом .spv_close
  let spvCloseElements = document.querySelectorAll(".spv_close");

  // Додати обробник події для кожного елемента .spv_close
  spvCloseElements.forEach(function(spvCloseElement) {
    spvCloseElement.addEventListener("click", function() {
      // Видалити клас "lock" з body
      body.classList.remove("lock");

      // Отримати всі елементи з класом "bg" і видалити їх
      let bgElements = document.querySelectorAll(".bg");
      bgElements.forEach(function(bgElement) {
        bgElement.remove();
      });
    });
  });
});

