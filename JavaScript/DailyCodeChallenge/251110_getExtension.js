function getExtension(filename) {
  const point = filename.lastIndexOf(".")

  if (point === -1 || point >= filename.length-1) {
    return "none"
  }
  return filename.substring(point+1)
  
  
}

console.log(getExtension("final.draft."))
