module.exports  = function mostProfitableDepartment(salesData){
    var topDepartment = {}
    
     for (var i = 0; i < salesData.length; i++){
      var salesList = salesData[i]
      
      var depName = salesList.department;
       if(topDepartment[depName] === undefined){
         topDepartment[depName] = 0
       }
       topDepartment[depName] +=  salesList.sales       
     }
    
    var x = 0;
    var z = '';
       for (var i in topDepartment){
       if(topDepartment[i] > x){
       x = topDepartment[i]
      
       z = i;  
       }
  }
    return z;
  }   
  
