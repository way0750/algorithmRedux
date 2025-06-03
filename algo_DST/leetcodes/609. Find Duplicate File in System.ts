/**
 * @param {string[]} paths
 * @return {string[][]}
 essentially group by content
 the real challenge is how to read strings
 for each string
    read once to find the path
    then a loop to find all the file names and contents
 */
var findDuplicate = function(paths) {
    const groups = {};
    for (let path of paths) {
        const chunks = path.split(' ');
        const dir = chunks.shift();
        for (let chunk of chunks) {
            const [fileName, content] = chunk.split('(');
            groups[content] = groups[content] || [];
            groups[content].push(`${dir}/${fileName}`);
        }
    }
    const ans = [];
    for (let group in groups) {
        if (groups[group].length > 1) ans.push(groups[group]);
    }
    return ans;
};