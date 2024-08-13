"""
should get the prompt here too
reorder_linkedlist
get middle node
remove_nth_from_end


This problem was asked by Uber.

You are given a 2-d matrix where each cell consists of either /, \, or an empty space. Write an algorithm that determines into how many regions the slashes divide the space.

For example, suppose the input for a three-by-six grid is the following:

\    /
 \  /
  \/
Considering the edges of the matrix as boundaries, this divides the grid into three triangles, so you should return 3.

my solution without actual code:
loop through matrix cell by cell
when find a empty call that hasn't been visited, do a breadth first search to mark all connecting empty cells as visited. Doing so to essentially mark ten entire connect region as visited. once done update a function level counter by +1
once done loop through the matrix we will have the region count
time: matrix length for looping through it, and breath first search will essentially, at worst, do another matrix length loop once
so time: O(matrix)
space: O(matrix) because we will need to have a record of same size, at worst case, to keep track of visited cells

"""
