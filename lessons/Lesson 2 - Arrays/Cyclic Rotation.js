/*
    https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
    https://app.codility.com/demo/results/trainingDYW73G-S4M/
    Task Score: 100%
*/

const solution = (A, K) => {

  // if array is same length as rotation times
  // array will end up similar to how it started
  if (A.length === K) {
    return A
  }

  // determine number of times to rotate
  // especially large numbers, modulus determines
  // the smallest number of moves to achieve result
  const rotations = K % A.length

  // grab the last elements to move to the front to achieve rotation
  // rotations determine number of elements moved to front
  // remove last rotations number of elements
  const movedElements = A.splice(A.length - rotations, rotations)

  // new arrays with movedElements at the front and rest of Array A
  return [ ...movedElements, ...A ]

}

console.log(solution([3, 8, 9, 7, 6], 3)) // returns [9, 7, 6, 3, 8] 
console.log(solution([0, 0, 0], 1)) // returns [0, 0, 0]
console.log(solution([1, 2, 3, 4], 4)) // returns [1, 2, 3, 4]
