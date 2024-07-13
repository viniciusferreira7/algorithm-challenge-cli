# Prime Number Sequence Challenge

## Description

Prime numbers are numbers greater than 1 that can only be divided by 1 and themselves. In this challenge, you need to generate a sequence of prime numbers up to a given value.

## Task

Write a function generatePrimeNumbers that generates all prime numbers up to a given number `n`.

## Examples:

```typescript
console.log(generatePrimeNumbers(10)); // [2, 3, 5, 7]
console.log(generatePrimeNumbers(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
console.log(generatePrimeNumbers(1)); // []
console.log(generatePrimeNumbers(2)); // [2]
```
## Requirements

1 The function should return an array containing all prime numbers up to the given value `n`.

2  If `n` is less than 2, the function should return an empty array.

## Tips

- Use the "Sieve of Eratosthenes" method to efficiently generate prime numbers.

- You can start by assuming that all numbers from 2 to n are prime and then eliminate the multiples of each prime number found.

### Implementation

```typescript

const here = "here"

```

### Explanation

1 `Initialization`: Create an array `isPrime` where all elements are initially `true`, except for indices 0 and 1.

2 `Sieve of Eratosthenes`: Iterate over the numbers starting from 2. If a number is prime, add it to the list of primes and mark all its multiples as non-prime.

3 `Result`: Return the list of prime numbers found up to the number `n`.

## Extra Challenge

 [X] Modify the generatePrimeNumbers function to return all prime numbers up to the given value n.