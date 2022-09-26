const { translate2d, scale2d, composeTransformation, memoizeTransform } = require('./transform');

test('move to the right by 2px', () => {
  const moveCoordinatesRight2Px = translate2d(2, 0)
  expect(moveCoordinatesRight2Px(4, 8).join(",")).toBe("6,8");
});

test('scale * 2', () => {
  const doubleScale = scale2d(2, 2)
  expect(doubleScale(6, -3).join(",")).toBe("12,-6");
});

test('composeTransformation', () => {
  const moveCoordinatesRight2Px = translate2d(2, 0);
  const doubleCoordinates = scale2d(2, 2);
  const composedTransformations = composeTransformation(
    moveCoordinatesRight2Px,
    doubleCoordinates
  );  
  expect(composedTransformations(0, 1).join(",")).toBe("4,2");
});

test('memoizeTransform', () => {
  const tripleScale = scale2d(3, 3);
  const memoizedScale = memoizeTransform(tripleScale);
  var result = memoizedScale(4, 3)
  expect(result.value.join(",")).toBe("12,9")
  expect(result.from_cache).toBe(false)
  
  result = memoizedScale(4, 3)
  expect(result.value.join(",")).toBe("12,9")
  expect(result.from_cache).toBe(true)
  
  result = memoizedScale(3, 3)
  expect(result.value.join(",")).toBe("9,9")
  expect(result.from_cache).toBe(false)
  
  var result = memoizedScale(4, 3)
  expect(result.value.join(",")).toBe("12,9")
  expect(result.from_cache).toBe(false)
})