"use strick";

const elForm = document.querySelector(".form");
const elFormName = document.querySelector(".form__name");
const elFormOldPrice = document.querySelector(".form__old-price");
const elFormNewPrice = document.querySelector(".form__new-price");
const elProducts = document.querySelector(".products");

const lists = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const formNameValue = elFormName.value;
  const formOldPriceValue = elFormOldPrice.value;
  const formNewPriceValue = elFormNewPrice.value;

  const list = {
    name: formNameValue,
    oldPrice: formOldPriceValue,
    newPrice: formNewPriceValue,
  };

  lists.push(list);

  elFormName.value = null;
  elFormOldPrice.value = null;
  elFormNewPrice.value = null;
  elProducts.innerHTML = null;

  for (let series of lists) {
    const newName = document.createElement("h3");
    const newOld = document.createElement("p");
    const newNew = document.createElement("p");

    newName.textContent = `${series.name}`;
    newOld.textContent = `${series.oldPrice}`;
    newNew.textContent = `${series.newPrice}`;

    elProducts.appendChild(newName);
    elProducts.appendChild(newOld);
    elProducts.appendChild(newNew);
  }
});
