const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domen = email.split('@');
  return domen[domen.length - 1];
  // remove line with error and write your code here
}

module.exports = {
  getEmailDomain
};
