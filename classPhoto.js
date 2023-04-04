function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a,b) => a - b)
    blueShirtHeights.sort((a,b) => a - b)
    const redShirtRowIsTaller = redShirtHeights[0] > blueShirtHeights[0];
    return redShirtRowIsTaller ? canTakePhoto(redShirtHeights, blueShirtHeights) : canTakePhoto(blueShirtHeights, redShirtHeights);
  }
  
  function canTakePhoto(topRow, bottomRow){
    for(let i = 0; i < topRow.length; i++){
      if(bottomRow[i] >= topRow[i]){
        return false;
      }
    }
    return true;
  }
  
  exports.classPhotos = classPhotos;