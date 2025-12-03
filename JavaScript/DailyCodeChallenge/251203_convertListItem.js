function convertListItem(markdown) {

  const regex = /\s*[0-9]\.\s+/g

  return regex.test(markdown) ? `<li>${markdown.replace(regex,"")}</li>` : "Invalid format"

}


console.log(convertListItem("1. My item"))
console.log(convertListItem("1 . invalid item"))
convertListItem(". invalid again")

/*
Given a string representing an ordered list item in Markdown, return the equivalent HTML string.

A valid ordered list item in Markdown must:

Start with zero or more spaces, followed by
A number (1 or greater) and a period (.), followed by
At least one space, and then
The list item text.
If the string doesn't have the exact format above, return "Invalid format". Otherwise, wrap the list item text in li tags and return the string.

For example, given "1. My item", return "<li>My item</li>"

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.


Tests
Passed:1. convertListItem("1. My item") should return "<li>My item</li>".
Passed:2. convertListItem(" 1.  Another item") should return "<li>Another item</li>".
Passed:3. convertListItem("1 . invalid item") should return "Invalid format".
Passed:4. convertListItem("2. list item text") should return "<li>list item text</li>".
Passed:5. convertListItem(". invalid again") should return "Invalid format".
Passed:6. convertListItem("A. last invalid") should return "Invalid format".

*/