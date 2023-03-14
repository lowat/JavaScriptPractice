function isValidSubsequence(array, sequence) {
  // Write your code here.
  let arrPointer = 0
  let seqPointer = 0
  while (seqPointer < sequence.length){
    if(arrPointer >= array.length){
      return False;
    }
    if(array[arrPointer] == sequence[seqPointer]){
      seqPointer++;
    }
    arr
  }
}