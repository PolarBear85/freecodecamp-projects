function stripTags(html) {

  const regex = />([^<]+)</ig
  const capture = []
  let match

  while ((match = regex.exec(html))!==null) {
    capture.push(match[1])
    console.log(match)

  }
  console.log(capture.join(""))
  return capture.join("")
}

//stripTags('<a href="#">Click here</a>')
stripTags('<p class="center">Hello <b>World</b>!</p>')
//stripTags('<main id="main"><section class="section">section</section><section class="section">section</section></main>')

/*
HTML Tag Stripper
Given a string of HTML code, remove the tags and return the plain text content.

The input string will contain only valid HTML.
HTML tags may be nested.
Remove the tags and any attributes.
For example, '<a href="#">Click here</a>' should return "Click here".
*/