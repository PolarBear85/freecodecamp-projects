const generateBtn = document.querySelector("#generate-btn")
const arrayContainer = document.querySelector("#array-container")
const startingArray = document.querySelector("#starting-array")
const sortBtn = document.querySelector("#sort-btn")





const generateElement =() => Math.floor((Math.random()*100)+1)
const generateContainer = () => document.createElement('div')
const isOrdered = (a,b) => Number(a)<=Number(b);
const sortCheck = (a,b) => Number(a)<=Number(b) ? true:false

function generateArray() {
  const returnArr = []
  while (returnArr.length < 5) {
    returnArr.push(generateElement())
  }
  return returnArr
}

function highlightCurrentEls(element,index) {
  const children = element.querySelectorAll('span')
  children[index].style.border = "1px dashed red"
  children[index+1].style.border = "1px dashed red"
}

function fillArrContainer(element,array) {
  array.forEach(item => {
    element.innerHTML += `<span>${item}</span>`
  })
  return element
}

function isSorted (array) {
  const slicedArr = array.slice(0,-1)
  return slicedArr.every((item,index) => {
    return sortCheck(array[index],array[index+1])
  })
}



function swapElements(array,index) {
  if (!isOrdered(array[index],array[index+1])) {
    const tempHold = array[index+1]
    array[index+1] = array[index]
    array[index] = tempHold
    return false
  }

  return true
}






generateBtn.addEventListener("click",() => {
  const childrenElements = Array.from(arrayContainer.children)
  for (let i = 0; i<childrenElements.length; i++) {
    const child = childrenElements[i]
    if (child.id !== startingArray.id) {
      arrayContainer.removeChild(child)
    }
  }


  startingArray.innerHTML = ""



  fillArrContainer(startingArray,generateArray())
})


sortBtn.addEventListener("click", () => {

  let lastChild = arrayContainer.lastElementChild;
  const elementNode = [...lastChild.querySelectorAll('span')]
  const currentArr = elementNode.map(element=> {
    return parseInt(element.textContent,10)
  })

  let stillToSort = isSorted(currentArr)
  if (stillToSort) {
    return
  }
  let swapped = true
  while (swapped) {
  swapped = false
    for (let x = 0; x < currentArr.length-1; x++) {
      highlightCurrentEls(lastChild,x)
      const didSwap = swapElements(currentArr,x)
      if (!didSwap) {
        swapped = true
      }
      arrayContainer.appendChild(fillArrContainer(generateContainer(),currentArr))
      lastChild = arrayContainer.lastElementChild
      

    } 

  
  }
  

  lastChild = arrayContainer.lastElementChild
  lastChild.style.border ="5px solid green"


})







