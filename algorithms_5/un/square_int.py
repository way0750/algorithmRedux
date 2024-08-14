"""
Given a positive integer n, find the smallest number of squared integers which sum to n.

For example, given n = 13, return 2 since 13 = 32 + 22 = 9 + 4.

Given n = 27, return 3 since 27 = 32 + 32 + 32 = 9 + 9 + 9.

27:
25 - 5
1 - 1
1 - 1
5**2 + 1**2 + 1**2
25 + 1 + 1 = 27
total 3 numbers

then from 5, scale down 1 digit at the time

16 - 4
9 - 3
1 - 1
1 - 1

16 + 9 + 1 + 1
27
but as you scale down, there will be results that can you reuse, so save them

set cache = {
    num: count
    1: 1
    2: 2
    3: 3
    4: 2
    5: 3
}

so start from sqrt(input) and scale down 1 by 1
base case: input is found in cache, just return the cached result
how to make problem smaller:
    start with sqrt(input)
    then scale down by 1 until running 
what to always return: num count
what to do with return save it, cache {cur_num: count}, and 
"""
import math
cache = {0:0, 1:1, 2:2, 3:3, 4:2 , 5:2}
def get_nums(num, cache = cache):
    # base case:
    if num in cache: return cache[num]
    num_sqrt = int(math.sqrt(num))
    sub_count = math.inf
    for n in range(num_sqrt, 0, -1):
        sub_count = min(get_nums(num-(n**2), cache), sub_count)
    cache[num] = sub_count + 1
    return cache[num]

print(get_nums(100))
print(cache)
