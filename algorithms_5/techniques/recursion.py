# Challenge 1: Factorial of a Number
"""
base case: when n is 1 then just return 1
how to make problem smaller: n-1
what to always return: a number the factorial of n-1..1
what to do with the return, n * factorial of n-1
time: O(n)
space: O(n) will have n stacks holding up the memory
"""
def factorial(n):
    if n == 1 or n == 0: return 1
    return n * factorial(n-1)

# Test cases for Factorial
print("Factorial Tests")
assert factorial(5) == 120, f"Expected 120, but got {factorial(5)}"
assert factorial(0) == 1, f"Expected 1, but got {factorial(0)}"
assert factorial(7) == 5040, f"Expected 5040, but got {factorial(7)}"
print("All Factorial tests passed!")


# Challenge 2: Fibonacci Sequence
def fibonacci(n):
    if n == 0: return 0
    if n == 1: return 1
    return fibonacci(n-1) + fibonacci(n-2)

# Test cases for Fibonacci
print("\nFibonacci Tests")
assert fibonacci(6) == 8, f"Expected 8, but got {fibonacci(6)}"
assert fibonacci(0) == 0, f"Expected 0, but got {fibonacci(0)}"
assert fibonacci(10) == 55, f"Expected 55, but got {fibonacci(10)}"
print("All Fibonacci tests passed!")


# Challenge 3: Sum of Digits
"""
get a single single digit by using %
34 % 10 = you will get 4 good
    then pass the floor(34 / 10) to the next call
base case: n < 10, just return n
how to break problem smaller: floor(n / 10), essentially reduce the number one digit less (far right)
what to always a return: an integer, the sum of all the right left side digits
what to do with returns: just add (n % 10) * -1 (if n is negative)
time: digit length of n
space: n
"""
import math
def sum_of_digits(n):
    abs_n = abs(n)
    if abs_n < 10: return n
    sign = -1 if n < 0 else 1
    return sign * (n % 10 + sum_of_digits(math.floor(n/10)))

# Test cases for Sum of Digits
print("\nSum of Digits Tests")
assert sum_of_digits(1234) == 10, f"Expected 10, but got {sum_of_digits(1234)}"
assert sum_of_digits(987) == 24, f"Expected 24, but got {sum_of_digits(987)}"
assert sum_of_digits(0) == 0, f"Expected 0, but got {sum_of_digits(0)}"
print("All Sum of Digits tests passed!")


# Challenge 4: Reverse a String
"""
just slice the string one char off, and pass the rest to the next call
then add things back up
base case: len(s) < 2, just return s
how to break problem smaller: s[1:], slice off one char
what to always return, the reversed sub string
what to do with returns: add the current char to the end
time: O(s**2) because of recreating all the sub string (immutable) and the recreating strings again when buidling the final string
space: O(len(s))
"""
def reverse_string(s):
    if len(s) < 2: return s
    return reverse_string(s[1:]) + s[0]

# Test cases for Reverse a String
print("\nReverse String Tests")
assert reverse_string("hello") == "olleh", f"Expected 'olleh', but got {reverse_string('hello')}"
assert reverse_string("world") == "dlrow", f"Expected 'dlrow', but got {reverse_string('world')}"
assert reverse_string("a") == "a", f"Expected 'a', but got {reverse_string('a')}"
print("All Reverse String tests passed!")


# Challenge 5: Power of a Number
"""
2**5 is the same as 2**2 * 2**2 * 2*1
so keep on dividing the power by 2
base case: power is 0 return 1, power is 1, return base
how to break problem smaller: keep on dividing the power by 2
what to always return: an integer, the result of the smaller problem
what to do with the return: result * result * base**(0 or 1)
time and space: O(log exponent)
"""
def power(base, exponent):
    if exponent == 0: return 1
    if exponent == 1: return base

    small_exp = math.floor(exponent/2)
    remain_exp = exponent % 2
    sub_result = power(base, small_exp)
    return sub_result * sub_result * power(base, remain_exp)

# Test cases for Power of a Number
print("\nPower Tests")
assert power(2, 3) == 8, f"Expected 8, but got {power(2, 3)}"
assert power(5, 0) == 1, f"Expected 1, but got {power(5, 0)}"
assert power(7, 2) == 49, f"Expected 49, but got {power(7, 2)}"
print("All Power tests passed!")


# Challenge 6: Check if a String is a Palindrome
def is_palindrome(s):
    pass  # Implement the palindrome check function using recursion

# Test cases for Palindrome Check
# print("\nPalindrome Tests")
# assert is_palindrome("racecar") == True, f"Expected True, but got {is_palindrome('racecar')}"
# assert is_palindrome("hello") == False, f"Expected False, but got {is_palindrome('hello')}"
# assert is_palindrome("a") == True, f"Expected True, but got {is_palindrome('a')}"
# print("All Palindrome tests passed!")


