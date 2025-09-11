
const padDescription = document.querySelector("#display")
const drumPads = document.querySelectorAll(".drum-pad")
const keyToPadMap = {
    'KeyQ' : 'pad-Q',
    'KeyW' : 'pad-W',
    'KeyE' : 'pad-E',
    'KeyA' : 'pad-A',
    'KeyS' : 'pad-S',
    'KeyD' : 'pad-D',
    'KeyZ' : 'pad-Z',
    'KeyX' : 'pad-X',
    'KeyC' : 'pad-C'
}

drumPads.forEach(pad => {
    pad.addEventListener("click",(event) => {
        event.currentTarget.querySelector('audio').play()
        padDescription.textContent = event.currentTarget.getAttribute("label")
    })
})

document.addEventListener('keydown',(event) => {
    const padID = keyToPadMap[event.code]
    if (padID) {
        const padPlay = document.querySelector(`#${padID}`)
        padPlay.querySelector('audio').play()
        padDescription.textContent = padPlay.getAttribute("label")
    }
})

/*
const playSound = (event) => {
    event.currentTarget.querySelector('audio').play()

}

padQ.addEventListener("click",playSound)




padQ.addEventListener("click", (event) => {
    event.currentTarget.querySelector('audio').play() 
})

const padQ = document.querySelector("#pad-Q")
const padW = document.querySelector("#pad-W")
const padE = document.querySelector("#pad-E")
const padA = document.querySelector("#pad-A")
const padS = document.querySelector("#pad-S")
const padD = document.querySelector("#pad-D")
const padZ = document.querySelector("#pad-Z")
const padX = document.querySelector("#pad-X")
const padC = document.querySelector("#pad-C")

*/