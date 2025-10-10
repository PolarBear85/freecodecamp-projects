** start of script.js **

let email = ""

function maskEmail(email) {
  let atSymbol = email.indexOf('@');

  let firstPart = email.slice(0,atSymbol);
  let domainPart = email.substring(atSymbol);
  let firstLength = firstPart.length;

  let maskedMail = firstPart.charAt(0)+"*".repeat(firstPart.length-2) + firstPart.charAt(firstLength-1);

  return maskedMail+domainPart;
}

email = "apple.pie@example.com"
console.log(maskEmail(email));
email = "freecodecamp@example.com"
console.log(maskEmail(email));
email = "info@test.dev"
console.log(maskEmail(email));
email = "user@domain.org"
console.log(maskEmail(email));


** end of script.js **

