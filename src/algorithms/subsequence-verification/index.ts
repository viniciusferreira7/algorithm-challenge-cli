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

  let sameNumberOfLetter = 0
  let diffNumberOfLetter = 0

  while( sameNumberOfLetter < firstTextInArray.length ||  diffNumberOfLetter < secondTextInArray.length){
    if(firstTextInArray[sameNumberOfLetter] === secondTextInArray[diffNumberOfLetter]){
      sameNumberOfLetter++
  }

  diffNumberOfLetter++
}

  if(sameNumberOfLetter === firstTextInArray.length){
    spinner.success({ text: chalk.greenBright(`"${first_text}" can be a subsequence from "${second_text}"`) })

  } else {
    spinner.error({ text: chalk.redBright(`"${first_text}" cannot be a subsequence from "${second_text}"`)})

  }

}