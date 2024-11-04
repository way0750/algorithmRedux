# Unit test for rotate_matrix function
def test_rotate_matrix():
    # Define a 4x4 matrix
    matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ]

    # Define the expected rotated matrix
    expected_rotated_matrix = [
        [13, 9, 5, 1],
        [14, 10, 6, 2],
        [15, 11, 7, 3],
        [16, 12, 8, 4]
    ]

    # Call the rotate_matrix function and compare the result with the expected result
    assert rotate_matrix(matrix) == expected_rotated_matrix