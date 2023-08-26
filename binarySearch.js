function binarySearch(array, target) {
    let leftPointer = 0;
    let rightPointer = array.length - 1;
    while (leftPointer <= rightPointer) {
        const midPointer = Math.floor((leftPointer + rightPointer) / 2);
        if (array[midPointer] === target) {
            return midPointer;
        } else if (target > array[midPointer]) {
            leftPointer = midPointer + 1;
        } else {
            rightPointer = midPointer - 1;
        }
    }
    return -1;
}
