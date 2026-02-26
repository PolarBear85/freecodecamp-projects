function extractAttributes(element) {

  const regex = /[-a-z0-9]+(?=\=)|(?<=\=")[-a-z0-9\s]+(?=")/gi


  const match = element.match(regex) || []
  console.log(match)
  const answer = []

  for (let x = 0; x<match.length; x+=2) {
    answer.push(`${match[x]}, ${match[x+1]}`)
  }

  console.log(answer)
  

  return answer;
}


extractAttributes("<p>Lorem ipsum dolor sit amet</p>")

/*
HTML Attribute Extractor
Given a string of a valid HTML element, return the attributes of the element using the following criteria:

You will only be given one element.
Attributes will be in the format: attribute="value".
Return an array of strings with each attribute property and value, separated by a comma, in this format: ["attribute1, value1", "attribute2, value2"].
Return attributes in the order they are given.
If no attributes are found, return an empty array.

Tests
Passed:1. extractAttributes('<span class="red"></span>') should return ["class, red"].
Passed:2. extractAttributes('<meta charset="UTF-8" />') should return ["charset, UTF-8"].
Passed:3. extractAttributes("<p>Lorem ipsum dolor sit amet</p>") should return [].
Passed:4. extractAttributes('<input name="email" type="email" required="true" />') should return ["name, email", "type, email", "required, true"].
Passed:5. extractAttributes('<button id="submit" class="btn btn-primary">Submit</button>') should return ["id, submit", "class, btn btn-primary"].
*/