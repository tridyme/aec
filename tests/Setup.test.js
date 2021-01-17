const chai = require('chai');
const dirtyChai = require('dirty-chai');
const createChaiJestDiff = require('chai-jest-diff');
chai.use(dirtyChai);
const assert = chai.assert;

const ecart = (calculatedValue, targetValue) => {
  if (targetValue === '#NOMBRE!' && Number.isNaN(Number(calculatedValue))) {
    return 0;
  }
  if (calculatedValue === targetValue) {
    return 0;
  }
  if (targetValue !== 0) {
    return Math.abs(calculatedValue - targetValue) / targetValue;
  }
  if (targetValue === 0 && calculatedValue) {
    return Math.abs(calculatedValue);
  }
  if (targetValue === 0) {
    return Math.abs(calculatedValue);
  }
  if (calculatedValue === 0) {
    return Math.abs(targetValue);
  }
  return 'ERROR';
};

const tolerance = 0.1;

module.exports = {
  assert,
  ecart,
  tolerance
}
