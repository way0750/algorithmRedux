/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    folder.sort();
    let i = 0;
    const ans = [];
    while (i < folder.length) {
        ans.push(folder[i]);
        let next = i + 1;
        while (folder[next] && `${folder[next]}/`.indexOf(`${folder[i]}/`) === 0) {
            next++;
        }
        i = next;
    }
    return ans;
};
