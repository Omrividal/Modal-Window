const modal = document.querySelector(".modal");
const shopBtn = document.querySelector(".btn-shop");
const closeBtn = document.querySelector(".btn-close");
const openModalBtn = document.querySelector(".open-modal");

const closeModal = function () {
  modal.classList.add("hide");
};

const openModal = function () {
  modal.classList.remove("hide");
};

openModalBtn.addEventListener("click", function () {
  openModal();
});

shopBtn.addEventListener("click", function () {
  // just example
  closeModal();
});

closeBtn.addEventListener("click", function () {
  // just example
  closeModal();
});
