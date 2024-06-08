import { sleep } from 'bun'
import chalk from 'chalk'
import { createSpinner } from 'nanospinner'
import { formatText } from '../../utils/format-text'

interface CanFormAnagrams {
  first_text: string
  second_text: string
}

export async function canFormAnagrams({ first_text, second_text }: CanFormAnagrams){
  const spinner = createSpinner('Checking if the text could be an anagram').start()
  await sleep(1000)

  const firstTextInArray = formatText(first_text).split('')
  const secondTextInArray = formatText(second_text).split('')

  if(firstTextInArray.length !== secondTextInArray.length){
    spinner.error({ text: chalk.redBright('These text cannot be an anagram.') })

    return
  }

  const sameLetter: string[] = []

  for(let i = 0; i <= firstTextInArray.length; i++){
    const letter = secondTextInArray.some((letter) => {
      return firstTextInArray[i] === letter
    })

    if(letter){
      sameLetter.push(firstTextInArray[i])
    }
  }

  const isSameLength = sameLetter.length === secondTextInArray.length && sameLetter.length === firstTextInArray.length

  if(isSameLength){
    spinner.success({ text: chalk.greenBright('Theses text are anagrams of each other.') })

    } else {
      spinner.error({ text: chalk.redBright('These text cannot be an anagram.') })
      }
}