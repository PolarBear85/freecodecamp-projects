function imageSearch(images, term) {
  const regex = new RegExp(`${term}`,`ig`)


  const returnArr = images.filter(image => image.match(regex))

  console.log(returnArr)
  return returnArr;
}


imageSearch(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat")


/*
Image Search
On November 4th, 2001, Google launched its image search, allowing people to find images using search terms. In this challenge, you will imitate the image search.

Given an array of image names and a search term, return an array of image names containing the search term.

Ignore the case when matching the search terms.
Return the images in the same order they appear in the input array.

*/