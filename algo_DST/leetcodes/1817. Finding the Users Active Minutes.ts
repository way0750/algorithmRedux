const findingUsersActiveMinutes = function(logs, k) {
    const userMins = {}
    for (let [id, min] of logs) {
        userMins[id] = userMins[id] || new Set();
        userMins[id].add(min);
    }
    const ans = Array(k).fill(0);
    for (let recSet in userMins) ans[userMins[recSet].size-1]++;
    return ans;
};
