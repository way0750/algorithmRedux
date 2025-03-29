/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 abacabh
 abacabh

worst case ceil(word.length / k)

 took 3

so remove k amount (each time count + 1)
    if shortern string matches from the beginning
 */
    var minimumTimeToInitialState = function(word, k) {
        let count = 1;
        let compI = k;
        while (compI < word.length) {
            let a = 0;
            let b = compI;
            let match = true;
            while (b < word.length && match) {
                match = word[a] === word[b];
                a++;
                b++;
            }
            if (match) return count;
            count++;
            compI += k;
        }
        return count;
    };