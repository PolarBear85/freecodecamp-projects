def tribonacci_sequence(start_sequence, length):

    if length <= 0:
        return []

    if length <= len(start_sequence):
        return start_sequence[:length]

    answer_arr = start_sequence

    while len(answer_arr) < length:
        answer_arr.append(answer_arr[-1]+answer_arr[-2]+answer_arr[-3])

    print(answer_arr)
    return answer_arr

tribonacci_sequence([123, 456, 789], 8)

'''
Tribonacci Sequence
The Tribonacci sequence is a series of numbers where each number is the sum of the three preceding ones. When starting with 0, 0 and 1, the first 10 numbers in the sequence are 0, 0, 1, 1, 2, 4, 7, 13, 24, 44.

Given an array containing the first three numbers of a Tribonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

Your function should handle sequences of any length greater than or equal to zero.
If the length is zero, return an empty array.
Note that the starting numbers are part of the sequence.

Tests
Passed:1. tribonacci_sequence([0, 0, 1], 20) should return [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513].
Passed:2. tribonacci_sequence([21, 32, 43], 1) should return [21].
Passed:3. tribonacci_sequence([0, 0, 1], 0) should return [].
Passed:4. tribonacci_sequence([10, 20, 30], 2) should return [10, 20].
Passed:5. tribonacci_sequence([10, 20, 30], 3) should return [10, 20, 30].
Passed:6. tribonacci_sequence([123, 456, 789], 8) should return [123, 456, 789, 1368, 2613, 4770, 8751, 16134].
'''