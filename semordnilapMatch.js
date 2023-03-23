function semordnilap(words) {
    const wordSet = new Set(words);
    const semordnilapPairs = [];
    for(const word of words) {
      const reversedWord = word.split("").reverse().join("")
      if(wordSet.has(reversedWord) && reversedWord !== word){
        semordnilapPairs.push([word, reversedWord]);
        wordSet.delete(word);
        wordSet.delete(reversedWord);
      }
    }
    return semordnilapPairs;
  }
  
  exports.semordnilap = semordnilap;