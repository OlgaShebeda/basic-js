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
let k = 0.693 / HALF_LIFE_PERIOD;
function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string"){
    return false;
  }
  if (typeof parseFloat(sampleActivity) != 'number' || parseFloat(sampleActivity) === NaN){
    return false;
  }
  if(+sampleActivity <= 0 ){
    return false;
  }else{
    return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / k);
  }
  // remove line with error and write your code here
  
}

module.exports = {
  dateSample
};
