** start of script.js **

function generatePassword(pwdLength) {
  const passwordArray = []
  let passwordChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
  for (let i = 0; i<pwdLength; i++) {
    let randomNumber = Math.floor(Math.random() * passwordChars.length)
    let randomChar = passwordChars.slice(randomNumber, randomNumber + 1);
    passwordArray.push(randomChar)
    
  }
  let newPassword = passwordArray.join("");
  return newPassword
}


let password = generatePassword(12);
console.log(`Generated password: ${password}`)



** end of script.js **

