function threeNumberSum(array, targetSum) {
    sortArray(array);
    return findTargetSumTriplets(array, targetSum);
}

function findTargetSumTriplets(array, targetSum) {
    const triplets = [];
    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
            const currentSum = array[i] + array[left] + array[right];
            if (currentSum == targetSum) {
                triplets.push([
                    array[i], array[left], array[right]
                ]);
                left++;
                right--;
            } else if (currentSum > targetSum) {
                right--;
            } else if (currentSum < targetSum) {
                left++;
            }
        }
    }
    return triplets;
}

function sortArray(array) {
    array.sort((a, b) => {
        return a - b;
    });
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
