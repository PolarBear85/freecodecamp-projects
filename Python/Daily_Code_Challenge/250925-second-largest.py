def second_largest(arr):

    numbers = sorted(set(arr),reverse=True)
    print(numbers)
    return numbers[1]

second_largest([1, 0, -1, 0, 1, 0, -1, 1, 0])
second_largest([10, -17, 55.5, 44, 91, 0])

'''
2nd Largest
Given an array, return the second largest distinct number.


Tests
Passed:1. second_largest([1, 2, 3, 4]) should return 3.
Passed:2. second_largest([20, 139, 94, 67, 31]) should return 94.
Passed:3. second_largest([2, 3, 4, 6, 6]) should return 4.
Passed:4. second_largest([10, -17, 55.5, 44, 91, 0]) should return 55.5.
Passed:5. second_largest([1, 0, -1, 0, 1, 0, -1, 1, 0]) should return 0.
'''