function digitProductIterative(n){
  product = 1
  currentDigitProduct = 1;
  if (n >= 11) {
    return 102;
  }
  else {
    for(let i = 1; i < n; i++){
      digets = currentDigitProduct.toString().split("");
        for(diget of digets){
           product *= diget;
        }
         currentDigitProduct = currentDigitProduct + product;
         product = 1; //resetting product
    }
    return currentDigitProduct;
  }
}


function digitProduct(n, j){
  j=j || 1;
  if (n === 1) {
    return j;
  } else {
    product = 1;
    digits = j.toString().split("");
    for(digit of digits){
       product *= digit;
    }
    j = j +product;
    return digitProduct(n -= 1, j)
  }
}

console.time("iterative")
for (i = 1; i<=1e7; i++) {
  digitProductIterative(9)
}
console.timeEnd("iterative")

console.time("recurring")
for (i = 1; i<=1e7; i++) {
  digitProduct(9)
}
console.timeEnd("recurring")
