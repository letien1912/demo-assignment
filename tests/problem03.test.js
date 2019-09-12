const problem03 = require('../src/problem03');

let weights1, edges1, weights2, edges2, weights3, edges3;

beforeAll(() => {
  weights1 = [1, 2, 2];
  edges1 = [[1, 2], [2, 3], [1, 3]];

  weights2 = [2, 1, 4, 5, 1];
  edges2 = [[1, 2], [2, 3], [3, 4], [4, 2], [2, 5], [5, 3]];

  weights3 = [];
  edges3 = [];
});

test('Ensure found the maximum path sum', () => {
  expect(problem03(weights1, edges1)).toEqual(5);
});

test('Ensure found the maximum path sum with loop inside', () => {
  expect(problem03(weights2, edges2)).toEqual(13);
});

test('Ensure rotated matrix picture to be correct with k = 1!', () => {
  expect(problem03(weights3, edges3)).toEqual(0);
});
