

let inventory =[];




function findProductIndex(productName) {
  
  let searchString = productName.toLowerCase();
  for (let product in inventory) {
    
    if (searchString == inventory[product].name){
      return parseInt(product);
    }
  }
  return -1;
}

function addProduct(newProduct){
  newProduct.name = newProduct.name.toLowerCase();
  let productExists = findProductIndex(newProduct.name)
  if (productExists == -1) {
    inventory.push(newProduct);
    console.log(`${newProduct.name} added to inventory`);
  } else {
    inventory[productExists].quantity += newProduct.quantity;
    console.log(`${newProduct.name} quantity updated`);
  }
}

function removeProduct(productName, productQuantity) {
  productName = productName.toLowerCase();
  let productExists = findProductIndex(productName) 
  if (productExists ==-1) { 
    console.log(`${productName} not found`); 
  } else { 
    let inventoryAmount = inventory[productExists].quantity; inventory
    if (inventoryAmount < productQuantity) { 
      console.log(`Not enough ${productName} available, remaining pieces: ${inventoryAmount}`)
      return; 
    } else {  
      inventory[productExists].quantity -= productQuantity; 
      console.log(`Remaining ${productName} pieces: ${inventory[productExists].quantity}`); 
      if (inventory[productExists].quantity == 0) { 
        let removedItem = inventory.splice(productExists,1);

      }
    }
    }

  }



