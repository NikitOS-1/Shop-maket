let productCounterEl = document.getElementById("product-counter");
let btnAddToCard = document.querySelectorAll(".btn-add-to-card");

btnAddToCard.forEach((item) => {
  item.addEventListener("click", function () {
    productCounterEl.textContent = +productCounterEl.textContent + 1;
  });
});

let btnMoreDetails = document.querySelectorAll(".btn-more-details");
let modal = document.querySelector(".modal-box");
let modalClose = document.getElementById("close");

btnMoreDetails.forEach((item) => {
  item.addEventListener("click", openModal);
});

modalClose.addEventListener("click", closeModal);

function openModal() {
  modal.classList.remove("hide");
  modal.classList.add("show");
}
function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

// likes-item

let likeBtn = document.querySelectorAll(".like");

likeBtn.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("onlike");
  });
});