# Challenge 7: Recursive Sum of an Array
"""
base case: index == len(arr)-1: just return the number at the index
how to make problem smaller: index + 1
what to always return: an integer which is the the sub array sum
what to do with the return: num at current index + that sub sum
time: O(arr)
space: O(arr)
"""
def recursive_sum(arr, index = 0):
    if not arr: return 0
    if index == len(arr)-1: return arr[index]
    return arr[index] + recursive_sum(arr, index + 1)


# Test cases for Recursive Sum of an Array
print("\nRecursive Sum Tests")
assert recursive_sum([1, 2, 3, 4]) == 10, f"Expected 10, but got {recursive_sum([1, 2, 3, 4])}"
assert recursive_sum([10, 20, 30]) == 60, f"Expected 60, but got {recursive_sum([10, 20, 30])}"
assert recursive_sum([]) == 0, f"Expected 0, but got {recursive_sum([])}"
print("All Recursive Sum tests passed!")


# Challenge 8: Greatest Common Divisor (GCD)
def gcd(a, b):
    pass  # Implement the GCD function using recursion

# Test cases for GCD
# print("\nGCD Tests")
# assert gcd(48, 18) == 6, f"Expected 6, but got {gcd(48, 18)}"
# assert gcd(7, 3) == 1, f"Expected 1, but got {gcd(7, 3)}"
# assert gcd(100, 25) == 25, f"Expected 25, but got {gcd(100, 25)}"
# print("All GCD tests passed!")


# Challenge 9: Binary Search (Recursive)
"""
well use divide and conquer
set min and mid and max index
then do search on the one that might contains target
base case: min => max, return -1
how to make problem smaller: set min and max index closer to each other
what to always return: a integer, which is the index where the target is found. could be -1 though
what to do with return: keep on returning it
remember max-min is exlusive of max
time and space: o(log arr length)
"""
def binary_search(arr, target, min=0, max=math.inf):
    if not arr or min >= max: return -1
    max = len(arr) if max == math.inf else max
    mid = min + math.floor((max-min)/2)
    cur_num = arr[mid]
    if target == cur_num: return mid
    if target < cur_num:
        return binary_search(arr, target, min, mid)
    else:
        return binary_search(arr, target, mid+1, max)


# Test cases for Binary Search
print("\nBinary Search Tests")
assert binary_search([1, 2, 3, 4, 5, 6], 4) == 3, f"Expected 3, but got {binary_search([1, 2, 3, 4, 5, 6], 4)}"
assert binary_search([1, 2, 3, 4, 5, 6], 7) == -1, f"Expected -1, but got {binary_search([1, 2, 3, 4, 5, 6], 7)}"
assert binary_search([], 4) == -1, f"Expected -1, but got {binary_search([], 4)}"
print("All Binary Search tests passed!")


# Challenge 10: Permutations of a String
"""
basically:
a it has two spots avaiable to add new char: ?a?
so when b adds to the string, it can be ba, and ab
ba has 3 spots: ?b?a?

base case: s is empty or len == 1: return s
how to break problem smaller: s[1:] make the string smaller by 1
what to always return: [sub permutations]
what to do with returns:, add current char to each permutation, by walking through all the available pos
a: 1
ab: each new sub permute takes time: 1 + 1 = 2, resulting in 2 new strings for each sub permute, then total * 2 is the time and space
abc: each new sub permute takes: 2 + 1 = 3, resulting in 3 new strings for each sub permute, total

time:
1
2 * 1 = 2
3 * 2 = 6
4 * 6 = 24

4 * 3 * 2
so time is O(factorial(n))
same with space

"""
def permute_string(s):
    if len(s) < 2: return [s]
    sub_permutes = permute_string(s[1:])
    new_permutes = []
    cur_char = s[0]
    for sub_permute in sub_permutes:
        for index in range(len(sub_permute)):
            left_str = sub_permute[0:index]
            right_str = sub_permute[index:]
            new_permutes.append(left_str + cur_char + right_str)
        new_permutes.append(sub_permute + cur_char)
    
    return new_permutes

# Test cases for Permutations of a String
print("\nPermutations Tests")
assert sorted(permute_string("abc")) == sorted(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']), f"Expected ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'], but got {permute_string('abc')}"
assert sorted(permute_string("ab")) == sorted(['ab', 'ba']), f"Expected ['ab', 'ba'], but got {permute_string('ab')}"
assert sorted(permute_string("a")) == sorted(['a']), f"Expected ['a'], but got {permute_string('a')}"
print("All Permutations tests passed!")