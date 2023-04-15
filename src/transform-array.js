const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let resultArr = arr
  if(!Array.isArray(arr)) {
    
  }else if(resultArr.length < 1 ){

  }
  else {
    for(let i = 0; i < resultArr.length; i++) {
   
      if(resultArr[i] === "--discard-next") {
        if(i === 0 ) {
          
          resultArr.splice(i, 2)
         
        }else {
          resultArr.splice(i, 2)
          transform(resultArr)
        
        }

      }else if(resultArr[i] === "--discard-prev") {
        if(i === 0 ) {
          
          resultArr.splice(i, 2)
        }else {
          resultArr.splice(i, 2)
          transform(resultArr)
        
        }
        
      }else if(resultArr[i] === "--double-next") {
        if(i === resultArr.length - 1  ) {
         
          resultArr.splice(i, 0, resultArr[i+1])
        }else {
          resultArr.splice(i, 1, resultArr[i+1])
          transform(resultArr)

        } 
       
       
      }else if(resultArr[i] === "--double-prev") {
        if(i === 0 ) {
          resultArr.splice(i, 0, resultArr[i-1])
        }
        }else {
          resultArr.splice(i, 1, resultArr[i-1])
          transform(resultArr)
        }
      
         
       
      
    }
  }
  return resultArr
}

module.exports = {
  transform
};
