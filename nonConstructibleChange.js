function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);
    let currentMaxChange = 0;
    for (const coin of coins) {
      if(coin > currentMaxChange + 1) return currentMaxChange + 1;
      currentMaxChange += coin;
    }
    return currentMaxChange + 1;
  }