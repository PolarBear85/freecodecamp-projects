function checkStrength(password) {
  let pwdStr = 0
  const upRegex = /[A-Z]/g
  const lowRegex = /[a-z]/g
  const numRegex = /[0-9]/gi
  const specRegex = /[!@#\$%\^&\*]/gi

  if (password.length >= 8) {
    console.log("length")
    pwdStr ++
  }

  if (lowRegex.test(password) && upRegex.test(password)) {
    pwdStr++
    console.log("case")
  }

  if (numRegex.test(password)) {
    console.log("numbers")
    pwdStr++
  }

  if (specRegex.test(password)) {
    console.log("special")
    pwdStr++
  }


  switch(true) {
    case (pwdStr >= 4):
      console.log("strong")
      return "strong"
    
    case (pwdStr ===2 || pwdStr===3):
    console.log("medium")
      return "medium"

    case (pwdStr <2):
      console.log("weak")
      return "weak"


  }

}

checkStrength("pass!!!")

/*
P@ssw0rd Str3ngth!
Given a password string, return "weak", "medium", or "strong" based on the strength of the password.

A password is evaluated according to the following rules:

It is at least 8 characters long.
It contains both uppercase and lowercase letters.
It contains at least one number.
It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.
Return "weak" if the password meets fewer than two of the rules. Return "medium" if the password meets 2 or 3 of the rules. Return "strong" if the password meets all 4 rules.

*/