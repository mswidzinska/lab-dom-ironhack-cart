var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
var $create = document.getElementById("create");

function updateSubtot($product) {
  var price = $product.getElementsByClassName("price")[0].innerHTML;
  var quantity = $product.getElementsByClassName("input")[0].value;
  var subtotal = $product.getElementsByClassName("subtotal")[0];
  subtotal.innerHTML = quantity * price;
}

function updateAllSubtotals() {
  var products = document.getElementsByClassName("product");
  for (let i = 0; i < products.length; i++) {
    updateSubtot(products[i]);
  }
}

function updateFinalPrice() {
  var totalPrice = document.getElementById("totalsum");
  totalPrice.innerHTML = 0;
  var subtotals = document.getElementsByClassName("subtotal");
  for (let i = 0; i < subtotals.length; i++) {
    subvalues = parseInt(subtotals[i].innerHTML);
    totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + subvalues;
  }
}

function remove(e) {
  var child = e.currentTarget.parentNode.parentNode;
  $cart.removeChild(child);
  updateFinalPrice();
}
function deleteProduct() {
  var buttons = document.getElementsByClassName("btn-delete");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", remove);
  }
}
function createNew() {
  debugger;
  var newItem = document.querySelector("tbody");
  var newProductName = document.getElementsByClassName("productName")[0].value;
  var newProductPrice = parseInt(
    document.getElementsByClassName("productPrice")[0].value
  );
  newItem.innerHTML += `
    <tr class="product">
      <td class="name">
        <span>${newProductName}</span>
      </td>

      <td class="pu">
        $<span>${newProductPrice}</span>
      </td>

      <td class="qty">
        <label>
          <input type="number" value="0" min="0" />
        </label>
      </td>

      <td class="subtot">
        $<span>0</span>
      </td>

      <td class="rm">
        <button class="btn btn-delete">Delete</button>
      </td>
    </tr>`;
  document.getElementsByClassName("productName")[0].value = "";
  document.getElementsByClassName("productPrice")[0].value = "";
  deleteProduct();
  calcAll();
}
create.addEventListener("click", createNew);

function calcAll() {
  updateAllSubtotals();
  updateFinalPrice();
}
$calc.addEventListener("click", calcAll);
