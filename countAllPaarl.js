module.exports = function countAllPaarl(regNumbers){
  var regNum = regNumbers.split(', ');
 var list =[]
  for (var i = 0; i < regNum.length; i++){
    var TrimNum = regNum[i].trim();
    
    if (TrimNum.startsWith('CJ')){
     list.push(TrimNum.length);
      
  }
}
  return list.length;
}
    