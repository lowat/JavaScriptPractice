function isMonotonic(array) {
    let increases = true,
        decreases = true;
    if (array.length <= 2) {
        return true;
    }
    for (let i = 1; i < array.length; i++) {
        increases = !(array[i - 1] <= array[i]) ? false : increases;
        decreases = !(array[i - 1] >= array[i]) ? false : decreases;
    }
    return increases || decreases;
}

exports.isMonotonic = isMonotonic;
