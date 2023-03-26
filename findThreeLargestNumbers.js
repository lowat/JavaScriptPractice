function findThreeLargestNumbers(array) {
    const threeLargest = [null, null, null];
    for(const num in array){
      updateLargest(threeLargest, Number(num));
    }
    return threeLargest;
  }
  
  function updateLargest(threeLargest, num){
    
   if(threeLargest[2] === null || num > threeLargest[2]){
     shiftAndUpdate(threeLargest, num, 2);
   } else if(threeLargest[1] === null || num > threeLargest[1]){
     shiftAndUpdate(threeLargest, num, 1);
   } else if(threeLargest[0] === null || num > threeLargest[0]){
     shiftAndUpdate(threeLargest, num, 0);
   }
  }
  
  function shiftAndUpdate(array, num, idx){
    for (let i = 0; i <= idx; i++) {
      if(i === idx) {
        array[i] = Number(num);
      } else {
        array[i] = Number(array[i + 1]);
      }
    }
  }