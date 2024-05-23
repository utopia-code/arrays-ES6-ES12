function sum(array) {
  return array.reduce((acc, cur) => acc + cur, 0);
}

function productAll(array) {
  return array.reduce((acc,cur) => acc * cur.reduce((accum, current) => accum * current, 1),1);
}

function objectify(array) {
  const arrayToObject = array.reduce((acc, cv) => {
    return {...acc, [cv[0]]: cv[1]};
  }, {});

  return arrayToObject;
}

function luckyNumbers(array) {
  let string = '';

  const arrayToString = array.reduce((acc, cv, ci) => {
    if (ci == array.length - 1) {
      acc += 'and ' + cv
    } else {
      acc += cv + ', '
    }
    return acc;
    
  }, '');

  string = `Your lucky numbers are: ${arrayToString}`;

  return string
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
