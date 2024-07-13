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