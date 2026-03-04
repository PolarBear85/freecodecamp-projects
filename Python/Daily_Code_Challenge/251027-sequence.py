def sequence(n):

    answer = ""

    for x in range(1,n+1):
        print(x)
        answer = answer + str(x)

    print(answer)

    return answer



sequence(5)

'''
Integer Sequence
Given a positive integer, return a string with all of the integers from 1 up to, and including, the given number, in numerical order.

For example, given 5, return "12345".

Tests
Passed:1. sequence(5) should return "12345".
Passed:2. sequence(10) should return "12345678910".
Passed:3. sequence(1) should return "1".
Passed:4. sequence(27) should return "123456789101112131415161718192021222324252627".
'''