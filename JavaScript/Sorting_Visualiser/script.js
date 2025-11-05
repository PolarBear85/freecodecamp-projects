const generateElement =() => Math.floor((Math.random()*100)+1)

function generateArray() {
  const returnArr = []
  while (returnArr.length < 5) {
    returnArr.push(generateElement())
  }
  return returnArr
}

const generateContainer = () => document.createElement('div')

function fillArrContainer(element,array) {
  array.forEach(item => {
    element.innerHTML += `<span>${item} </span>`
  })
  return element
}

const isOrdered = (a,b) => Number(a)<=Number(b);

function swapElements(array,index) {
  if (!isOrdered(array[index],array[index+1])) {
    const tempHold = array[index+1]
    array[index+1] = array[index]
    array[index] = tempHold
    return false
  }

  return true
}

function highlightCurrentEls(element,index) {
  const children = element.querySelectorAll('span')
  children[index].style.border = "1px dashed red"
  children[index+1].style.border = "1px dashed red"
}

const generateBtn = document.querySelector("#generate-btn")
const arrayContainer = document.querySelector("#array-container")
const startingArray = document.querySelector("#starting-array")
const sortBtn = document.querySelector("#sort-btn")


generateBtn.addEventListener("click",() => {
  const childrenElements = Array.from(arrayContainer.children)
  for (let i = 0; i<childrenElements.length; i++) {
    const child = childrenElements[i]
    if (child.id !== startingArray.id) {
      arrayContainer.removeChild(child)
    }
  }


  startingArray.innerHTML = ""

  startingArray.innerHTML = `<div>
<span>26</span>
<span>9</span>
<span>58</span>
<span>23</span>
<span>38</span>
</div>`

  //startingArray.appendChild(fillArrContainer(generateContainer(),generateArray()))
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

  console.log("DEBUGGING TIME")
  console.log(currentArr)
  highlightCurrentEls(lastChild,0)
  
  let indexToSort = itemToSort(currentArr)



  while (!stillToSort) {
    indexToSort = itemToSort(currentArr)
    swapElements(currentArr,indexToSort)
    arrayContainer.appendChild(fillArrContainer(generateContainer(),currentArr))
    
    lastChild = arrayContainer.lastElementChild
    highlightCurrentEls(lastChild,indexToSort)
    stillToSort = isSorted(currentArr)
  }

  arrayContainer.appendChild(fillArrContainer(generateContainer(),currentArr))

  lastChild = arrayContainer.lastElementChild
  lastChild.style.border ="5px solid green"


})

const sortCheck = (a,b) => Number(a)<=Number(b) ? true:false

function isSorted (array) {
  const slicedArr = array.slice(0,-1)
  return slicedArr.every((item,index) => {
    return sortCheck(array[index],array[index+1])
  })
}

function itemToSort(array){
  const slicedArr = array.slice(0,-1)
  return slicedArr.findIndex((item,index) => {
    return !sortCheck(array[index],array[index+1])
  })
  
}



