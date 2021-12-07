const button = document.querySelector(".modal-btn");
const overlay = document.querySelector(".modal-overlay");
const close_btn = document.querySelector(".close-btn");

button.addEventListener("click", function () {
    overlay.classList.add("open-modal"); //using the css defined class
});

close_btn.addEventListener("click", function () {
    overlay.classList.remove("open-modal");
});