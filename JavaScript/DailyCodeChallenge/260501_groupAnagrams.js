function groupAnagrams(words) {

  const map = new Map();

  for (let word of words) {
    //convert string to array
    const sortedKey = word.split("").sort().join("");
    console.log(sortedKey)

    if (!map.has(sortedKey)) {
      map.set(sortedKey,[])
    }

    map.get(sortedKey).push(word)
  }

  console.log(Array.from(map.values()))

  return Array.from(map.values());
}



groupAnagrams(["listen", "silent", "hello", "enlist", "world"])

/*
Anagram Groups
Given an array of words, return a 2d array of the words grouped into anagrams.

Words are anagrams if they contain the same letters in any order.
Each word belongs to exactly one group.
Return order doesn't matter.
For example, given ["listen", "silent", "hello", "enlist", "world"], return [["listen", "silent", "enlist"], ["hello"], ["world"]].

Tests:
Passed:1. groupAnagrams(["listen", "silent", "hello", "enlist", "world"]) should return [["listen", "silent", "enlist"], ["hello"], ["world"]].
Passed:2. groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]) should return [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]].
Passed:3. groupAnagrams(["care", "race", "acre", "pots", "stop", "tops", "opts", "post", "spot", "evil", "vile", "live", "veil"]) should return [["acre", "care", "race"], ["evil", "live", "veil", "vile"], ["opts", "post", "pots", "spot", "stop", "tops"]].
Passed:4. groupAnagrams(["algorithms", "logarithms", "education", "cautioned", "auctioned", "triangle", "integral", "alerting", "relating"]) should return [["alerting", "integral", "relating", "triangle"], ["algorithms", "logarithms"], ["auctioned", "cautioned", "education"]].
*/