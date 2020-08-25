module.exports = function totalPhoneBill(airTime){
    var list = airTime.split(',');
   
    var total = 0
    
       
    for (var i = 0; i < list.length;i++){
      
      var phoneBill = list[i].trimLeft();
      
      if (phoneBill == ('call')){
        total += 2.75;
       
      }
      else if (phoneBill == ('sms')){
        total  += 0.65;
 
        
      }  
    }
  
   return 'R' + total.toFixed(2);
  }
  