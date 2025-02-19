/**
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 

Example 1:

Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
 

Constraints:

1 <= word.length, prefix.length <= 2000
word and prefix consist only of lowercase English letters.
At most 3 * 104 calls in total will be made to insert, search, and startsWith.
 */

/**
   a tree structure
    with a list of potential children
        so and and forth
        each node can potentially be the ending char of a word
            need to indicate that
    should let the head be a dummpy head just to avoid checking if
        there is a head already
    
    0 -> [a, true] -> [c, d]
 */
    var Trie = function() {
        this.head = { val: '', children: {}, isWord: false };
    };
    
    /** 
     * @param {string} word
     * @return {void}
     */
    Trie.prototype.insert = function(word) {
        // go through each char of the word
        // and find if there is a match letter at the same
        // location in the tree
        // if yes, then move on both tree and word's letter
        // if no, then make new node add to current node and then move on
        // 0 a b c
        // a b c d(add d as a child to c)
        let curNode = this.head;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!curNode.children[char]) {
                curNode.children[char] = { val: char, children: {}, isWord: false };
            }
            curNode = curNode.children[char];
        }
        curNode.isWord = true;
    };
    
    /** 
     * @param {string} word
     * @return {boolean}
     */
    Trie.prototype.search = function(word) {
        // match all the chars and the last one should be isWord === true;
        let curNode = this.head;
        for (let i = 0; i < word.length; i++) {
            // console.log(curNode)
            const char = word[i];
            if (!curNode.children[char]) return false;
            curNode = curNode.children[char];
        }
        return curNode.isWord;
    };
    
    /** 
     * @param {string} prefix
     * @return {boolean}
     */
    Trie.prototype.startsWith = function(prefix) {
        // essentially matching path
        // just go through entire path
        let curNode = this.head;
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];
            if (!curNode.children[char]) return false;
            curNode = curNode.children[char];
        }
        return true;
    };
    
    /** 
     * Your Trie object will be instantiated and called as such:
     * var obj = new Trie()
     * obj.insert(word)
     * var param_2 = obj.search(word)
     * var param_3 = obj.startsWith(prefix)
     */