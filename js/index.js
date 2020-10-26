// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span');


  let quantity = product.querySelector('.quantity input')

  let subtotal = price.innerHTML * quantity.value
  console.log(subtotal)

  product.querySelector('.subtotal span').innerHTML = subtotal

  return subtotal
  


}


function calcPrice(){
  let price = Number(document.querySelector('.price span').innerHTML)


  let quantity = Number(document.querySelector('.quantity input').value)

  let subtotal = price * quantity
  console.log(subtotal)

  document.querySelector('.subtotal span').innerHTML = subtotal
}

let button= document.querySelector("#calculate")
button.onclick = function (event){
  calcPrice()
}










function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test


  
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
