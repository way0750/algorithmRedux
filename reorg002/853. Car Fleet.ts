/**
 * There are n cars at given miles away from the starting mile 0, traveling to reach the mile target.

You are given two integer array position and speed, both of length n, where position[i] is the starting mile of the ith car and speed[i] is the speed of the ith car in miles per hour.

A car cannot pass another car, but it can catch up and then travel next to it at the speed of the slower car.

A car fleet is a car or cars driving next to each other. The speed of the car fleet is the minimum speed of any car in the fleet.

If a car catches up to a car fleet at the mile target, it will still be considered as part of the car fleet.

Return the number of car fleets that will arrive at the destination.

 

Example 1:

Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]

Output: 3

Explanation:

The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12. The fleet forms at target.
The car starting at 0 (speed 1) does not catch up to any other car, so it is a fleet by itself.
The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
Example 2:

Input: target = 10, position = [3], speed = [3]

Output: 1

Explanation:

There is only one car, hence there is only one fleet.
Example 3:

Input: target = 100, position = [0,2,4], speed = [4,2,1]

Output: 1

Explanation:

The cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting each other at 4. The car starting at 4 (speed 1) travels to 5.
Then, the fleet at 4 (speed 2) and the car at position 5 (speed 1) become one fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
 

Constraints:

n == position.length == speed.length
1 <= n <= 105
0 < target <= 106
0 <= position[i] < target
All the values of position are unique.
0 < speed[i] <= 106

 */

/**
target = 10
[5, 2]
[1, 4]
first is ahead of second
first will take longer than second to reach the target
so they should be collapaed into one group with the slowest speed of 1
how do you know they will collaped:
a is head b is behind
a takes more rounds than b to reach the end
so they will collapse
target 12
[10,8,0,5,3]
[2, 4,1,1,3]
rounds:
[1, 1, 12, 7, 3]
sort the rounds by dis
0,  3, 5, 8, 10
12, 3, 7, 1, 1

what if
dis:
3, 3
rounds:
2, 4
how about during sorting, if can't determine by dis, then by rounds, smaller in front
can catch up if number later can get to target by same or less round than next
or count from left to right

set round = Infinity // so there is something to compare to begin with
set count = 0
if current pos is same as next one
    set round to the largest // as in the slowest
if current round is > than next
    count++
    and set round to next pos's round

time:
o(nlogn)
space: (n)

need to use a stack to collapse things
5, 2, 6

 */
var carFleet = function(target, position, speed) {
    let rounds = position.map((pos, i) => {
        return {
            pos,
            round: (target - pos) / speed[i],
        };
    });
    // sort by pos
    rounds = rounds
        .sort((a, b) => {
            return a.pos - b.pos || a.round - b.round;
        })
        .map((r) => r.round);
    
    let curFastest = 0;
    let groups = 0;
    for (let i = rounds.length-1; i > -1; i--) {
        if (rounds[i] > curFastest) {
            groups++;
        }
    }
    return groups;
};
/**
5, 2, 6
 */