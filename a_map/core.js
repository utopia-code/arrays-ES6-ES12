function multiplyBy10(array) {
  return array.map(item => item * 10)
}

function shiftRight(array) {
  let temp = array[array.length -1];
  return array.map((item, index, arr) => item = index === 0 ? temp : arr[index - 1])
}

function onlyVowels(array) {
  return array.map(item => item.replace(/[bcdfghjklmnpqrstvwxyz]/gi, ''))
}

function doubleMatrix(array) {
  return array.map(arr => arr.map(item => item * 2))
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
