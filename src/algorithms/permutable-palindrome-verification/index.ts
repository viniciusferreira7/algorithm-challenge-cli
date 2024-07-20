import chalk from 'chalk'
import { createSpinner } from 'nanospinner'
import { formatText } from '../../utils/format-text'
import { sleep } from 'bun'

export async function canFormPalindrome({ text }: {text: string}){
  const spinner = createSpinner('checking if the information could be a palindrome...').start()
  await sleep(1000)

  const formattedText = formatText(text)
  
  if(formattedText.length >= 1){
    const transformedIntoObject  = Object.fromEntries(formattedText.split('').map((letter => [letter, 0])))

    for(const letter of formattedText){
      const value = transformedIntoObject[letter]

      transformedIntoObject[letter] = value + 1
    }

    let oddCount = 0

    for(const letter in transformedIntoObject){
      const value = transformedIntoObject[letter]
      if(value % 2 !== 0){
        oddCount += 1
      }
    }

    if(oddCount > 1){
      spinner.error({ text: `${chalk.redBright('This text is not palindrome:', chalk.yellowBright(text))}` })
    } else {
      spinner.success({ text: `${chalk.greenBright('It`s a palindrome:', chalk.yellowBright(text))}`})
    }

  } else {
    spinner.error({ text: chalk.redBright('Invalid parameter')})  
  }

}