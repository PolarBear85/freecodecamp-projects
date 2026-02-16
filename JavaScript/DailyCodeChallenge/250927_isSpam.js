function isSpam(number) {

  const phoneRegex = /\+([0-9]+)\s+\(([0-9]{3})\)\s([0-9]{3})-([0-9]{4})/i
  const phoneMatch = number.match(phoneRegex)
  console.log(phoneMatch)
  if (!phoneMatch) return false

  const [fullNum,countryCode,areaCode,local1,local2,...rest] = phoneMatch

  console.log(countryCode,areaCode,local1,local2)

  const answerArr = []


  //Country code check
  answerArr.push(countryCode.length > 2 || countryCode[0] != 0)

  //area code check
  answerArr.push(Number(areaCode) > 900 ||Number(areaCode)<200)

  //local check
  const local1Sum = local1.split("")
                    .reduce((accumulator,number)=> accumulator + Number(number),0)

  answerArr.push(local2.includes(local1Sum.toString()))

  //Total number check
  const digitClean = /\D/gi
  const cleanNumber = number.replace(digitClean,"")
  console.log(cleanNumber)
  const consecutiveDigit = /(\d)\1{3}/
  answerArr.push(consecutiveDigit.test(cleanNumber))

  console.log(answerArr)
  const isSpam = answerArr.includes(true)
  return isSpam

}

isSpam("+0 (555) 564-1987")

/*
Spam Detector

Given a phone number in the format "+A (BBB) CCC-DDDD", where each letter represents a digit as follows:

    A represents the country code and can be any number of digits.
    BBB represents the area code and will always be three digits.
    CCC and DDDD represent the local number and will always be three and four digits long, respectively.

Determine if it's a spam number based on the following criteria:

    The country code is greater than 2 digits long or doesn't begin with a zero (0).
    The area code is greater than 900 or less than 200.
    The sum of first three digits of the local number appears within last four digits of the local number.
    The number has the same digit four or more times in a row (ignoring the formatting characters).

Tests

    Passed: 1. isSpam("+0 (200) 234-0182") should return false.
    Passed: 2. isSpam("+091 (555) 309-1922") should return true.
    Passed: 3. isSpam("+1 (555) 435-4792") should return true.
    Passed: 4. isSpam("+0 (955) 234-4364") should return true.
    Passed: 5. isSpam("+0 (155) 131-6943") should return true.
    Passed: 6. isSpam("+0 (555) 135-0192") should return true.
    Failed: 7. isSpam("+0 (555) 564-1987") should return true.
    Passed: 8. isSpam("+00 (555) 234-0182") should return false.
    */