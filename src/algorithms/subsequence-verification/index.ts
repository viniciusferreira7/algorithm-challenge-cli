import { sleep } from 'bun'
import chalk from 'chalk'
import { createSpinner } from 'nanospinner'
import { formatText } from '../../utils/format-text'

interface SubsequenceVerification {
  first_text: string
  second_text: string
}

export async function subsequenceVerification({ first_text, second_text }: SubsequenceVerification){
  const spinner = createSpinner('Checking if the text could be a subsequence').start()
  await sleep(1000)

  const firstTextInArray = formatText(first_text).split('')
  const secondTextInArray = formatText(second_text).split('')

  if(!firstTextInArray.length || !secondTextInArray.length){
    spinner.error({ text: chalk.redBright('Text contains special characters or numbers, which are not allowed.These text cannot be an anagram.') })

    return
  }

  if(firstTextInArray.length > secondTextInArray.length){
    spinner.error({ text: chalk.redBright('The first text supplied must be equal to or less than the second text.') })

    return
  }

  const DIFF_LETTER = 'DIFF_LETTER'

  const letters: string[] = []

  // biome-ignore lint/complexity/noForEach: <explanation>
  secondTextInArray.forEach((second) => {
    const sameLetter = firstTextInArray.find(first => first === second)

    if(sameLetter){
      letters.push(sameLetter)

    } else {
      letters.push(DIFF_LETTER)
    }
  })

  const removedDiffLetters = letters.filter(letter => letter !== DIFF_LETTER).join()

  const isSubsequence = removedDiffLetters === firstTextInArray.join()

  if(isSubsequence){
    spinner.success({ text: chalk.greenBright(`"${first_text}" can be a subsequence from "${second_text}"`) })

  } else {
    spinner.error({ text: chalk.redBright(`"${first_text}" cannot be a subsequence from "${second_text}"`)})

  }


}