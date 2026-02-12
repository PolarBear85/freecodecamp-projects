def array_diff(arr1, arr2):

    set1 = set(arr1)
    set2 = set(arr2)
    answer = sorted(list(set(arr1)^set(arr2)))
    print(answer)

    return answer

array_diff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"])

'''
Array Diff
Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

The returned array should be sorted in alphabetical order.

Tests
Passed:1. array_diff(["apple", "banana"], ["apple", "banana", "cherry"]) should return ["cherry"].
Passed:2. array_diff(["apple", "banana", "cherry"], ["apple", "banana"]) should return ["cherry"].
Passed:3. array_diff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]) should return ["eight", "four", "six", "two"].
Passed:4. array_diff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]) should return ["five", "one", "seven", "three"].
Passed:5. array_diff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"]) should return ["freeCodeCamp", "rocks"].
'''