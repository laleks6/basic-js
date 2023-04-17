const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  result: [],

  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.result.length
  },
  addLink(value) {
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(value === " "){
      this.result.push(" ")
    }else{
      this.result.push(`( ${value} )`)
    }
    
    return this
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(typeof position !== "number" || position % 1 !== 0 || position <= 0 || position > this.getLength()){
      this.result = []
      throw new Error("You can't remove incorrect link!");
    }
    this.result.splice(position - 1, 1)
    return this
    
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.result.reverse()
    return this
    
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let chain = this.result.join("~~")
    this.result = []
    return chain
  }
};

module.exports = {
  chainMaker
};
