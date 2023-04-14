const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = []

  if(members === null || members === false || members === undefined){
    arr = false
  }else {
    for(let i = 0; i < members.length; i++) {
    console.log(members[i])
    if(typeof members[i] === "string"){
        for(let k = 0; i < members[i].length; k++){
        if(members[i][k] == " "){
          console.log(members[i][k] + " spase string")
        }else {
          console.log(members[i][k] + "  string")
          arr.push(members[i][k].toUpperCase())
          break}
        
    }
      
    }
  }
  console.log(arr)
    arr = arr.sort().join("")
  }
  
  

  console.log(arr)
   //arr.length === 0 ? "false" : arr
  return arr
}

module.exports = {
  createDreamTeam
};
