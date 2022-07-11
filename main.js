const button = document.querySelector(".share button");
const modal = document.querySelector(".share-modal");
button.addEventListener("click", () => {
  modal.classList.toggle("active");
});
