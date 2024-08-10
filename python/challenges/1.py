import math
# Challenge 1: Palindrome Check
# Write a function that checks if a given string is a palindrome. A palindrome is a word that reads the same backward as forward.

def is_palindrome(s):
    left = 0
    right = len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        else:
            left += 1
            right -= 1
    return True

# Test cases for Challenge 1
assert is_palindrome("racecar") == True
assert is_palindrome("python") == False
assert is_palindrome("madam") == True
assert is_palindrome("12321") == True
assert is_palindrome("hello") == False


# Challenge 2: FizzBuzz
# Write a function that returns a list of numbers from 1 to n. But for multiples of three, it should return "Fizz" instead of the number and for the multiples of five, return "Buzz". For numbers which are multiples of both three and five, return "FizzBuzz".

def fizz_buzz(n):
    words = []
    for num in range(1, n+1):
        s = 'Fizz' if num % 3 == 0 else ''
        s += 'Buzz' if num % 5 == 0 else ''
        if s:
            words.append(s)
        else:
            words.append(num)

    return words


# Test cases for Challenge 2
assert fizz_buzz(15) == [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
assert fizz_buzz(5) == [1, 2, "Fizz", 4, "Buzz"]
assert fizz_buzz(3) == [1, 2, "Fizz"]
assert fizz_buzz(1) == [1]


# Challenge 3: Anagram Check
# Write a function that checks if two strings are anagrams. Two strings are anagrams if they are made of the same characters with the same frequencies.

def are_anagrams(s1, s2):
    freq = {}
    for s in s1:
        freq[s] = freq.get(s, 0) + 1
    
    for s in s2:
        if s not in freq:
            return False
        else:
            freq[s] -= 1
        
        if freq[s] == 0:
            del freq[s]
    return not bool(freq)

# Test cases for Challenge 3
assert are_anagrams("listen", "silent") == True
assert are_anagrams("python", "typhon") == True
assert are_anagrams("hello", "world") == False
assert are_anagrams("rat", "car") == False
assert are_anagrams("aabbcc", "bbaacc") == True


# Challenge 4: Prime Numbers
# Write a function that returns a list of all prime numbers up to a given number n.
def is_prime(n):
    if n == 1: return False
    if n < 4: return True
    for div in range(2, math.floor(math.sqrt(n))+1):
        if n % div == 0:
            return False
    return True

def prime_numbers(n):
    ret = [num for num in range(1, n+1) if is_prime(num)]
    return ret
    

# Test cases for Challenge 4
assert prime_numbers(10) == [2, 3, 5, 7]
assert prime_numbers(20) == [2, 3, 5, 7, 11, 13, 17, 19]
assert prime_numbers(1) == []
assert prime_numbers(2) == [2]
assert prime_numbers(0) == []


# Challenge 5: Fibonacci Sequence
# Write a function that returns the first n numbers in the Fibonacci sequence.

def fibonacci(n):
    if n < 1: return []
    fibs = [0,1,1]
    while len(fibs) < n:
        fibs.append(fibs[-1] + fibs[-2])
    return fibs[0:n]

# Test cases for Challenge 5
assert fibonacci(5) == [0, 1, 1, 2, 3]
assert fibonacci(7) == [0, 1, 1, 2, 3, 5, 8]
assert fibonacci(1) == [0]
assert fibonacci(2) == [0, 1]
assert fibonacci(10) == [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


# Challenge 6: Factorial
# Write a function that returns the factorial of a given number n.

def factorial(n):
    if n < 2: return 1
    prod = 1
    for num in range(1, n+1):
        prod *= num
    return prod

# Test cases for Challenge 6
assert factorial(5) == 120
assert factorial(0) == 1
assert factorial(1) == 1
assert factorial(7) == 5040
assert factorial(10) == 3628800


# Challenge 7: Reverse a List
# Write a function that reverses a list.

def reverse_list(lst):
    return [lst[i] for i in range(len(lst)-1, -1, -1)]

# Test cases for Challenge 7
assert reverse_list([1, 2, 3, 4, 5]) == [5, 4, 3, 2, 1]
assert reverse_list([1]) == [1]
assert reverse_list([]) == []
assert reverse_list(["a", "b", "c"]) == ["c", "b", "a"]
assert reverse_list([True, False, True]) == [True, False, True]


# Challenge 8: Count Vowels
# Write a function that counts the number of vowels in a given string.

def count_vowels(s):
    v = {'a', 'e', 'i', 'o', 'u'}
    s = s.lower()
    count = 0
    for char in s:
        if char in v:
            count += 1
    return count

# Test cases for Challenge 8
assert count_vowels("hello") == 2
assert count_vowels("python") == 1
assert count_vowels("aeiou") == 5
assert count_vowels("bcdfg") == 0
assert count_vowels("AeiOu") == 5


# Challenge 9: Sum of Digits
# Write a function that returns the sum of all digits of a given number.

def sum_of_digits(n):
    ns = str(n)
    sum = 0
    for char in ns:
        sum += int(char)
    return sum

# Test cases for Challenge 9
assert sum_of_digits(123) == 6
assert sum_of_digits(4567) == 22
assert sum_of_digits(0) == 0
assert sum_of_digits(1111) == 4
assert sum_of_digits(98765) == 35


# Challenge 10: Unique Elements
# Write a function that returns a list of unique elements from a given list.

def unique_elements(lst):
    uniq_ele = set(lst)
    arr = list(uniq_ele)
    arr.sort()
    return arr

# Test cases for Challenge 10
assert unique_elements([1, 2, 3, 1, 2, 3]) == [1, 2, 3]
assert unique_elements(["a", "b", "a"]) == ["a", "b"]
assert unique_elements([1]) == [1]
assert unique_elements([]) == []
assert unique_elements([1, 1, 1, 1]) == [1]