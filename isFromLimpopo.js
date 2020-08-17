module.exports = function isFromLimpopo(registrationNumber){
    if (registrationNumber.endsWith('L')){
     return true
    }
    return false
  }