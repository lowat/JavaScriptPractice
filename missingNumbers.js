function missingNumbers(nums) {
    const targetLine = findTargetLine(nums);
    targetHalfSums = getTargetHalfSums(nums.length, targetLine);
    actualHalfSums = getActualHalfSums(nums, targetLine);
    return [
        targetHalfSums[0] - actualHalfSums[0],
        targetHalfSums[1] - actualHalfSums[1]
    ];
}

function findTargetLine(nums) {
    let total = 0;
    for (let i = 1; i <= nums.length + 2; i++) {
        total += i;
    }
    for (const num of nums) {
        total -= num;
    }
    return total / 2;
}

function getTargetHalfSums(numsLength, targetLine) {
    const targetHalfSums = [0, 0];
    for (let i = 1; i <= numsLength + 2; i++) {
        if (i <= targetLine) {
            targetHalfSums[0] += i;
        } else {
            targetHalfSums[1] += i;
        }
    }
    return targetHalfSums;
}

function getActualHalfSums(nums, targetLine) {
    const actualHalfSums = [0, 0];
    for (const num of nums) {
        if (num <= targetLine) {
            actualHalfSums[0] += num;
        } else {
            actualHalfSums[1] += num;
        }
    }
    return actualHalfSums;
}

// Do not edit the line below.
exports.missingNumbers = missingNumbers;
