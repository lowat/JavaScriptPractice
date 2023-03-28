function selectionSort(array) {
    let currentIdx = 0;
    while(currentIdx < array.length - 1){
      let smallestIdx = currentIdx;
      for(let i = smallestIdx + 1; i < array.length; i++){
        if(array[i] < array[smallestIdx]){
          smallestIdx = i;
        }
      }
      swap(array, currentIdx, smallestIdx);
      currentIdx++;
    }
    return array;
  }
  
  function swap(array, indexOne, indexTwo){
    const temp = array[indexOne]
    array[indexOne] = array[indexTwo]
    array[indexTwo] = temp
  }