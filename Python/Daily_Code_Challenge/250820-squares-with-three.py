def squares_with_three(n):

    total = 0
    for x in range(1,n+1):
        square = x**2
        temp_num = square
        print(f"The number is {x} and the square is {square}")
        while temp_num > 0:
            print(f"passing with {temp_num}" )
            if temp_num % 10 == 3:
                print(f"SUCCESS - {square} contains a 3")
                total += 1
                break
            temp_num = temp_num //10


    print(total)
    return total


squares_with_three(100)

'''
3 Strikes
Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.

Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Waiting:1. squares_with_three(1) should return 0.
Waiting:2. squares_with_three(10) should return 1.
Waiting:3. squares_with_three(100) should return 19.
Waiting:4. squares_with_three(1000) should return 326.
Waiting:5. squares_with_three(10000) should return 4531.
'''