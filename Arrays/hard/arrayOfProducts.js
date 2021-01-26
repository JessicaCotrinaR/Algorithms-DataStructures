function arrayOfProducts(array) {
  // Write your code here.
  const products = new Array(array.length).fill(1);
  //[1,1,1,1]
  let leftRunningProduct = 1;
  for (let i = 0; i < array.length; i++) {
    products[i] = leftRunningProduct;
    console.log("left", products[i]);
    leftRunningProduct *= array[i];
    console.log("runleft", leftRunningProduct);
  }
  let rigthRunningProduct = 1;
  for (let i = array.length - 1; i > -1; i--) {
    products[i] *= rigthRunningProduct;
    console.log("right", products[i]);
    rigthRunningProduct *= array[i];
    console.log("runrigth", rigthRunningProduct);
  }
  return products;
}
console.log(arrayOfProducts([5, 1, 4, 2]));
//ouput:
// [ 8, 40, 10, 20 ]
