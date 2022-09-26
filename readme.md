# Instructions

Your design company has primarily been working with CSS transformations to build web pages. After some discussion, a decision is made to start using JavaScript to perform some calculations dynamically. Some of your teammates are less experienced with JavaScript, so you decide to use a function closure to create reusable transformation for {x, y} coordinate pairs.

__Please write code and tests for the functions defined below.__

## 1. Translate the coordinates

Implement the translate2d function that returns a function making use of a closure to perform a repeatable 2d translation of a coordinate pair.

```js
const moveCoordinatesRight2Px = translate2d(2, 0);
const result = moveCoordinatesRight2Px(4, 8);
// result => [6, 8]
```

## 2. Scale the coordinates

Implement the scale2d function that returns a function making use of a closure to perform a repeatable 2d scale of a coordinate pair.

For this exercise, assume only positive scaling values.

```js
const doubleScale = scale2d(2, 2);
const result = doubleScale(6, -3);
// result => [12, -6]
```

## 3. Compose transformation functions

Combine two transformation functions to perform a repeatable transformation. This is often called function composition, where the result of the first function 'f(x)' is used as the input to the second function 'g(x)'.

```js
const moveCoordinatesRight2Px = translate2d(2, 0);
const doubleCoordinates = scale2d(2, 2);
const composedTransformations = composeTransformation(
  moveCoordinatesRight2Px,
  doubleCoordinates
);
const result = composedTransformations(0, 1);
// result => [4, 2]
```

## 4. Save the results of functions

Implement the memoizeTransform function. It takes a function to memoize, then returns a new function that remembers the inputs to the supplied function so that the last return value can be "remembered" and only calculated once if it is called again with the same arguments.

> Memoizing is sometimes used in dynamic programming. It allows for expensive operations to be done only once since their results are remembered. Note that in this exercise only the last result is remembered, unlike some solutions in dynamic programming that memoize all results.

```js
const tripleScale = scale2d(3, 3);
const memoizedScale = memoizeTransform(tripleScale);

memoizedScale(4, 3); // => { value: [12, 9], from_cache: false }
memoizedScale(4, 3); // => { value: [12, 9], from_cache: true }
```