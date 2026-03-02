def is_flat(arr):

    answer = [isinstance(item,list) for item in arr]
    print(answer)

    print(not True in answer)
    return not True in answer



is_flat(["a", [0], "b", True])

'''
Flattened
Given an array, determine if it is flat.

An array is flat if none of its elements are arrays.

Tests
Passed:1. is_flat([1, 2, 3, 4]) should return True.
Passed:2. is_flat([1, [2, 3], 4]) should return False.
Passed:3. is_flat([1, 0, False, True, "a", "b"]) should return True.
Passed:4. is_flat(["a", [0], "b", True]) should return False.
Passed:5. is_flat([1, [2, [3, [4, [5]]]], 6]) should return False.

'''