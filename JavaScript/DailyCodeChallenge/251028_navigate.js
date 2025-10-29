function navigate(commands) {
  const cmdBack = "Back"
  const cmdForward = "Forward"
  const directory = ["Home"]
  let currentLocation = 0

  commands.forEach(cmd => {
    if (cmd === cmdBack) {
      if(currentLocation !=0) {
        currentLocation --;
        
      }
    } else if (cmd === cmdForward) {
      if (currentLocation !== directory.length-1) {
        currentLocation++
      }
    } else {

        if(currentLocation !== directory.length-1) {
          directory.splice(currentLocation+1)
        }
          directory.push(cmd.replace("Visit ",""))
          currentLocation = directory.length-1
    }

  })

  console.log(directory[currentLocation])
  return directory[currentLocation];
}

navigate(["Visit About Us", "Back", "Forward"])