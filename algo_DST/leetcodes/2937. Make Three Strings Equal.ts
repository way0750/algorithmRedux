const findMinimumOperations = function(s1, s2, s3) {
    const loopCount = Math.min(s1.length, s2.length, s3.length);
    let i = 0;
    let match = true;
    while (i < loopCount && match) {
        if (s1[i] !== s2[i] || s1[i] !== s3[i]) match = false;
        if (match) i++
    }
    return i === 0 ? -1 : s1.length + s2.length + s3.length - i * 3;
};
