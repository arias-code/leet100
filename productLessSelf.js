const productExecptSelf = (nums) => {
  const products = [];
  for (let i = 0; i < nums.length; i++) {
    let product = nums[i];

    if (products.length !== 0) {
      product = product * products[i-1];
    }
    products.push(product);
  }

  let product = 1;
  for (let i = nums.length-1; i > 0; i--) {
    products[i] = products[i-1] * product;
    product = nums[i] * product;
  }

  product[nums.length-1] = product;
  return products;
}
