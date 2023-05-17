function moveElementToEnd(array, toMove) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const leftValue = array[left];
        const rightValue = array[right];
        if (leftValue === toMove && rightValue !== toMove) {
            swap(left, right, array);
        }
        if (leftValue !== toMove) {
            left++;
        }
        if (rightValue === toMove) {
            right--;
        }
    }
    return array;
}

function swap(indexOne, indexTwo, array) {
    const temp = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = temp;
}

exports.moveElementToEnd = moveElementToEnd;
