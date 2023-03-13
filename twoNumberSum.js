function twoNumberSum(array, targetSum) {
  const matchSet = new Set();

  for (const num of array){
    const needed = targetSum - num;
    if(matchSet.has(needed)){
      return [num, needed];
    }
    matchSet.add(num);
  }
  return [];
}