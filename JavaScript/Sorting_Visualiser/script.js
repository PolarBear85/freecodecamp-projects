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
    element.innerHTML += `<span>${item}</span>\n`
  })
  return element
}

const isOrdered = (a,b) => a<=b;

function swapElements(array,index) {
  console.log(array[index],array[index+1])
  console.log(array[index]>array[index+1])
  if (!isOrdered(array[index],array[index+1])) {
    const tempHold = array[index+1]
    array[index+1] = array[index]
    array[index] = tempHold
    return false
  }

  return array
}

function highlightCurrentEls(element,index) {
  const children = element.querySelectorAll('span')
  children[index].style.border = "1px dashed red"
  children[index+1].style.border = "1px dashed red"
}

const generateBtn = document.querySelector("#generate-btn")
const startingArray = document.querySelector("#starting-array")
const sortBtn = document.querySelector("#sort-btn")


generateBtn.addEventListener("click",() => {
  startingArray.innerHTML = ""
  startingArray.appendChild(fillArrContainer(generateContainer(),generateArray()))
})


sortBtn.addEventListener("click", () => {
  const elementNode = [...startingArray.querySelectorAll('span')]
  const firstArr = elementNode.map(element => {
    return element.textContent
  })


})