function destroyer() {
  const inputItems = [...arguments]
  const inputArr = inputItems[0]
  const destroyers = inputItems.slice(1)
  console.log(destroyers)

  const solve =  inputArr.filter(item => {
    return !destroyers.includes(item)
  })

  return solve
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5)