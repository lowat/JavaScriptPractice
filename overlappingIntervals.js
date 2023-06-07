function mergeOverlappingIntervals(array) {
    const sorted = array.sort((a, b) => a[0] - b[0]);
    const result = [];
    let ongoingRange = sorted[0];
    for (let i = 1; i < sorted.length; i++) {
        if (ongoingRange[1] >= sorted[i][0]) {
            ongoingRange[1] = Math.max(ongoingRange[1], sorted[i][1]);
        } else {
            result.push(ongoingRange);
            ongoingRange = sorted[i];
        }
    }
    result.push(ongoingRange);
    return result;
}

// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
