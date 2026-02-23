function canDonate(donor, recipient) {

  const bloodDonor = {
    "O":["A","B","O","AB"],
    "A":["A","AB"],
    "B":["B","AB"],
    "AB":["AB"]
  }

  const donorSign =donor.slice(-1)
  const recipientSign = recipient.slice(-1) 

  if (donorSign == "+" && recipientSign == "-") return false

  const donorType = donor.slice(0,-1)
  const recipientType = recipient.slice(0,-1)

  console.log(donorType,recipientType)

  console.log(donorSign,recipientSign)

  if(bloodDonor[donorType].includes(recipientType)) {
    return true
  }

  return false;
}


console.log(canDonate("O-", "AB-"))

/*
Blood Type Compatibility
Given a donor blood type and a recipient blood type, determine whether the donor can give blood to the recipient.

Each blood type consists of:

A letter: "A", "B", "AB", or "O"
And an Rh factor: "+" or "-"
Blood types will be one of the valid letters followed by an Rh factor. For example, "AB+" and "O-" are valid blood types.

Letter Rules:

"O" can donate to other letter type.
"A" can donate to "A" and "AB".
"B" can donate to "B" and "AB".
"AB" can donate only to "AB".
Rh Rules:

Negative ("-") can donate to both "-" and "+".
Positive ("+") can donate only to "+".
Both letter and Rh rule must pass for a donor to be able to donate to the recipient.

Tests
Passed:1. canDonate("B+", "B+") should return true.
Passed:2. canDonate("O-", "AB-") should return true.
Passed:3. canDonate("O+", "A-") should return false.
Passed:4. canDonate("A+", "AB+") should return true.
Passed:5. canDonate("A-", "B-") should return false.
Passed:6. canDonate("B-", "AB+") should return true.
Passed:7. canDonate("B-", "A+") should return false.
Passed:8. canDonate("O-", "O+") should return true.
Passed:9. canDonate("O+", "O-") should return false.
Passed:10. canDonate("AB+", "AB-") should return false.
*/