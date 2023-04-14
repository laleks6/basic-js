const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(string) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //let convertNumer = Number(string);
  //console.log(typeof +convertNumer + convertNumer)
  //let result
  if(typeof string !== "string" || isNaN(string) || string.length === 0 || +string > 15 || +string <= 0 ){
    result = false
  }else {
    let a = Math.log2(MODERN_ACTIVITY / +string);

    result = Math.ceil(a * HALF_LIFE_PERIOD )
  }
  return result 
}

module.exports = {
  dateSample
};
