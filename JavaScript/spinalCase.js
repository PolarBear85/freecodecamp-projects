function spinalCase(sentence) {
  //const lowerSent = sentence.toLowerCase()
  //console.log(lowerSent)

  const regex = /([a-z])([A-Z])|[\s_]/g

  const lowerSent = sentence.replace(regex,`$1-$2`).toLowerCase()

  return lowerSent


}


spinalCase("thisIsSpinalTap")
spinalCase("The_Andy_Griffith_Show")
spinalCase("Teletubbies say Eh-oh")
spinalCase("AllThe-small Things")