// Monika
var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
// Iteration 1.1


function updateSubtot($product) {
    var price = parseInt($product.getElementsByClassName("price")[0].innerHTML);
    var quantity = parseInt($product.getElementsByClassName("input")[0].value);

    var subtotal = $product.getElementsByClassName("subtotal")[0];
    subtotal.innerHTML = quantity * price;

}
debugger

function updateAllSubtotals() {
    var products = document.getElementsByClassName("product");
    for (let i = 0; i < products.length; i++) {
        updateSubtot(products[i]);
    }
}

// Iteration 1.2
debugger

function updateFinalPrice() {
    var totalPrice = document.getElementById("total-sum");
    totalPrice.innerHTML = 0;

    var subtotals = document.getElementsByClassName("subtotal");

    for (let i = 0; i < subtotals.length; i++) {
        subvalues = parseInt(subtotals[i].innerHTML);
        totalPrice.innerHTML = parseInt(total.innerHTML) + subvalues;
    }

}

function calcAll() {
    // Iteration 1.2
    updateAllSubtotals();
    updateFinalPrice();
}​
$calc.addEventListener("click", calcAll);