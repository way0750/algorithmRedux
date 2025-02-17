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
