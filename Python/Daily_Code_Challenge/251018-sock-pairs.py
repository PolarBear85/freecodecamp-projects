def sock_pairs(pairs, cycles):

    total_socks = pairs * 2
    lost_socks = 0

    for cycle in range(1,cycles+1):
        if cycle % 2 == 0:
            print("Cycle 2 - loose sock")
            total_socks -= 1
            lost_socks += 1

        if cycle % 3 == 0 and lost_socks > 0:
            print("cycle 3 - Find sock")
            lost_socks -= 1
            total_socks +=1

        if cycle % 5 == 0:
            print("cycle 5 - destroy sock")
            total_socks -=1

        if cycle % 10 == 0:
            print("cycle 10 - buy new socks")
            total_socks +=2

        if total_socks < 0:
            return 0
        print(total_socks)

    return total_socks // 2
            
sock_pairs(5,11)

'''
Missing Socks
Given an integer representing the number of pairs of socks you started with, and another integer representing how many wash cycles you have gone through, return the number of complete pairs of socks you currently have using the following constraints:

Every 2 wash cycles, you lose a single sock.
Every 3 wash cycles, you find a single missing sock.
Every 5 wash cycles, a single sock is worn out and must be thrown away.
Every 10 wash cycles, you buy a pair of socks.
You can never have less than zero total socks.
Rules can overlap. For example, on wash cycle 10, you will lose a single sock, throw away a single sock, and buy a new pair of socks.
Return the number of complete pairs of socks.

Tests
Passed:1. sock_pairs(2, 5) should return 1.
Passed:2. sock_pairs(1, 2) should return 0.
Passed:3. sock_pairs(5, 11) should return 4.
Passed:4. sock_pairs(6, 25) should return 3.
Passed:5. sock_pairs(1, 8) should return 0.
'''