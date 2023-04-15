const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result;
  console.log(date instanceof Date)
  if(Object.getOwnPropertyNames(date).length > 0 || date instanceof Date === "false"){
    result = new Error();
  }else if(date === " "){
    result = 'Unable to determine the time of year!'
  }
  else if(date instanceof Date) {
    
    let moth = date.getMonth()
    if(+moth === 11 || +moth === 0 || +moth === 1 ) {
      result = "winter"
    }else if(+moth === 2 || +moth === 3 || +moth === 4 ) {
      result = "spring"
    }else if(+moth === 5 || +moth === 6 || +moth === 7 ) {
      result = "summer"
    }else if(+moth === 8 || +moth === 9 || +moth === 10 ) {
      result = "autumn"
    }
    
  }
  console.log(result)
  return result
}

module.exports = {
  getSeason
};
