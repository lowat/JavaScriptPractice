function firstNonRepeatingCharacter(string) {
    const charFrequencies = new Map();
    for(char of string) {
      frequency = char in charFrequencies ? charFrequencies.get(char) : 0;
      charFrequencies[char] = frequency + 1;
    }
  
    for(let i = 0; i < string.length; i++) {
      const currentChar = string[i];
      if(charFrequencies[currentChar] === 1) return i;
    }
    return -1;
  }
  