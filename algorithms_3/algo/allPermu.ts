/**
 * get all permutation of a set of unique chars
 * abc:
 * [a], then add b to each possible index: [[ba], [ab]]
 * [[cba], [bca], [bac], [cab], [acb], [abc]]
 */

export function getAllPermutations (str) {
    if (str.length === 0) return [];
    let allPermus = [str[0]];
    for (let i = 1; i < str.length; i++) {
        const curChar = str[i];
        const newPermus = [];
        allPermus.forEach((permuStr) => {
            // add current char to each position
            for ( let j = 0; j <= permuStr.length; j++) {
                newPermus.push(permuStr.slice(0, j) + curChar + permuStr.slice(j));
            }
        });
        allPermus = newPermus;
    }

    return allPermus;
}

const getAscend = (arr, record) => {
    arr.forEach((num, index) => {
        const preNum = index >= 0 ? arr[index-1] : num;
        if (num > preNum) {
            record[index] = Math.max(record[index], (record[index-1] || 0) + 1);
        }
    });
    return record;
}

const getExtra = (arr) => {
    let slopArr = Array(arr.length).fill(0);
    slopArr = getAscend(arr, slopArr);
    slopArr = getAscend(arr.reverse(), slopArr.reverse());
    return slopArr.reduce((sum, num) => sum + num);
}

const findSubstring = (s, words) => {
    const wordFreq = words.reduce((obj, word) => {
        obj[word] = (obj[word] || 0) + 1;
        return obj;
    }, {});
    const chunckSize = words[0].length;
    const results = [];
    for (let i = 0; i < s.length; i += chunckSize) {
        let curChuck = s.slice(i, i + chunckSize);
        if (wordFreq[curChuck]) {
            const freq = {...wordFreq};
            let chuckI = i;
            while (freq[curChuck] > 0) {
                if ((--freq[curChuck]) === 0) delete freq[curChuck];
                chuckI += chunckSize;
                curChuck = s.slice(chuckI, chuckI + chunckSize);
            }
            if (Object.values(freq).length === 0) {
                results.push(i);
            }
        }
    }
    return results;
}

const rob = (nums) => {
    if (!nums.length) return 0;
    const cache = { [nums.length]: 0, [nums.length+1]: 0 };
    for (let i = nums.length-1; i > -1; i--) {
        cache[i] = Math.max(nums[i] + cache[i+2], cache[i+1]);
    }
    return cache[0]
}

var wordBreak = function(s, wordDict) {
    const cache = {'': true};
    const words = {};
    let maxWordLength = 0;
    wordDict.forEach((word) => {
        words[word] = true;
        maxWordLength = Math.max(maxWordLength, word.length);
    });
    const search = (sen) => {
        if (cache.hasOwnProperty(sen)) {
            return cache[sen];
        }
        let curWord = '';
        for (let i = 0; i < maxWordLength; i++) {
            curWord += sen[i];
            if (words[curWord] && search(sen.slice(i+1))) {
                cache[sen] = true;
                return true;
            }
        }
        cache[sen] = false;
        return false;
    };
    const result = search(s);
    return result;
};

var findMin = function(nums) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2)
        if (nums[mid] < nums[mid-1]) return nums[mid];
        const isLeftSorted = nums[left] < nums[mid];
        const isRightSofted = nums[mid] < nums[right];
        if (isLeftSorted && isRightSofted) {
            return nums[left];
        }
        if (!isLeftSorted) {
            right = mid + 1;
        } else {
            left = mid;
        }
    }
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
use the same idea as merge sort for array
divide the list into two parts then sort each each with recursive calls

base case:
  if n1, n2 both has no next node, sort them and return
  if !n1 or !n2 return the only one left n1 || n2
what to always return:
    one node, a head of a sorted list
what to do with the return list
    merge sort, pick one node at the time and compare which one goes to the sorted list.next
how to make problem smaller:
    do a fast and slow run of the list
     fastX2 slowX1
    then next the slow.next is the head of the divided list
 */
const sortList = function(head) {
    if (!head || !head.next) return head;
    let slow = head;
    // let fast = head?.next?.next || null;
    let fast = head && head.next && head.next.next || null;
    while (slow && fast) {
        slow = slow.next || null;
        // fast = fast?.next?.next || null;
        fast = fast && fast.next && fast.next.next || null;
    }
    const nextList = slow.next
    slow.next = null
    let sorted1 = sortList(head);
    let sorted2 = sortList(nextList);
    let sortedHead = null;
    let sortedTail = null;
    while (sorted1 && sorted2) {
        let smallNode
        if (sorted1.val < sorted2.val) {
            smallNode = sorted1;
            sorted1 = sorted1.next;
        } else {
            smallNode = sorted2;
            sorted2 = sorted2.next;
        }

        if (!sortedHead) {
            sortedHead = smallNode;
            sortedTail = smallNode;
        } else {
            sortedTail.next = smallNode;
            sortedTail = sortedTail.next;
        }
    }
    if (!sortedHead) {
        sortedHead = sorted1 || sorted2;
    } else {
        sortedTail.next = sorted1 || sorted2;
    }
    return sortedHead;
};

const getLargestNum = (nums) => {
    nums.sort((a, b) => {
        const abNum = +`${a}${b}`;
        const baNum = +`${b}${a}`;
        return baNum - abNum;
    });
    return nums.map((num) => num.toString()).join('');
}

describe('get all permutation', () => {
    it('should sort correctly', () => {
        const nums = [3,30,34,5,9];
        expect(getLargestNum(nums)).to.equal('9534330');
    });
    xit('should sort list', () => {
        const node1 = { val: 1, next: null };
        const node2 = { val: 2, next: null };
        const node3 = { val: 3, next: null };
        const node4 = { val: 4, next: null };
        node4.next = node2;
        node2.next = node1;
        node1.next = node3;
        const result = sortList(node4);
        expect(result).to.equal([]);
    });
    xit ('find mid', () => {
        const nums = [11,13,15,17];
        const result = findMin(nums);
        expect(result).to.equal(1);
    });
    xit('substring', () => {
        const s = "barfoothefoobarman";
        const words = ["foo","bar"];
        const result = findSubstring(s, words);
        expect(result).to.equal([]);
    });
    xit('should get abc', () => {
        const str = 'ab';
        expect(getAllPermutations(str).length).to.equal([]);
    });

    xit('should work', () => {
        const arr = [1,0,2];
        expect(getExtra(arr)).to.equal(0);
    });
});
