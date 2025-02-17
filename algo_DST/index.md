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
-------------------------------------------------
- Two Pointers (arrays, strings, linked lists)
- Sliding Window (arrays, strings)
- Prefix Sum (arrays, matrices)
- Stack / Monotonic Stack / Queue (arrays, queues, strings)
- Sorting: Merge, Quick, Radix, Bucket, Counting (arrays, linked lists)
- String Matching (KMP, Rabin-Karp, Z Algorithm)

Example Problems:
1. Longest Substring Without Repeating Characters
2. Minimum Window Substring
3. Subarray Sum Equals K
4. Next Greater Element
5. Merge Intervals

Group 2: Trees & Graphs
------------------------
- Depth-First Search (DFS) / Breadth-First Search (BFS) (trees, graphs, matrices)
- Shortest Path Algorithms (Dijkstra, A* Search) (graphs)
- Topological Sort (graphs)
- Binary Search Tree (BST) / Heap (Min/Max) (trees)
- Trie (Prefix Tree)

Example Problems:
1. Number of Islands
2. Network Delay Time
3. Course Schedule (Topological Sort)
4. Kth Smallest Element in BST

Group 3: Recursion & Backtracking
---------------------------------
- Recursion (arrays, strings, trees)
- Backtracking (strings, arrays, trees)
- Permutations & Combinations (arrays, strings)
- Subsets (arrays)

Example Problems:
1. Generate Parentheses
2. Letter Combinations of a Phone Number
3. Subsets II

Group 4: Dynamic Programming & Greedy
-------------------------------------
- Knapsack Variants (0/1, Unbounded, Coin Change) (arrays, DP)
- Greedy Algorithms (intervals, heaps, graphs)
- Memoization / Bottom-Up DP

Example Problems:
1. Coin Change
2. Jump Game
3. Longest Increasing Subsequence


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
  8. Largest Rectangle in Histogram (LeetCode #84)
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
