module.exports = function  findItemsOver20(list){
    var higher = []
    for (var i = 0; i < list.length; i++){
      var list1 = list[i]
      
      if(list1.qty > 20){
      higher.push(list1)
    
    }
    }
      return higher;
    }
    
    
      
      