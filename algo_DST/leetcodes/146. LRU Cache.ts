/**
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

 

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
 

Constraints:

1 <= capacity <= 3000
0 <= key <= 104
0 <= value <= 105
At most 2 * 105 calls will be made to get and put.

 */

/**
 * @param {number} capacity

size = 5
abcde

// add f and remove a for being stale
// add f to front for most recently used
bcdef

// access b and put it in front for being the most recently used:
cdefb

// how to maintain age? and order of age?
// array splicing is O(n) because the array needs to move items closer to each
// when it is done in the middle. O(1) for front and end though

can use a doubly linked list to maintain age order
then have a hash for O(1) to putting and accessing
what about size? and accessing the last element?
have an internal counter, update when adding and deleting
also have a pointer for head and end
    head for adding and accessing first (most recently used)
    end for deleting the last element


adding
    put in hash
    set new node as new head
    update counter
accessing
    because we are using a hash, just hash[input key]
deleting
    remove the end and set the 2nd to last element as the new end
        this is why we need doubly linked list
 */
var LRUCache = function(capacity) {
    this.nodeCount = 0;
    this.capacity = capacity;
    this.list = {val: 'first node', next: null, pre: null};
    this.end = { val: 'ending node', next: null, pre: null};

    this.list.next = this.end;
    this.end.pre = this.list;

    this.hash = {}; // { key: listNode }
};

/** 
 * @param {number} key
 * @return {number}
 get val
    but also need to move node to front
    */
LRUCache.prototype.get = function(key) {
    // if there is key, get val and set the key's node the new head
    if (!this.hash[key]) return -1;
    const targetNode = this.hash[key];
    const preNode = targetNode.pre;
    const nextNode = targetNode.next;
    
    // link up pre to next
    preNode.next = nextNode;
    nextNode.pre = preNode;

    // set targetNode as the new first node;
    const oldFirstNode = this.list.next;
    // 1: establish head and first node
    this.list.next = targetNode
    targetNode.pre = this.list;
    // 2: establish new head to the old head node
    targetNode.next = oldFirstNode;
    oldFirstNode.pre = targetNode;

    return targetNode.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.hash[key]) {
        this.hash[key].val = value;
        this.get(key); // move it to front
    } else {
        // put it in front
        const newNode = { key, val: value, pre: null, next: null}
        const oldFirstNode = this.list.next;

        // link the head to the new node
        this.list.next = newNode;
        newNode.pre = this.list;

        // link the new node to the old first node
        newNode.next = oldFirstNode;
        oldFirstNode.pre = newNode;

        // add to hash too
        this.hash[key] = newNode;
        this.nodeCount++;
        // remove the last node from the list and the hash
        if (this.nodeCount > this.capacity) {
            // preserve the related nodes first
            const lastNode = this.end.pre
            const secondToLastNode = lastNode.pre;

            // disconnect lastNode from the list
            lastNode.pre = null;
            lastNode.next = null;

            // connect the new last node to the end node:
            secondToLastNode.next = this.end;
            this.end.pre = secondToLastNode;

            // remove the target node from the hash as well
            delete this.hash[lastNode.key];
            this.nodeCount--;
        }
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */