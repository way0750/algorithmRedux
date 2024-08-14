# Challenge 1: Find the Maximum Element in an Array

"""
Explanation:
- The goal is to find the maximum element in an array.
- Example:
  - Input: [3, 9, 2, 7, 1, 8]
  - Output: 9
well just divide the input into small arrays and return the largest num
use recursion:
base case: len(arr) 1, return arr[0], what if arr is empty? return None?
how to make array smaller: slice at mid point
what to always return: an integer, the largest from a sub array
what to do with return: you will have two returns, return the largest one

time and space: O(log arr length)

"""
import math
def find_max(arr, left=None, right=None):
    if right-left == 0:
        return arr[left]

    mid = left + math.floor((right - left)/2)
    left_ret = find_max(arr, left, mid)
    right_ret = find_max(arr, mid+1, right)
    return max(left_ret, right_ret)

# Test cases for Find the Maximum Element in an Array
print("Find Max Tests")
arr1 = [3, 9, 2, 7, 1, 8]
assert find_max(arr1, 0, len(arr1) - 1) == 9, f"Expected 9, but got {find_max(arr1, 0, len(arr1) - 1)}"
arr2 = [10, 20, 30, 40, 50]
assert find_max(arr2, 0, len(arr2) - 1) == 50, f"Expected 50, but got {find_max(arr2, 0, len(arr2) - 1)}"
arr3 = [-1, -5, -3, -4, -2]
assert find_max(arr3, 0, len(arr3) - 1) == -1, f"Expected -1, but got {find_max(arr3, 0, len(arr3) - 1)}"
print("All Find Max tests passed!")

# Challenge 2: Count the Number of Inversions in an Array

"""
Explanation:
- An inversion is a pair of elements in an array where the first element is greater than the second, but appears before it.
- Example:
  - Input: [2, 4, 1, 3, 5]
  - Output: 3 (The pairs are (2,1), (4,1), and (4,3))
my solution: 
time, space both: O(arr**2)
"""

def count_inversions(arr):
    pairs_count = 0
    for index, cur_num in enumerate(arr):
        for num in arr[index+1:]:
            if (num < cur_num): pairs_count += 1
    return pairs_count


# Test cases for Count the Number of Inversions in an Array
print("\nCount Inversions Tests")
arr1 = [2, 4, 1, 3, 5]
assert count_inversions(arr1) == 3, f"Expected 3, but got {count_inversions(arr1)}"
arr2 = [5, 4, 3, 2, 1]
assert count_inversions(arr2) == 10, f"Expected 10, but got {count_inversions(arr2)}"
arr3 = [1, 2, 3, 4, 5]
assert count_inversions(arr3) == 0, f"Expected 0, but got {count_inversions(arr3)}"
print("All Count Inversions tests passed!")

# Challenge 3: Binary Search

"""
Explanation:
- The goal is to find the position of a target value in a sorted array.
- Example:
  - Input: [1, 2, 3, 4, 5, 6], Target: 4
  - Output: 3 (The index of 4 in the array)
"""
import math
def binary_search(arr, target, left, right):
    print(left, right)
    if left == right:
        return left if arr[left] == target else -1
    mid = left + math.floor((right+1-left)/2)
    print(arr, mid)
    if arr[mid] == target: return mid
    if target < arr[mid]:
        return binary_search(arr, target, left, mid-1)
    else:
        return binary_search(arr, target, mid+1, right)

# Test cases for Binary Search
print("\nBinary Search Tests")
# arr1 = [1, 2, 3, 4, 5, 6]
# assert binary_search(arr1, 4, 0, len(arr1) - 1) == 3, f"Expected 3, but got {binary_search(arr1, 4, 0, len(arr1) - 1)}"
# assert binary_search(arr1, 7, 0, len(arr1) - 1) == -1, f"Expected -1, but got {binary_search(arr1, 7, 0, len(arr1) - 1)}"
# assert binary_search(arr1, 1, 0, len(arr1) - 1) == 0, f"Expected 0, but got {binary_search(arr1, 1, 0, len(arr1) - 1)}"
# print("All Binary Search tests passed!")


# Approaches/Hints:

"""
Challenge 1: Find the Maximum Element in an Array
- Approach: Use divide and conquer to split the array into two halves, recursively find the maximum in each half, and then combine by selecting the larger of the two.

Challenge 2: Count the Number of Inversions in an Array
- Approach: Use a modified merge sort to count inversions while sorting the array.

Challenge 3: Binary Search
- Approach: Use divide and conquer by repeatedly dividing the search interval in half until the target is found or the interval is empty.
"""