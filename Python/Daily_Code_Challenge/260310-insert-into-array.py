def insert_into_array(arr, value, index):

    answer = arr[:index]+[value]+arr[index:]
    print (answer)

    return answer

insert_into_array([0, 1, 1, 2, 3, 8, 13], 5, 5)

'''
Array Insertion
Given an array, a value to insert into the array, and an index to insert the value at, return a new array with the value inserted at the specified index.

Tests
Passed:1. insert_into_array([2, 4, 8, 10], 6, 2) should return [2, 4, 6, 8, 10].
Passed:2. insert_into_array(["the", "quick", "fox"], "brown", 2) should return ["the", "quick", "brown", "fox"].
Passed:3. insert_into_array([], 0, 0) should return [0].
Passed:4. insert_into_array([0, 1, 1, 2, 3, 8, 13], 5, 5) should return [0, 1, 1, 2, 3, 5, 8, 13].

'''