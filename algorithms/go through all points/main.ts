/**
 * You are in an infinite 2D grid where you can move in any of the 8 directions:
 (x,y) to
    (x+1, y),
    (x - 1, y),
    (x, y+1),
    (x, y-1),
    (x-1, y-1),
    (x+1,y+1),
    (x-1,y+1),
    (x+1,y-1)
  You are given a sequence of points and the order in which you need to cover the points.
  Give the minimum number of steps in which you can achieve it. You start from the first point.

  Example:

  Input: [(0, 0), (1, 1), (1, 2)]
  Output: 2
  It takes 1 step to move from (0, 0) to (1, 1). It takes one more step to move from (1, 1) to (1, 2)."

  basically you can go all 8 directions
  and the fastest way to go from one cell to another is diagonally because each diagonal step is same as
  making two step: one horizontal, one vertical
  in some case, after you use up all the diagonal steps, the remainding distance will have to be
  travel either horizontal or vertically
  ex:
   0 1 2 3 4 5 6 7 8 9
 0 A . . . . . . . .
 1 . . . . . . . . .
 2 . . . . . . . . B
 3 . . . . . . . . .

  the shortest distance fromm A to B is 8 steps
  from 0,0 to 8,2  (x,y) or (cell,row)
  go diagonally from 0,0 to 2,2 that's 2 steps
  then from 2,2 to 8,2 that is 6 steps
  so total 8 steps

  if take a horizontal + vertical path it would be 10 steps

  if you map out the shortest path, one way would be:

   0 1 2 3 4 5 6 7 8 9
 0 A . . . . . . . .
 1 . o . . . . . . .
 2 . . o o o o o o B
 3 . . . . . . . . .
   
   remember, 1 diagonal step is equal to 1 horizontal step and 1 vertical step
   and after using up all the diagonal steps, you you still have to continue to
   travel on horizontally or vertically depending on which one is longer
   so in a way, the shorest steps is either the horizontal or vertical difference
   depending which one is larger. 
 */