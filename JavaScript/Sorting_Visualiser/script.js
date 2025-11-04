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
  if (array[index]>array[index+1]) {
    const tempHold = array[index+1]
    array[index+1] = array[index]
    array[index] = tempHold
    console.log(array)
  }
}

function highlightCurrentEls() {

}

const generateBtn = document.querySelector("#generate-btn")
const startingArray = document.querySelector("#starting-array")

generateBtn.addEventListener("click",() => {
  startingArray.innerHTML = ""
  startingArray.appendChild(fillArrContainer(generateContainer(),generateArray()))
})