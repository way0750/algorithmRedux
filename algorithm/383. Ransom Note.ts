/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
    const record = {};
    for (let i = 0; i < magazine.length; i++) {
        const char = magazine[i];
        record[char] = (record[char] || 0) + 1;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        const char = ransomNote[i];
        record[char] = record[char] || 0;
        record[char]--;
        if (!(char in record) || record[char] < 0) {
            return false;
        }
    }
    return true;
};