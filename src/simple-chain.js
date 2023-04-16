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
    }else if(typeof value === 'number'){
      this.result.push(`${value}`)
    }
    else{
      
     
    }
    return this
  },
  removeLink(position ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(position !== "number" || position % 1 !== 0 || position < 0 || position > this.result.length){
      throw new Error("You can't remove incorrect link!");
    }
    
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
