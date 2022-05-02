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
const cats = '^^';

function countCats(matrixCats) {
  
  // remove line with error and write your code here
  let count = 0;
  matrixCats.forEach(el => {
    for (let i = 0; i < el.length; i++){
      if (el[i] === cats){
        count++;
      }
    }
  });
  return count;
}

module.exports = {
  countCats
};
