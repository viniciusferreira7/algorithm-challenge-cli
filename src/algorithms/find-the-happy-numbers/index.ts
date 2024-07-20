import { sleep } from 'bun';
import chalk from 'chalk'
import { createSpinner } from 'nanospinner';

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

export async function findTheHappyNumbers({ value } :{ value: number }) {
  const spinner = createSpinner(`Checking if and ${value} is a happy number...`).start()
  await sleep(1000)

  const isNumber = !!Number(value)

	if (!isNumber) {
		spinner.error({ text: chalk.redBright(`The value provided is not a valid option: ${chalk.yellow(value)} \n`) });

		return;
	}


 const { isHappyNumber, seenNumbers } = findHappyNumber(value)
 const { happyNumbers } = findManyHappyNumbers(value)

if(isHappyNumber){
  spinner.success({ text: chalk.greenBright('The value provided is happy a number! \n') })
} else {
  spinner.error({ text: chalk.redBright('The value provided is not a happy number! \n') })

}
 console.log(`${chalk.whiteBright('Numbers seen:')} ${chalk.yellowBright(seenNumbers)} \n`)
 console.log(chalk.whiteBright(`happy numbers between ${chalk.yellowBright(1)} and ${chalk.yellowBright(value)}: ${chalk.yellowBright(happyNumbers)} \n`))
}



