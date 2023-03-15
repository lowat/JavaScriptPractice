function sortedSquaredArray(array) {
    sortedSquares = Array(array.length);
    largerValueIdx = array.length - 1;
    smallerValueIdx = 0;
    for(let idx = array.length - 1; idx >= 0; idx--){
      smallerValue = array[smallerValueIdx];
      largerValue = array[largerValueIdx];
      if(Math.abs(smallerValue) > Math.abs(largerValue)){
        sortedSquares[idx] = smallerValue * smallerValue;
        smallerValueIdx++;
      }   
      else{
        sortedSquares[idx] = largerValue * largerValue;
        largerValueIdx--;
      }     
    }   
    return sortedSquares;
}