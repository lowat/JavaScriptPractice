function arrayOfProducts(array) {
    const result = [];
    leftProducts(result, array);
    rightProducts(result, array);
    return result;
}

function leftProducts(result, array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        result.push(product);
        product *= array[i];
    }
}

function rightProducts(result, array) {
    let product = 1;
    for (let i = array.length - 1; i >= 0; i--) {
        result[i] *= product;
        product *= array[i];
    }
}
exports.arrayOfProducts = arrayOfProducts;
