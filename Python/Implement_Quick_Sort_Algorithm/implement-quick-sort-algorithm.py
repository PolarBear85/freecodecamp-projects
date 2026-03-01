def quick_sort(array):

    if len(array) <= 1:
        return array

    pivot_value = array[0]

    lowest = [value for value in array if value < pivot_value]
    sorted_low = quick_sort(lowest)

    highest = [value for value in array if value > pivot_value]
    sorted_high = quick_sort(highest)

    equal = [value for value in array if value == pivot_value]


    return sorted_low+equal+sorted_high
    

if __name__ == '__main__':
    print(quick_sort([4, 42, 16, 23, 15, 8]))


'''
Implement the Quicksort Algorithm

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    You should define a function named quick_sort to implement the quicksort algorithm.

    The quick_sort function should take a list of integers as input and return a new list of these integers in sorted order from least to greatest.

    To implement the algorithm, you should:
        Choose a pivot value from the elements of the input list (use the first or the last element of the list).
        Partition the input list into three sublists: one with elements less than the pivot, one with elements equal to the pivot, and one with elements greater than the pivot.
        Recursively call quick_sort to sort the sublists and concatenate the sorted sublists to produce the final sorted list.

Tests

    Passed: 1. You should have a function named quick_sort.
    Passed: 2. Your quick_sort function should take a single parameter.
    Passed: 3. quick_sort([]) should return an empty list.
    Passed: 4. Your quick_sort function should not modify the list passed to it as the argument.
    Passed: 5. quick_sort([20, 3, 14, 1, 5]) should return [1, 3, 5, 14, 20].
    Passed: 6. quick_sort([83, 4, 24, 2]) should return [2, 4, 24, 83].
    Passed: 7. quick_sort([4, 42, 16, 23, 15, 8]) should return [4, 8, 15, 16, 23, 42].
    Passed: 8. quick_sort([87, 11, 23, 18, 18, 23, 11, 56, 87, 56]) should return [11, 11, 18, 18, 23, 23, 56, 56, 87, 87].
    Passed: 9. You should not import any module or use built-in sorting methods in your code.

'''