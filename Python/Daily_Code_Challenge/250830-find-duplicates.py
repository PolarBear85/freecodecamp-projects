import collections

def find_duplicates(arr):
    arr.sort()
    count = collections.Counter(arr)
    print(count)

    res = [num for num, freq in count.items() if freq > 1]
    print (res)
    return res

find_duplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4])

'''
Array Duplicates
Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. If no values appear more than once, return an empty array.

Only include one instance of each value in the returned array.

Tests
Passed:1. find_duplicates([1, 2, 3, 4, 5]) should return [].
Passed:2. find_duplicates([1, 2, 3, 4, 1, 2]) should return [1, 2].
Passed:3. find_duplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4]) should return [-6, 0, 2, 4, 5, 23].
'''