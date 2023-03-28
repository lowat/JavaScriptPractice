function bubbleSort(array) {
    let isSorted = false;
    let endPointer = array.length;
  
    while(!isSorted){
      isSorted = true;
      for(let i = 0; i < endPointer; i++){
        if(array[i] > array[i + 1]){
          swap(array, i, i + 1);
          isSorted = false;
        }
      }
      endPointer--;
    }
    return array;
  }
  
  function swap(array, indexOne, indexTwo){
    const temp = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = temp;
  }