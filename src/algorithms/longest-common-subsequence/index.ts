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

const DIFF_LETTER = 'DIFFERENT_LETTER'

const copyOfSecondTextInArray  = secondTextInArray.map(() => DIFF_LETTER)


 firstTextInArray.forEach((firstText, firstTextIndex) => {

  secondTextInArray.forEach((a, index) => {
      if(a === firstText){
        copyOfSecondTextInArray.splice(index, 1, firstText)
      }
    })

 })

 //TODO://Segue essa logica de "aeg" é uma subsequência de "abcdefg", mas não necessariamente contígua ✔️
 //TODO: Refatorar a função
 //TODO: retorna o comprimento da maior subsequência comum entre elas.

 console.log(copyOfSecondTextInArray.filter((item) => item !== DIFF_LETTER).join('') === firstTextInArray.join(''))

  
}

// "ABCBDAB", "BDCAB"

