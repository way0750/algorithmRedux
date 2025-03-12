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