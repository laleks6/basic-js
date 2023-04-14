const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let count = 0

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  for(let i = 0; i < arr.length; i++){
    for(let k = 0; k < arr[i].length; k++) {
      if(arr[i][k] === '^^'){
        count++
      }
    }
  }
  const result = count === 0 ? 0 : count
  return result
}

module.exports = {
  countCats
};
