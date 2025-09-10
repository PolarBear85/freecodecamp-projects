const inventory =[{name: "flour", quantity: 5},{name: "rice", quantity: 5}];


//console.log(inventory);


function findProductIndex(productName) {
  let searchString = productName.toLowerCase();
  //console.log(searchString)
  for (let product in inventory) {
    if (searchString == inventory[product].name){
      //console.log(product)
      return product;
    }
  }
  return -1;
}

function addProduct(newProduct){
  //console.log(newProduct.name)
  //console.log(newProduct.quantity)
  let productExists = findProductIndex(newProduct.name)
  console.log()
  if (productExists = -1) {
    inventory.push(newProduct);
    return `${newProduct.name} added to inventory`
  } else {
    inventory[productExists].quantity += newProduct.quantity;
  }
}




console.log(addProduct({name: "FLOUR", quantity: 5}))