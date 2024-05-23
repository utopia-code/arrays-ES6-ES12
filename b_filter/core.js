function onlyEven(array) {
  return array.filter((item, index) => !(index & 1))
  // your code here
}

function onlyOneWord(array) {
  return array.filter((item) => !(/\s/.test(item)))
  // your code here
}

function positiveRowsOnly(array) {
  return array.filter(item => !(item.some(v => v < 0)))
  // your code here
}

function allSameVowels(array) {
  return array.filter(item => (item.match(/[aeiou]/ig)).every( v => v === (item.match(/[aeiou]/ig))[0]) )
  // your code here
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
