#!/usr/bin/python3

"""n x n 2D matrix, rotate it 90 degrees clockwise"""


# function to rotate the matrix
def rotate_2d_matrix(matrix):
    # lenght of the matrix
    n = len(matrix)
    # matrix loop
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    # step 2: reverse each row to complete the rotation
    for i in range(n):
        matrix[i].reverse()