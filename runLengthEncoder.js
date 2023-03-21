function runLengthEncoding(string) {
    const encodedChars = [];
    let currentChar = string[0];
    let currentCharCount = 0;
    for(const char of string){
      if(currentChar !== char || currentCharCount >= 9){
        encodedChars.push(currentCharCount);
        encodedChars.push(currentChar);
        currentChar = char;
        currentCharCount = 0;
      }
      currentCharCount++;
    }
    encodedChars.push(currentCharCount);
    encodedChars.push(currentChar);
    return encodedChars.join("");
  }
  