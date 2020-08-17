module.exports = function findItemsOver(list,threshold){
  
    var result = []
    for(var i = 0; i < list.length; i++){
      var list1 = list[i]
      
      if (list1.qty > threshold){
        result.push(list1)
      
      }
    }
    return result;
  }
    