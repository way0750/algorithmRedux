/**
 * @param {number} startAt
 * @param {number} moveCost
 * @param {number} pushCost
 * @param {number} targetSeconds
 * @return {number}

generate all possible combos?
    then just calculate which one has the lower cost?
    avoid all smart logic? like the 24 hour challenge?
600 seconds
    all possible combos:
    10:00 = 1000
    9:60 = 960

get all combos, how:
seconds / 60 + leftOver

980:
    16:20
    15:80 // just remove one minute off the minute and add to the seconds

1200:
    20:00
    19:60

1290
    21:30
    20:90

86:
    1:26
     :86

111:
    1:51

so can create at least 2 combos
    check each's costs

1st: seconds/60 + leftOver
2nd: 1st's minute-1, leftOver+60

 */
/**
sometimes seconds need to prefixed with 0
ex:
86
sometimes
minutes need to be ignored
 */
const formatTime = (minutes, seconds) => {
    if (minutes > 0) {
        const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return [...`${minutes}${secondsStr}`];
    } else {
        // what if second is 0
        const secondStr = seconds ? `${seconds}` : '';
        return [...`${secondStr}`];
    }
}
let makeCombos = (time) => {
    const combos = [];
    let minutes = Math.floor(time/60);
    let seconds = time%60;
    // first combo:
    const firstCombo = formatTime(minutes, seconds);
    firstCombo.length < 5 && combos.push(firstCombo);

    // second combo:
    if (minutes > 0 && seconds + 60 < 100) {
        minutes -= 1;
        seconds += 60;
        const secondCombo = formatTime(minutes, seconds);
        secondCombo.length < 5 && combos.push(secondCombo);
    } 
    return combos;
}

var minCostSetTime = function(startAt, moveCost, pushCost, targetSeconds) {
    const times = makeCombos(targetSeconds);
    let min = Infinity;
    for (let i = 0; i < times.length; i++) {
        const time = [`${startAt}`, ...times[i]];
        let sum = 0;
        for (let j = 1; j < time.length; j++) {
            const preDigit = time[j-1];
            const curDigit = time[j];
            if (preDigit !== curDigit) {
                sum += (moveCost + pushCost);
            } else {
                sum += pushCost;
            }
        }
        min = Math.min(min, sum);
    }
    return min;
};