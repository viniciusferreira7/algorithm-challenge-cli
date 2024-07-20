import { sleep } from 'bun'
import chalk from 'chalk'
import { createSpinner } from 'nanospinner'
import { formatText } from '../../utils/format-text'

interface LongestCommonSubsequenceParams {
  first_text: string
  second_text: string
}

export async function longestCommonSubsequence({ first_text, second_text }: LongestCommonSubsequenceParams){
  const spinner = createSpinner('Checking if the text could be a subsequence').start()
  await sleep(1000)

  const firstTextInArray = formatText(first_text).split('')
  const secondTextInArray = formatText(second_text).split('')

  if(!firstTextInArray.length || !secondTextInArray.length){
    spinner.error({ text: chalk.redBright('Text contains special characters or numbers, which are not allowed.These text cannot be an anagram.') })

    return
  }

 

}