var product = {
  name: "Iphone 16",
  price: 90000,
  rating: 4.6,
};

console.log(product);

delete product.rating;
delete product.name;

console.log(product);
