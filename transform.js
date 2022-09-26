function translate2d(x, y) {
  return (fx, fy) => [fx + x, fy];
}

function scale2d(x, y) {
  return (fx, fy) => [fx*x, fy*y];
}

function composeTransformation(f, g) {
  return (x, y) => g(...f(x, y));
}

function memoizeTransform(fn) {
  let previousX, previousY, previousResult;
  
  return (x, y) => {
    if(previousX == x && previousY == y) {
      return { value: previousResult, from_cache: true };
    } else {
      previousX = x;
      previousY = y;
      previousResult = fn(x, y);
      return { value: previousResult, from_cache: false };
    }
  }
}

module.exports = { translate2d, scale2d, composeTransformation, memoizeTransform };