// input
function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputString = inputField.value;
  const input = parseFloat(inputString);
  return input;
}

// element
function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementString = element.innerText;
  //const elementNumber = parseFloat(elementString);
  return elementString;
}
//price
function getPriceValueById(priceId) {
  const price = document.getElementById(priceId);
  const priceString = price.innerText;
  const priceNumber = parseFloat(priceString);
  return priceNumber;
}

// set value
function setValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}


//purchase history
/*
const purchaseHistory = document.getElementById("purchase-history");
const div = document.createElement("div");
div.innerHTML = `
                <div class="py-3 flex flex-row  items-center justify-between">
                    <p class="text-[20px] font-bold text-dark2">${
                      purchaseHistory.childElementCount + 1
                    }. Triangle</p>
                    <p class="w-20 p-2">${result}cm</p>
                    <button class="text-white text-base  p-2 rounded-lg bg-blue">Convert to m<sup>2</sup></button>
                </div>
  `;
purchaseHistory.appendChild(div);
*/

// code starts from here

//card 1
function card1() {
    const card1Name = getElementValueById("card-1-name");
    const card1Price = getPriceValueById("card-1-price");
    const purchaseHistory = document.getElementById("purchase-history");
    const totalPrice = getPriceValueById("total-price");
    const discount = getPriceValueById("dicount");
    const total = getPriceValueById("total");
    console.log(card1Price);
}