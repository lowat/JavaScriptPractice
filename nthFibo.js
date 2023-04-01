function getNthFib(n) {
    let prevValue = 1;
    let prevPrevValue = 0;
    for(let i = 2; i < n; i++){
      const temp = prevValue;
      prevValue = prevValue + prevPrevValue;
      prevPrevValue = temp;
    }
    return n > 1 ? prevValue : prevPrevValue;
  }