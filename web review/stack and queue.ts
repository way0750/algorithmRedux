/**
 * Describe how you could use a single array to implement three stacks.
 * 
 * [>>>>> |||||| <<<<<<<]
 * unshifting to the front basically turning the front section of the array an stack
 * push does the same but turning the back portion of the array an stack
 * but you need a index to tell where one stack ends, and another starts
 * [>>>>> <<<<<<]
 * from here on, you can add another limit to have 3 stacks in one array
 * [11111 22222 33333]
 * technically you can have as many stacks in one array as you want
 * 
 * need to know where each stack starts and ends
 * when poping or adding need to update some stacks' meta datas
 * 
 * for convenience: init array with 1 element for the center stack [ null ];
 * because to add elements for 1st and 3rd stacks are very easy anyway, just unshift and push
 * [1112333]
 */

/**
 * Stack Min: How would you design a stack which, in addition to push and pop, has a function min which 
 * returns the minimum element? Push, pop and min should all operate in 0(1) time.
 * 
 * have another stack just for keeping the current min
 * time: O(n)
 * space: O(n)
 */

class StackWitMin {
    constructor() {
        this.arr = [];
        this.min = [];
    }

    add(val) {
        this.arr.push(val);
        const curMin = this.min.length ? this.min[this.min.length-1] : Infinity;
        this.min.push(Math.min(curMin, val));
    }

    pop() {
        const ans = this.arr.pop();
        this.min.pop();
        return ans;
    }

    min() {
        return this.min[this.min.length-1];
    }
}

class StackOfStack {
    constructor(threshold) {
        this.stacks = [];
        this.threshold = threshold;
    }

    add(val) {
        if (!this.stacks.length) this.stacks.push([]);
        const lastStack = this.stack[this.stack.length-1];
        if (lastStack.length < this.threshold) {
            lastStack.push(val);
        } else {
            this.stacks.push([val]);
        }
    }

    pop() {
        const lastStack = this.stack[this.stack.length-1] || [];
        let ans = lastStack.length && lastStack.pop();
        return ans;
    }

    popAtIndex(index) {
        const subStack = this.stacks[index] || [];
        return subStack.pop();
    }
}

/**
 * Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.
 * 
 * 1[<<<<<<<<]
 * 2[]
 * 
 * for pushing:
 * always push into 1
 * when poping:
 * if there are values in 2, pop it
 * if no, then pop all values and pushing them into 2
 * then pop 2
 */

class QueueByStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(val) {
        this.stack1.push(val);
    }

    pop() {
        if (!this.stack2.length) {
            while(this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop();
    }
}

/**
 * Sort Stack: Write a program to sort a stack such that the smallest items are on the top.
 * You can use an additional temporary stack, but you may not copy the elements into any other
 * data structure (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.
 * 
 * from back to front on the stack1 (while stack1.length)
 * check if last number in stack1 is larger than last number in stack2
 * if yes pop and add to stack2
 * if not:
 *  take out that last number from stack1
 *      keep popping numbers from stack2 and compare the new last number from stack2
 *          until you find one that's smaller than temp number
 *          then put the temp in the stack2
 * 
 * once done, just pop and put everything back to stack1
 * 
 * time: O(n**2)
 * space: O(n);
 */

const sortStack = (stack1) => {
    const stack2 = [];
    while (stack1.length) {
        const s1LastNum = stack1.pop();
        while (stack2[stack2.length-1] > s1LastNum) {
            stack1.push(stack2.pop());
        }
        stack2.push(s1LastNum);
    }

    while (stack2.length) {
        stack1.push(stack2.pop());
    }
}

/**
 * Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly
 * "first in, first out" basis. People must adopt either the "oldest" (based on arrival time) of
 * all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will
 * receive the oldest animal of that type). They cannot select which specific animal they would like.
 * Create the data structures to maintain this system and implement operations such as enqueue,
 * dequeueAny, dequeueDog, and dequeueCat. You may use the built-in Linked List data structure.
 */

class AnimalShelter {
    public catsQueue: Array<any>;
    public dogsQueue: Array<any>;
    constructor() {
        this.catsQueue = [];
        this.dogsQueue = [];
    }

    dequeueAny() {
        const oldestCat = this.catsQueue[0] || { animal: null, rank: Infinity };
        const oldestDog = this.dogsQueue[0] || { animal: null, rank: Infinity };
        return oldestCat.rank < oldestDog.rank
            ? (this.catsQueue.shift() || oldestCat).animal
            : (this.dogsQueue.shift() || oldestDog).animal;
    }

    dequeueDog() {
        return (this.dogsQueue.shift() || {animal: null}).animal
    }

    dequeueCat() {
        return (this.catsQueue.shift() || {animal: null}).animal
    }

    enqueue(animal) {
        const cat = this.catsQueue[0] || { animal: null, rank: 0 };
        const dog = this.dogsQueue[0] || { animal: null, rank: 0 };
        const rank = Math.max(cat.rank, dog.rank);
        if (animal === 'cat') this.catsQueue.push({animal: 'cat', rank: rank+1});
        if (animal === 'dog') this.catsQueue.push({animal: 'dog', rank: rank+1});
    }
}


/**
 * sort stack
 */

const sortStack001 = (stack) => {
    let tempStack = [];
    while (stack.length) {
        const num = stack.pop();
        while (tempStack[tempStack.length-1] > num) {
            stack.push(tempStack.pop());
        }
        tempStack.push(num);
    }
};

