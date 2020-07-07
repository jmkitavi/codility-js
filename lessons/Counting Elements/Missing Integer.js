/*
    https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
    https://app.codility.com/demo/results/trainingH54429-SCF/
    Total Score = 100%
*/

const solution = (A) => {
    let availableNumbers = []

    // map array A,
    // for each available number set availableNumbers[num] to true
    A.map(num => availableNumbers[num] = true)

    // set smallestInteger to one
    let smallestInteger = 1

    // while loop through availableNumbers
    // Checking if current smallestInteger is true in availableNumbers
    // if so increment to next and keep checking
    while (availableNumbers[smallestInteger]) smallestInteger++

    // when while loop finishes, return current smallestInteger
    return smallestInteger

}


console.log(solution([1, 3, 6, 4, 1, 2])) // should return 5
console.log(solution([1, 2, 3])) // should return 4
console.log(solution([-1, -3])) // should return 1
