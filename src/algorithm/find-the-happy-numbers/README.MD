# Challenge: Find Happy Numbers

## Description

A happy number is defined by a process where you take a number, replace it with the sum of the squares of its digits, and repeat the process until the number becomes 1 (where it will remain), or it repeats in a cycle that does not include 1. Those numbers for which this process ends in 1 are called happy numbers.

For example:

### 19 is a happy number:

1² + 9² = 1 + 81 = 82  
8² + 2² = 64 + 4 = 68  
6² + 8² = 36 + 64 = 100  
1² + 0² + 0² = 1

### 20 is not a happy number:

2² + 0² = 4  
4² = 16  
1² + 6² = 1 + 36 = 37  
3² + 7² = 9 + 49 = 58  
5² + 8² = 25 + 64 = 89  
8² + 9² = 64 + 81 = 145  
1² + 4² + 5² = 1 + 16 + 25 = 42  
4² + 2² = 16 + 4 = 20 (infinite loop)

## Task

Create a JavaScript function called `findTheHappyNumbers` that determines whether a number is happy or not. Then, write a function called `findManyHappyNumbers` that finds all happy numbers from 1 up to a given number `n` provided as input.

## Implementation

### Function `findTheHappyNumbers`

```javascript
import chalk from 'chalk'

function splitInNumber(value: number){
  const convertNumberToString = value.toString();

  return convertNumberToString.split("").map(Number)
}

function findHappyNumber(value: number){
  let happyNumber: number | null = null
  let notHappyNumber: number | null = null
  const seenNumbers = new Set<number>()
  
  let numbers = splitInNumber(value)

  while(!happyNumber || !notHappyNumber){
    const reduce = numbers.reduce((acc, sum) => {
      return acc + sum ** 2
    }, 0);
    
    const FINISH_CYCLE = reduce === 1

    if(FINISH_CYCLE){
      happyNumber = value;
      break
    }

    const INFINITE_CYCLE = seenNumbers.has(reduce)

    if(INFINITE_CYCLE){
      seenNumbers.add(reduce)

      notHappyNumber = value
      break
    }

    seenNumbers.add(reduce)

    numbers = splitInNumber(reduce)

  }

  const isHappyNumber = !!happyNumber
  
  return { isHappyNumber, number: value, seenNumbers: Array.from(seenNumbers)}

}

function findManyHappyNumbers(value: number){
  const numbers= Array.from({length: value}, ((_, index) => index + 1))

 const happyNumbers = numbers.filter(numb => {
  const result = findHappyNumber(numb)

    return result.isHappyNumber
  })

  return { happyNumbers }
}

export function findTheHappyNumbers(value: number) {
  const isNumber = !!Number(value)

	if (!isNumber) {
		console.log(chalk.redBright(`❌ The value provided is not a valid option: ${chalk.yellow(value)}`));

		return;
	}

 const { isHappyNumber, number, seenNumbers } = findHappyNumber(value)
 const { happyNumbers } = findManyHappyNumbers(value)

if(isHappyNumber){
  console.log(chalk.greenBright('🚀 The value provided is happy number!'))
  console.log(chalk.greenBright())
} else {
  console.log(chalk.redBright('❌ The value provided is not happy number!'))

}

 console.log(`${chalk.cyanBright('Numbers seen:')} ${chalk.yellowBright(seenNumbers)}`)
 console.log(chalk.greenBright(`happy numbers between ${chalk.yellowBright(1)} and ${chalk.yellowBright(value)}: ${chalk.yellowBright(happyNumbers)}`))
}









