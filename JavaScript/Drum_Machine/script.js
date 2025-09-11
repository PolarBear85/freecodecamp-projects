
const padDescription = document.querySelector("#display")
const drumPads = document.querySelectorAll(".drum-pad")
const keyToPadMap = {
    'q' : 'pad-Q',
    'w' : 'pad-W',
    'e' : 'pad-E',
    'a' : 'pad-A',
    's' : 'pad-S',
    'd' : 'pad-D',
    'z' : 'pad-Z',
    'x' : 'pad-X',
    'c' : 'pad-C'
}

const playAndDisplay = (padElement) => {
    const sound = padElement.querySelector('audio');
    sound.pause();
    sound.currentTime = 0;
    sound.play();
    padDescription.textContent = padElement.getAttribute("label");
    padElement.classList.add("active")
    setTimeout(() => {
        padElement.classList.remove("active");
    },100);
};

drumPads.forEach(pad => {
    pad.addEventListener("click",(event) => {
        playAndDisplay(event.currentTarget);
    })
})

document.addEventListener('keydown',(event) => {
    const padID = keyToPadMap[event.key] //had to change this from event.code to event.key to allow for freeCodeCamp to pass test 8
    if (padID) {
        const padPlay = document.querySelector(`#${padID}`)
        if (padPlay) {
            playAndDisplay(padPlay)
        }
    }
})
