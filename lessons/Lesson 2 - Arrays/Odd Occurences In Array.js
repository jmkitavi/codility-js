/*
    https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
    https://app.codility.com/demo/results/training3E4XZ9-5F5/
    Task Score: 100%
*/

const solution = (A) => {
  // using bitwise operators to solve this
  // using XOR operator which will cancel out similar numbers
  // ie. running XOR on similar numbers will return 0 (9 ^ 9)
  // 00001001  - 9 in binary
  // 00001001  
  // 00000000  as seen here 

  // initialize result to the first element
  let result = A[0]

  // loop through rest of array running XOR
  for (let i = 1; i < A.length; i++) {
    result = result ^ A[i]
  }

  // after all matching numbers cancel each other
  // the remaining value will be the unrepeated number
  return result
}


console.log(solution([ 9, 3, 9, 3, 9, 7, 9 ])) // return 7
console.log(solution([ 0, 0 ])) // return 0
