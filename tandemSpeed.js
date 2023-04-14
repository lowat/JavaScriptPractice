function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);
    return calcTandemSpeed(redShirtSpeeds, blueShirtSpeeds, fastest);
  }
  
  function calcTandemSpeed(tandemPoolA, tandemPoolB, fastest){
    let indexA = 0;
    let indexB = fastest ? tandemPoolB.length - 1: 0;
    const deltaA = 1;
    const deltaB = fastest ? -1 : 1;
    let tandemSpeed = 0;
    while(areValidIndices(indexA, indexB, tandemPoolA.length, tandemPoolB.length)){
      tandemSpeed += Math.max(tandemPoolA[indexA], tandemPoolB[indexB]);
      indexA += deltaA;
      indexB += deltaB;
    }
    return tandemSpeed;
  }
  
  function areValidIndices(indexA, indexB, listA_length, listB_length){
    return indexA >= 0 && indexA < listA_length && indexB >= 0 && indexB < listB_length;
  }
  
  // Do not edit the line below.
  exports.tandemBicycle = tandemBicycle;
  