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
console.log(generatePrimeNumbers(120)); // [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113]
```
## Requirements

1 The function should return an array containing all prime numbers up to the given value `n`.

2  If `n` is less than 2, the function should return an empty array.

## Tips

- Use the "Sieve of Eratosthenes" method to efficiently generate prime numbers.

- You can start by assuming that all numbers from 2 to n are prime and then eliminate the multiples of each prime number found.

### Implementation

```typescript

import { sleep } from 'bun';
import chalk from 'chalk';
import { createSpinner } from 'nanospinner';

export async function generatePrimeNumbers({value} :{value: string}){
  const spinner = createSpinner(`generating prisme numbers up to ${value}...`).start()
  await sleep(1000)
  
  const converToNumber = Number(value)
  const isNumber = !!converToNumber
  
	if (!isNumber) {
    spinner.error({ text: chalk.redBright(`The value provided is not a valid option: ${chalk.yellow(value)} \n`) });
    
		return;
	}

  if(converToNumber <= 1){
    spinner.error({ text: chalk.redBright(`The value provided is not a prime number: ${chalk.yellow(value)} \n`) });
  }

  const numberList: number[] = []
  
  
  for(let i = 2; i <= converToNumber; i++){
    numberList.push(i)
  }


const multiplesOfNumberList: number[] = []

numberList.forEach((current, _, original) => {
  
  original.forEach((n, nI) => {
    
    multiplesOfNumberList.push(current * (nI + 1))

  })

  multiplesOfNumberList.sort((a, b) => a- b)
  })

  const primeNumbers: number[] = []

 multiplesOfNumberList.forEach((multipleA, _, origin) => {
    let repeat = 0

    // biome-ignore lint/complexity/noForEach: <explanation>
    origin.forEach((multipleB) => {
      if(multipleB === multipleA){
        repeat +=1
      }
      
    })

    const repeatedOnlyOnce = repeat === 1
    const doesIncludesMultipleA = numberList.includes(multipleA)
    
    if(repeatedOnlyOnce && doesIncludesMultipleA){
      primeNumbers.push(multipleA)
    }
  })

  const lastPrimeNumber = primeNumbers[primeNumbers.length - 1]

  if(lastPrimeNumber === converToNumber){
    spinner.success({ text: chalk.greenBright(`${converToNumber} is a prime a number! \n`) })
  } else {
    spinner.error({ text: chalk.redBright(`${converToNumber} is not a prime a number! \n`) })

  }

  const sumPrimeNumbers = primeNumbers.reduce((acc, primeNumber) => acc + primeNumber, 0)

  console.log(`${chalk.whiteBright(` The Prime numbers up to ${converToNumber}:`)} ${chalk.yellowBright(primeNumbers)} \n`)
  console.log(`${chalk.whiteBright(` The sum of all prime numbers up to ${converToNumber} is`)} ${chalk.yellowBright(sumPrimeNumbers)} \n`)

}

```

### Explanation

1 `Initialization`: Create an array `isPrime` where all elements are initially `true`, except for indices 0 and 1.

2 `Sieve of Eratosthenes`: Iterate over the numbers starting from 2. If a number is prime, add it to the list of primes and mark all its multiples as non-prime.

3 `Result`: Return the list of prime numbers found up to the number `n`.

## Extra Challenge

 [X] Modify the generatePrimeNumbers function to return all prime numbers up to the given value n.