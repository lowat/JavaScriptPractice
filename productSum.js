function productSum(array, depth = 1) {
    let sum = 0;
    for(item of array){
      sum += Array.isArray(item) ? productSum(item, depth + 1) : item;
    }
    return depth * sum;
  }
  
  exports.productSum = productSum;