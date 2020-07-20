/*
    https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
    https://app.codility.com/demo/results/training3TUCUZ-Z29/
    Task Score: 100%
*/

const solution = (N) => {
    // convert number N to binary
    const binary = N.toString(2)
    
    let currentGap = 0  // store current binary gap
    let maxGap = 0      // store max binary gap
    let startCount = false // when to start counting gap elements

    // loop through all character in binary to check for binary gaps
    for (const character of binary) {
        // if char is 1 and not counting
        // start count, to start counting next character
        // makes sure to start counting after first 1 (prevents counting starting 0's)
        if (character === '1' && startCount == false) startCount = true

        // if next character is zero and count started ie. hit above check
        // then increment currentGap count
        if (character == '0' && startCount) currentGap++

        // if character is 1 and already counting
        // set maxGap if currentGap is larger than maxGap
        // reset currentGap for next count
        if (character === '1' && startCount) {
            maxGap = Math.max(maxGap, currentGap)
            currentGap = 0
        }
    }

    return maxGap
}

console.log(solution(529)) // binary: 1000010001    maxGap: 4
console.log(solution(9)) // binary: 1001    maxGap: 2
