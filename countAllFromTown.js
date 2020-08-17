 module.exports = function  countAllFromTown(regNumbers,location){
    var RegNum = regNumbers.split(',');
    
   var fromStellies = []
    for (var i = 0; i < RegNum.length;i++){
      var TrimedNums = RegNum[i].trim();
      //console.log(RegNum)
      if (TrimedNums.startsWith(location)){
      fromStellies.push(TrimedNums)
      console.log(fromStellies)
    
  } 
  }
   return fromStellies.length;  
  }