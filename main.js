// slider

$(".slider-box").slick({
  dots: true,
});

//------------------item - main--------------------
// item likes or deslikes

let likeBtn = document.querySelectorAll(".like");

likeBtn.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("onlike");
  });
});

//item - btn add to card

let productCounterEl = document.getElementById("product-counter");
let btnAddToCard = document.querySelectorAll(".btn-add-to-card");

btnAddToCard.forEach((item) => {
  item.addEventListener("click", function () {
    productCounterEl.textContent = +productCounterEl.textContent + 1;
  });
});

// item - btn more details

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

// item-counter

let btnCountMinus = document.querySelectorAll(".decrement");
let countValue = document.querySelectorAll(".current-value");
let btnCountPlus = document.querySelectorAll(".increment");

function Counter(
  btnCountMinus,
  countValue,
  btnCountPlus,
  minCount = 0,
  maxCount = 10
) {
  this.domRefs = {
    btnCountMinus,
    countValue,
    btnCountPlus,
  };
  this.toggleButtonState = function () {
    let currentValue = this.domRefs.countValue.value;
    this.domRefs.btnCountMinus.disabled = currentValue <= minCount;
    this.domRefs.btnCountPlus.disabled = currentValue >= maxCount;
  };
  this.toggleButtonState();

  this.increment = function () {
    this.domRefs.countValue.value = +this.domRefs.countValue.value + 1;
    this.toggleButtonState();
  };
  this.decrement = function () {
    this.domRefs.countValue.value = +this.domRefs.countValue.value - 1;
    this.toggleButtonState();
  };

  this.domRefs.btnCountMinus.addEventListener(
    "click",
    this.decrement.bind(this)
  );
  this.domRefs.btnCountPlus.addEventListener(
    "click",
    this.increment.bind(this)
  );
}

const counters = [];

countValue.forEach((item, i) => {
  counters[i] = new Counter(btnCountMinus[i], item, btnCountPlus[i]);
});

//AOS

AOS.init();

// //modal-scrol 50% pages

// function modalOnScroll() {
//   if (window.scrollY > document.body.scrollHeight / 2) {
//     openModal();
//     window.removeEventListener("scroll", modalOnScroll);
//   }
// }
// window.addEventListener("scroll", modalOnScroll);

// привязка контекста call//apply//bind
