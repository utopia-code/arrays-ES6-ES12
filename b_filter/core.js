function onlyEven(array) {
  return array.filter((item, index) => !(index & 1))
}

function onlyOneWord(array) {
  return array.filter((item) => !(/\s/.test(item)))
}

function positiveRowsOnly(array) {
  return array.filter(item => !(item.some(v => v < 0)))
}

function allSameVowels(array) {
  return array.filter(item => (item.match(/[aeiou]/ig)).every( v => v === (item.match(/[aeiou]/ig))[0]) )
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
