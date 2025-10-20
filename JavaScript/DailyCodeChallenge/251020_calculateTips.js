function calculateTips(mealPrice, customTip) {
  const returnArr = []
  const regex = /%/


  const mealNumber =Number(mealPrice.substring(1))
  const customTipNumber = Number(customTip.replace(regex,""))/100

returnArr.push(`$${(mealNumber * 0.15).toFixed(2)}`)
returnArr.push(`$${(mealNumber*0.2).toFixed(2)}`)
returnArr.push(`$${(mealNumber*customTipNumber).toFixed(2)}`)
console.log(returnArr)

  return returnArr;
}


calculateTips("$89.67", "26%")