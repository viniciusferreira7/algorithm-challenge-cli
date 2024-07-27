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

  const sameLetter: string[] = []

  const subsequence: string[][] = []

  
 firstTextInArray.forEach((firstText, firstTextIndex) => {

   if (firstText[firstTextIndex + 1]){
    const a =  firstText.concat(firstText[firstTextIndex + 1])
    console.log({a}, firstTextIndex + 1)

    subsequence.push([a])
   }

  secondTextInArray.forEach((secondText, _) => {

    if(firstText === secondText) {

        sameLetter.push(secondText)


    }
  })

 })

//  const su

 console.log({sameLetter, subsequence})
  
}