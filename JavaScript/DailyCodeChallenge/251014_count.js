function count(text, pattern) {
  const regex = new RegExp ("(?=(?:"+pattern+"))","gi")

  const matches = [...text.matchAll(regex)];
  console.log(matches.length)

  return matches.length;
}

count('101010101010101010101', '101')

/*
String Count
Given two strings, determine how many times the second string appears in the first.

The pattern string can overlap in the first string. For example, "aaa" contains "aa" twice. The first two a's and the second two.
*/