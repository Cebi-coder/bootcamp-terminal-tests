 module.exports = function  countAllFromTown(regNumbers,location){
    var RegNum = regNumbers.split(',');
    
   var fromStellies = []
    for (var i = 0; i < RegNum.length;i++){
      var TrimedNums = RegNum[i].trim();
     
      if (TrimedNums.startsWith(location)){
      fromStellies.push(TrimedNums)
       
  } 
  }
   return fromStellies.length;  
  }