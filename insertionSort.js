function insertionSort(array) {
    for(let i = 1; i < array.length; i++){
      let j = i;
      while(j > 0 && array[j] < array[j - 1]){
        swap(array, j, j - 1);
        j--;
      }
      
    }
    return array;
  }
  
  function swap(array, indexOne, indexTwo) {
    const temp = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = temp;
  }
  // Do not edit the line below.
  exports.insertionSort = insertionSort;
  