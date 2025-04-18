should group by topic:
    data structure
        string
        array: stack, queue, monotonic stack, monotonic queue
        linklist: single and double
        tree: trie, binary tree, binary search tree, min or max heap
        graph
        matrix

    solution techniques
        Memoization
        Bottom-Up DP
        Knapsack
        Dijkstra’s, A* Search
        Prefix Sum
        linklist: Reversal, Merge, Cycle Detection
        Slow-Fast pointers
        two pointer
        dydamic programming
        recursion
        divide and conquer
        binary search
        search: depth first and breadth first
        sorting
            merge, radix, quick sort, bucket sort, counting sort
            topological sort
        greedy
        sliding window
        backtracking
        memoization
        string matching
        shortest path
        Permutations
        combination / combinatoric
        Subsets


    Other less common topics
        set
        hash
        math
        bit manipulation
        object-oriented design


time and space complexity
    some cheat sheet info:
    sorting:
        nlogn
    depth of a binary tree, if amount of nodes is given:
        logn
        logNodeAmout
        more like log2(node amount)
    get node amount if depth is given
        (2**(depth+1)) - 1
        zero base depth, the root node is on depth 0

Group 1: Sequential Data Structures (Strings, Arrays, Linked Lists)
-------------------------------------------------------------------
- Two Pointers:
  1. 3Sum (LeetCode #15)
  2. Container With Most Water (LeetCode #11)
- Sliding Window:
  3. Longest Substring Without Repeating Characters (LeetCode #3)
  4. Minimum Window Substring (LeetCode #76)
- Prefix Sum:
  5. Continuous Subarray Sum (LeetCode #523)
  6. Subarray Sum Equals K (LeetCode #560)
- Stack / Monotonic Stack:
  7. Next Greater Element II (LeetCode #503)
  8. Largest Rectangle in Histogram (LeetCode #84) not so much a stack solution, more like a dp solution.
- Sorting:
  9. Sort Colors (LeetCode #75)
  10. Merge Intervals (LeetCode #56)
- String Matching:
  11. Implement Trie (LeetCode #208)
  12. Longest Palindromic Substring (LeetCode #5)

Group 2: Trees & Graphs
------------------------
- DFS / BFS:
  13. Number of Islands (LeetCode #200)
  14. Surrounded Regions (LeetCode #130)
- Shortest Path:
  15. Network Delay Time (LeetCode #743)
  16. Cheapest Flights Within K Stops (LeetCode #787)
- Topological Sort:
  17. Course Schedule (LeetCode #207)
  18. Alien Dictionary (LeetCode #269)
- BST & Heap:
  19. Kth Smallest Element in a BST (LeetCode #230)
  20. Find Median from Data Stream (LeetCode #295)

Group 3: Recursion & Backtracking
---------------------------------
- Recursion:
  21. Decode String (LeetCode #394)
  22. Letter Case Permutation (LeetCode #784)
- Backtracking:
  23. Generate Parentheses (LeetCode #22)
  24. Word Search (LeetCode #79)
- Permutations & Combinations:
  25. Permutations (LeetCode #46)
  26. Combinations (LeetCode #77)
- Subsets:
  27. Subsets II (LeetCode #90)
  28. Combination Sum (LeetCode #39)

Group 4: Dynamic Programming & Greedy
-------------------------------------
- Knapsack & Coin Change:
  29. Coin Change (LeetCode #322)
  30. Partition Equal Subset Sum (LeetCode #416)
- Greedy Algorithms:
  31. Jump Game (LeetCode #55)
  32. Task Scheduler (LeetCode #621)
- Memoization / Bottom-Up DP:
  33. Longest Increasing Subsequence (LeetCode #300)
  34. House Robber II (LeetCode #213)

q = [...document.querySelectorAll('#findme > div')]
    .filter((ele) => !ele.querySelector('div > div > svg'))
    .map((ele) => ele.querySelector('a').href)
copy(q)


# some algorithms that I should get to know:
  Eulerian path
  Taxicab geometry
  Dijkstra's algorithm

  the game is to find a way to quickly learn them


# Two pointers:
On the sequential data structure, you place two pointers on it
    Ex on each of the opposite end and you move them toward each other.
    on certain point, and you move them away from each other

    As far as application, it is all over the place:
    It can be used for creating range
    or merely accessing two bits of info
    •	3Sum (LeetCode #15) → Find a triplet that sums to zero.
	•	Container With Most Water (LeetCode #11) → Maximize area between two lines.
	•	Valid Palindrome (LeetCode #125) → Check if a string is a palindrome.

# Siding windows:
8aintain two pointers, and move one ahead to exlarge a window (set by the two pointers)
and when certain condition meets, move the back pointer forward.
    move front pointer forward to include
    move back pointer forward to exclude

Application:
    to find a range of something on the sequential data structure

# Prefix sum:
    prefix in english:
        algorithms:
        these are the prefixes
        a
        al
        alg
        algo
        algor
        ...
        algorithms

    so prefix sum means maintaining a record of ALL previous sum/accumulation of some sort
    in numbers:
    [1,3,5,8]
    prefix sum would be:
    [1, 4, 9, 17]
Application:
    if you are keep the prefix/previous states continuesly in each location
    you are probably looking for a range



# Tree and graphs:
    should know all the ways to:
        build trees, graphs
        DFS, BFS using recursion or ieractive

# BFS on matrix and graph:
    using a queue to ensure going through each breadth first
    and use a while loop to process nodes one by one
    if input is a matrix, you can also use a direction offsets array to get next positions:
    [[+1, 0], [-1, 0], [0, +1], [0, -1]]
    make sure to add each node to `visited` right after putting it into the queue
    if need to keep track of level, just put a level num in the position too [row, col, level]

# DFS:
    use recursion as the iteraction/loop, and the recursive stack as list/sequence management

    recursiveCall(nextPos1)
    recursiveCall(nextPos2)
    recursiveCall(nextPos3)
    recursiveCall(nextPos4)

# back tracking:
1. What Are the Options?
Options: The possible choices or decisions you can make at each step to build a partial solution.

Example: In the N-Queens problem, the options are the columns where you can place a queen in the current row.
Example: In permutations, the options are the remaining elements not yet included in the current permutation.

2. What Is the Shared Container for Solutions?
Shared Container: A data structure (e.g., list, array, set) that tracks the current partial solution as you build it.

Example: In permutations, a list tracks the current sequence of elements.
Example: In the Knapsack problem, a list tracks the items included in the knapsack.

3. How to Add/Make a Choice and Remove It?
Add a Choice: Append the chosen option to the shared container.

Example: In permutations, add an element to the current sequence.
Remove a Choice: Undo the last decision to reset the state for exploring other options.
Example: In permutations, remove the last element from the sequence (list.pop()).

4. Validation: How Do I Know if a Partial Solution Is Valid?
Validation Check: A function that evaluates whether the current partial solution satisfies the problem’s constraints.

Example: In the N-Queens problem, check if the current queen placement doesn’t attack any previously placed queens.
Example: In Sudoku, check if the current number placement doesn’t violate row, column, or subgrid rules.

5. How Do I Know if Subsequent Progress Should Be Made?
Pruning: If the partial solution is invalid, stop exploring that branch (prune it).
Example: In the Knapsack problem, if adding an item exceeds the weight limit, skip that item.
Base Case: If the partial solution is complete, process it (e.g., save it or return it).

but of course you also need to deal with recursion as well


there seems to be a top to bottom and bottom to top way to do back tracking
  top to bottom:
    pass down a shared container to build solution
    you would make a decision and add to the container
    later you would remove the decision as you test other other decisions
  bottom to:
    you reduce the problem and pass it down, and there is no single shared container
      decision is made when the problem is reduced in someway
    but you don't need to remove the decision all because there is no single shared container
    then on the way back, if there are legits solution(s) you add current decision to the returned
      partial solution

both follow the make one decision and pass partial solution or reduced problem down the decision tree

which one to use:
  if the input/problem is liner, ex restore IP addresses from string,
    and you can just chop the input and pass a shorter version down
    use bottom to top?
  if you need to jump around all over the place to data from earlier part of the problem/input
    ex, permutation
    then share a single path container
  
  make a decision, add to the shared container
  make a decision, reduce the input/problem


# iteration when back tracking:
  you don't have to always use a for loop or a while loop, you can do a "use" "not use"
  basically choose current option do a recursive call
  not choosing current option do a recursive call

  another way to look at it:
    do_something(index)
    recursive(index+1)
  
# instead of having one shared container, you can also have multiple:
https://leetcode.com/problems/matchsticks-to-square/description/
there are 4 in this case!
other ideas for shared container:
  matrix
  string
  running sum

# to avoid using the same choice over and over when the challenge doesn't allow it
ex, AAAA output all combos:
A
AA
AAA
AAAA

but using the same old back track will end up:
0123
AAAA

01  :AA
012 :AAA
....
12  :AA
123 :AAA

you will need A for one round but never again. how?
collaps all options into 1 unique one
  and count its frequency
  then frequency now ALSO become an option
    ex: use 1 frequency, not use 1 frequency, etc...
  so now go through each unique option
    and then use frequency as an option as well
  once done with the unique option, you will simple move on
    thereby doing the: use it for the first round but avoid it later

And the example above wouldn't happen
  because: 012 and 123 they use the same amount of of As.
  and so both patterns are exactly the same and cover by the
  consuming of the same frequencies.


# about queue, and probably stack:
  https://leetcode.com/problems/jump-game-vi/
  
  sometimes you need to get a quick access to largest/smallest values within an range
  so you need to maintain a monotonic queue/stack for quick access
  ex: [1,1,1,2,2,5,5,7] or [8,8,6,5,3,3,2,1]
  [1,2,6,9]
  often you need to clean the queue/stack so it will always reflects the largest/smallest in a smaller range
  ex: [9,7,6,5,8,7] range size = 3
  it will look like:
  [9]
  [9,7]
  [9,7,6]
  [7,6,5]
  [8], 8 pops all the previous ones
  [8,7]


# the KMP string match algorithm
for matching a short string against a long one, to see if short is a substring of long:

let say: S = long string, P = pattern
so if: X is the location with mis-match
SSSSSSSSSSSSSSSSSSS
  PPPPPPPPPPPX
  A---------B
  so from A to B everything matches, then X is where we have to stop matching, P is actually longer, but X stops the match
  So whatever we already know about the pattern, from A to B, must be transferable to S's A to B
  so what do we know about the pattern then?
    well if we preprocess and figure out some facts about the pattern, then we will be able to transfer that to the S
    enter the "prefix" and "subfix" of the pattern:
    let's say
    PPPPPPPPPPPPPP
    1..1      2..2
    1 is the prefix part and 2 is the subfix, meaning they are exactly the same.
    and there can be multiple subfixes, THIS IS IMPORTANT:

    PPPPPPPPPPPPPP
      aaaa
       bbbb
         ccccc
             ddddd
    each subfix match the pattern prefix (the front portion of the string)
    and yes you can also have a situation like this:
    where the prefix and subfix even overlap the subfix
    PPPPPPPPPPPPPP
    1...........1
      2...........2
    
    so now, with the knowledge of the possible subfixes in the pattern, you can "slide" the pattern to re-match
    against the long string without having to moving i all the way back, or pattern all the way back, you can actually just:

SSSSSSSSSSS...
  PPPPPPPPP... mis match
    PPPPPPPPP... slide the pattern back to test one subfix
        PPPPPPPPP... slide the pattern again because the previous one didn't find a subfix to match the long string
          keep going until finding a subfix that matches the long stirng, might need to go through all the subfixes
    
    now going through (potentiall all) subfixes, is essentially the same as re-testing by moving i back and pattern back like
    the slow n * m way. Except this time you can re-use precalculated results to avoid moving i back, and can re-use precalculated
      prefixes

so the basic algorithm:
  get the all the subfixes for the pattern first
  then loop through the target string
    match char by char
      when a mismatch happens, you check the subfixes array to see which prefix you can use now
        choose that prefix, essentially sliding the pattern forward.
          if still doesn't match with current char, keep sliding forward (meaning choose a subfix from earlier in the array)
      never move the i back at all!