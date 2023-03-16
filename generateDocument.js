function generateDocument(characters, document) {
    return ableToGenerateDocumentFromCharMap(document, generateCharMapFromString(characters));
  }
  
  function generateCharMapFromString(string){
    const charMap = new Map();
    for(char of string){
      charCount = charMap.has(char) ? charMap.get(char) : 0;
      charMap.set(char, charCount + 1);
    }
    return charMap
  }
      
  
  function ableToGenerateDocumentFromCharMap(document, charMap){
    for(char of document){
          if(!charMap.has(char)) return false;
           
          charStockRemaining = charMap.get(char);
          if(charStockRemaining <= 0) return false;
  
          charMap.set(char, charStockRemaining - 1);
    }
    return true;
  }