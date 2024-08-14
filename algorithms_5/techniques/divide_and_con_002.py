# divide_and_conquer_challenges.py

"""
Challenge 1: Find the Minimum Element in a Rotated Sorted Array

Explanation:
- Given a rotated sorted array, find the minimum element.
- Example:
  - Input: [4, 5, 6, 7, 0, 1, 2]
  - Output: 0
"""

# Test cases for Find the Minimum Element in a Rotated Sorted Array
def test_find_min_rotated():
    arr1 = [4, 5, 6, 7, 0, 1, 2]
    assert find_min_rotated(arr1) == 0, f"Expected 0, but got {find_min_rotated(arr1)}"
    arr2 = [7, 8, 9, 1, 2, 3, 4]
    assert find_min_rotated(arr2) == 1, f"Expected 1, but got {find_min_rotated(arr2)}"
    arr3 = [2, 3, 4, 5, 6, 7, 8, 9, 1]
    assert find_min_rotated(arr3) == 1, f"Expected 1, but got {find_min_rotated(arr3)}"

"""
Challenge 2: Merge Sort Implementation

Explanation:
- Implement the merge sort algorithm to sort an array.
- Example:
  - Input: [38, 27, 43, 3, 9, 82, 10]
  - Output: [3, 9, 10, 27, 38, 43, 82]
"""

# Test cases for Merge Sort Implementation
def test_merge_sort():
    arr1 = [38, 27, 43, 3, 9, 82, 10]
    assert merge_sort(arr1) == [3, 9, 10, 27, 38, 43, 82], f"Expected [3, 9, 10, 27, 38, 43, 82], but got {merge_sort(arr1)}"
    arr2 = [5, 2, 9, 1, 5, 6]
    assert merge_sort(arr2) == [1, 2, 5, 5, 6, 9], f"Expected [1, 2, 5, 5, 6, 9], but got {merge_sort(arr2)}"
    arr3 = [12, 11, 13, 5, 6, 7]
    assert merge_sort(arr3) == [5, 6, 7, 11, 12, 13], f"Expected [5, 6, 7, 11, 12, 13], but got {merge_sort(arr3)}"

"""
Challenge 3: Search in a 2D Matrix

Explanation:
- Search for a target value in an m x n matrix. This matrix has the following properties:
  - Integers in each row are sorted in ascending from left to right.
  - Integers in each column are sorted in ascending from top to bottom.
- Example:
  - Input: matrix = [[1, 4, 7, 11], [2, 5, 8, 12], [3, 6, 9, 16]], target = 5
  - Output: True
"""

# Test cases for Search in a 2D Matrix
def test_search_2d_matrix():
    matrix1 = [
        [1, 4, 7, 11],
        [2, 5, 8, 12],
        [3, 6, 9, 16],
    ]
    target1 = 5
    assert search_2d_matrix(matrix1, target1) == True, f"Expected True, but got {search_2d_matrix(matrix1, target1)}"

    matrix2 = [
        [1, 4, 7, 11],
        [2, 5, 8, 12],
        [3, 6, 9, 16],
    ]
    target2 = 10
    assert search_2d_matrix(matrix2, target2) == False, f"Expected False, but got {search_2d_matrix(matrix2, target2)}"

    matrix3 = [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
    ]
    target3 = 3
    assert search_2d_matrix(matrix3, target3) == True, f"Expected True, but got {search_2d_matrix(matrix3, target3)}"