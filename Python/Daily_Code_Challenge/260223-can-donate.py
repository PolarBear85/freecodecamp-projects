def can_donate(donor, recipient):

    blood_donor = {
    "O":["A","B","O","AB"],
    "A":["A","AB"],
    "B":["B","AB"],
    "AB":["AB"]
  }

    donor_sign = donor[-1]
    print(donor_sign)
    recipient_sign = recipient[-1]

    if donor_sign == "+" and recipient_sign == "-":
        return False
    
    donor_type = donor[0:-1]
    print(donor_type)
    recipient_type = recipient[0:-1]
    print(recipient_type)

    if recipient_type in blood_donor[donor_type]:
        return True

    return False


can_donate("B-", "AB+")

'''
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
Passed:1. can_donate("B+", "B+") should return True.
Passed:2. can_donate("O-", "AB-") should return True.
Passed:3. can_donate("O+", "A-") should return False.
Passed:4. can_donate("A+", "AB+") should return True.
Passed:5. can_donate("A-", "B-") should return False.
Passed:6. can_donate("B-", "AB+") should return True.
Passed:7. can_donate("B-", "A+") should return False.
Passed:8. can_donate("O-", "O+") should return True.
Passed:9. can_donate("O+", "O-") should return False.
Passed:10. can_donate("AB+", "AB-") should return False.
'''