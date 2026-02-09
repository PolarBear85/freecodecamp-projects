import ipaddress

def is_valid_ipv4(ipv4):

    try:
        ipaddress.IPv4Address(ipv4)
        return True
    except ValueError:
        return False

is_valid_ipv4("192.168.1.1")

'''
IPv4 Validator
Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:

It is between 0 and 255 inclusive.
It does not have leading zeros (e.g. 0 is allowed, 01 is not).
Only numeric characters are allowed.

Tests
Passed:1. is_valid_ipv4("192.168.1.1") should return True.
Passed:2. is_valid_ipv4("0.0.0.0") should return True.
Passed:3. is_valid_ipv4("255.01.50.111") should return False.
Passed:4. is_valid_ipv4("255.00.50.111") should return False.
Passed:5. is_valid_ipv4("256.101.50.115") should return False.
Passed:6. is_valid_ipv4("192.168.101.") should return False.
Passed:7. is_valid_ipv4("192168145213") should return False.
'''