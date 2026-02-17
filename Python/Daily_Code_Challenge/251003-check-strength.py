def check_strength(password):

    strength_list = []
    #Length Check
    if len(password) >= 8:
        strength_list.append(True)

    #Upper and Lower Check
    upper_check = any(char.isupper() for char in password)
    lower_check = any(char.islower() for char in password)

    if upper_check and lower_check:
        strength_list.append(True)

    #Number Check
    if any(char.isdigit() for char in password):
        strength_list.append(True)

    #Special Character check
    special_chars = "!@#$%^&*"
    if any(char in special_chars for char in password):
        strength_list.append(True)

    if len(strength_list) < 2:
        return "weak"
    elif len(strength_list) < 4:
        return "medium"
    else:
        return "strong"
    
    print(strength_list)

check_strength("C0d3&Fun!")
check_strength("PassWord%^!")
check_strength("123456")


'''
P@ssw0rd Str3ngth!
Given a password string, return "weak", "medium", or "strong" based on the strength of the password.

A password is evaluated according to the following rules:

It is at least 8 characters long.
It contains both uppercase and lowercase letters.
It contains at least one number.
It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.
Return "weak" if the password meets fewer than two of the rules. Return "medium" if the password meets 2 or 3 of the rules. Return "strong" if the password meets all 4 rules.

Tests
Passed:1. check_strength("123456") should return "weak".
Passed:2. check_strength("pass!!!") should return "weak".
Passed:3. check_strength("Qwerty") should return "weak".
Passed:4. check_strength("PASSWORD") should return "weak".
Passed:5. check_strength("PASSWORD!") should return "medium".
Passed:6. check_strength("PassWord%^!") should return "medium".
Passed:7. check_strength("qwerty12345") should return "medium".
Passed:8. check_strength("S3cur3P@ssw0rd") should return "strong".
Passed:9. check_strength("C0d3&Fun!") should return "strong".
'''