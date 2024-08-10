import { sleep } from 'bun'
import chalk from 'chalk'
import { createSpinner } from 'nanospinner'
import { formatText } from '../../utils/format-text'

interface longestCommonSubsequenceParams {
  first_text: string
  second_text: string
}

export async function longestCommonSubsequence({ first_text, second_text }: longestCommonSubsequenceParams){
  const spinner = createSpinner('Checking if the text could be a sameLetter').start()
  await sleep(1000)

  const firstTextInArray = formatText(first_text).split('')
  const secondTextInArray = formatText(second_text).split('')

  if(!firstTextInArray.length || !secondTextInArray.length){
    spinner.error({ text: chalk.redBright('Text contains special characters or numbers, which are not allowed.These text cannot be an anagram.') })

    return
  }


const subsequence: string[][] = []

const EMPTY = 'EMPTY'

const copyOfSecondTextInArray  = secondTextInArray.map(() => EMPTY)


 firstTextInArray.forEach((firstText, _) => {

  secondTextInArray.forEach((secondText, index) => {
      if(secondText === firstText){
        copyOfSecondTextInArray.splice(index, 1, firstText)
      }
    })

 })

 const removeEmpty = copyOfSecondTextInArray.filter((item) => item !== EMPTY)

 const sequence = removeEmpty.join('')


 if(sequence === firstTextInArray.join('')){
  spinner.success({text: `${chalk.greenBright(`${first_text}`)} is a subsequence of ${chalk.greenBright(`${second_text}`)}`})
} else {
   spinner.error({text: `${chalk.redBright(`${first_text}`)} is not a subsequence of ${chalk.redBright(`${second_text}`)}`})
 }

 //TODO: retorna o comprimento da maior subsequência comum entre elas.

  
}

// "ABCBDAB", "BDCAB"

