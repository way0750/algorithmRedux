# when need to do breadth first searching on matrix:
    how to get 4 or 8 directions easier?

# when comes to re-assign many pointers on a lnked list
    how to make it easier to manage all these pointers?

# when comes to going through a linked list:
    sometimes it is easier to have a dummy head = { next: ActualInputHead }
    this might be easier to start the iteration

# moving two pointers or multiple pointers
    especiall for sequential data structures like link list, array, string

    place one pointer at each end and move them toward each other
    place both at one end and move toward the other end
    move from back to front
    let one go earlier first and then move
    slide window, both move in one direction but at different time

# Make very sure to look at other's solution
    It is just not worth it to spend too much time (> 15 minutes) on figuring out a solution
    there is always someone who is better than you out there. Don't reinvent the wheel.
    collect pattern instead.

    Again and again, and again, even if you have a solution, there is always a better one
    so even if you are done with your solution, you must look at others!

# when comes to comparing many tiny states to many tiny states:
    ex, sub string of some quality within a long string
        many tiny states from the sub string (ex, character frequency)
        many tiny states from the long string (ex, the current sub string and the character frequency)
        comparing them is time consuming if you compare one by one of the A's tiny state to each of the B's tiny states
        that's O(n**2)
        but rather, maintain another state that tells you the current situation between A's tiny state Vs B's tiny state
        ex: counter = 5 and there are 18 keys in A, and 500 in B's window, so counter = 5 means 5 of the 18 keys is found in
        B's window.
        you can update counter up and down as you go through B's data and comparing each bit to A's hash table

        leetcode: 76. Minimum Window Substring
        avoid many to many comparison, have a counter to tell if conditions are met

# exclusive VS inclusive range
    if exclusive, from left to right
        A = 4, B = 9
        then B - A means 5, 6, 7, 8, 9
        Also, exclusive in this case means that, A is excluded
    You must think about a range is being exclusive or inclusive
        which boundary is being excluded and which is being included.


# you don't always go one direction
    sometimes you need to loop multiple times and from different directions

# you don't have to put all logics in one loop
    you can break things into multiple parts for simpler logic
    putting everything in one loop / part will just add a lot of complex if-then logics

# adding default to avoid the initial checking if there is value already
    ex: creating a new linked list, you start with a dummy node
    if you need to compare with the last element in an new array
        add something to the array already
    this way, you can avoid checking if there is already a head linked list or if array is empty


# some ways to keep track max / min
    the usual way to to do it is by max = Math.max(max, ... )
    keep on updating the max as you go along
    but if the max is a range/sub string/sub array
        then you can just maintain a front and back pointer and move them along
        and keep track of the condition of the sub section
            if sub section is valid, only move front
            if sub section is invalid, move both front and back
        this saves a lot of computation of max = Math.max(max, ....)
    yes the sub section sometimes will become invalid as a whole but remember, there is another piece
        of state, usually like a counter that you can increase or decrease, and that piece of state will
        help to move the back pointer forward, and sometimes in the future, it will move the sub section
        out of the sitution where it is invalid.

    Also, the meaning of front - back = the current max range, so even if the data later on become invalid
        it still doesn't matter, the current max is already preserved by the distance between front and back
        and it will NEVER shrink too
        because the back either doesn't move or moves the same speed as the front
    check out:
        https://leetcode.com/problems/max-consecutive-ones-iii
        https://leetcode.com/problems/longest-repeating-character-replacement


# line sweep technique!!!!
    2536. Increment Submatrices by One
    look at the solution for what is line sweep!
    holy moly!

    some variation of line sweep:
    https://leetcode.com/problems/describe-the-painting

# string match:
    matching one string t against string s
        to see if string t is a sub sequent of string s
        or find string t's characters in string s, as they appear in the order
            in string t
        just keep two pointers, one on t, one on s
            compare current chars
            if same then move both forward
            else only move s forward
            you will get something like
            TFFFTTTTFFFFFTT
    https://leetcode.com/problems/append-characters-to-string-to-make-subsequence