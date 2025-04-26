/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 group time by name
 sort time
 then do sliding window to see there are >= 3 within 1 hr
    if yes, short return person's name
    else return null;


 */
    const _useKeyTooOften = (times) => {
        times.sort((a, b) => a - b);
        let back = 0;
        for (let front = 1; front < times.length; front++) {
            let backTime = times[back];
            const frontTime = times[front];
            while (frontTime - backTime > 60) backTime = times[++back];
            if (front - back + 1 >= 3) return true;
        }
        return false;
    }
    var alertNames = function(keyName, keyTime) {
        const nameToTimes = {};
        for (let i = 0; i < keyName.length; i++) {
            const name = keyName[i];
            const hoursInMinutes = +keyTime[i].slice(0, 2) * 60;
            const minutes = +keyTime[i].slice(3);
            const time = hoursInMinutes + minutes;
            nameToTimes[name] = nameToTimes[name] || [];
            nameToTimes[name].push(time);
        }
        const ans = [];
        for (let name in nameToTimes) {
            if (_useKeyTooOften(nameToTimes[name])) ans.push(name);
        }
        return ans.sort();
    };