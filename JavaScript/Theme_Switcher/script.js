//document elements

const switchButton = document.querySelector("#theme-switcher-button")
const themeDropdown = document.querySelector("#theme-dropdown")
const themeOptions = document.querySelectorAll("[role=menuitem]")
const politeElement = document.querySelector("[aria-live=polite")
const body = document.body


//JS variables
const themes = [
    {name:"default",message:"Plain"},
  {name:"light",message:"Light Speed!"},
  {name:"dark",message:"Dark Side!"}
]

//event listeners
switchButton.addEventListener("click",() => {
    themeDropdown.toggleAttribute("hidden")
    if (switchButton.getAttribute("aria-expanded")==="true") {
        switchButton.setAttribute("aria-expanded","false")
    } else {
        switchButton.setAttribute("aria-expanded","true")
    }
})

themeOptions.forEach(option => {
    option.addEventListener("click",()=> {
        const optionSelect = option.getAttribute("id") //get the ID of the selected HTML option
        const optionName = optionSelect.replace("theme-","")    //remove the "theme-" prefix
        const object = (themes.find(theme => theme.name === optionName))    //check if the name matches the name in the themes array
        if (object) {   //did we find an object?
                            //YES
            let existingTheme = ""  //Assume there is no existing theme
            
            for (const className of body.classList) {   //check each item in the body HTML class list
                if(className.startsWith("theme-")) {    //do any of the classes start with "theme-"?
                    existingTheme = className       //Yes - ok, add it to the existing theme
                    break                           //kill off
                }
            }
            if (existingTheme) {        //we found an existing theme- class name
                body.classList.replace(existingTheme, optionSelect) //replace the existing theme with the new theme from the selected HTML
            } else {
                body.classList.add(optionSelect)
            }

            console.log(existingTheme)

            politeElement.textContent = object.message
        }
        
    })
})


//functions
