function multiplyBy10(array) {
  return array.map(item => item * 10)
  // your code here
}

function shiftRight(array) {
  let temp = array[array.length -1];
  return array.map((item, index, arr) => item = index === 0 ? temp : arr[index - 1])
  // your code here
}

function onlyVowels(array) {
  return array.map(item => item.replace(/[bcdfghjklmnpqrstvwxyz]/gi, ''))
  // your code here
}

function doubleMatrix(array) {
  return array.map(arr => arr.map(item => item * 2))
  // your code here
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
