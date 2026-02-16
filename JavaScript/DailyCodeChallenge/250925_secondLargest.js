function secondLargest(arr) {

    const compare = (a,b) => a-b;

    const uniqueSet = new Set(arr)
    const sortedArr = Array.from(uniqueSet).sort(compare)
    console.log(sortedArr)
    
    return sortedArr.length<=1 ? undefined : sortedArr[sortedArr.length-2]

}

secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0])
secondLargest([1, 2, 3, 4])
secondLargest([20, 139, 94, 67, 31])