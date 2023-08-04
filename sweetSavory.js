function sweetAndSavory(dishes, target) {
    dishes.sort((a, b) => a - b);
    let left = 0,
        right = dishes.length - 1,
        closestDiff = Infinity;
    const result = [0, 0];
    while (left < right && dishes[left] < 0 && dishes[right] > 0) {
        const currentPairValue = dishes[left] + dishes[right];
        if (currentPairValue === target) 
            return [
                dishes[left], dishes[right]
            ];
        

        if (currentPairValue > target) {
            right--;
            continue;
        }
        const currentDiff = target - currentPairValue;
        if (currentDiff <= closestDiff) {
            result[0] = dishes[left];
            result[1] = dishes[right];
            closestDiff = currentDiff;
        }
        left++;
    }
    return result;
}

// Do not edit the line below.
exports.sweetAndSavory = sweetAndSavory;
