function caesarCipherEncryptor(string, key) {
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
    const encryptedStringChars = [];
    for(const character of string){
      const currentCharIndex = ALPHABET.indexOf(character);
      const newCharIndex = (currentCharIndex + key) % 26;
      encryptedStringChars.push(ALPHABET[newCharIndex]);
    }
    return encryptedStringChars.join('');
  }