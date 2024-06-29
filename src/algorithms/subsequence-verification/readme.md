# Subsequence Verification Challenge

## Description
A **subsequence** is a sequence that can be derived from another sequence by removing some or no elements without changing the order of the remaining elements. In this challenge, you need to check if a string is a subsequence of another string.

## Task
Write a function `subsequenceVerification` that determines if a string (`subseq`) is a subsequence of another string (`mainStr`).

## Examples
```typescript
console.log(subsequenceVerification("abc", "ahbgdc")); // true (abc is a subsequence of ahbgdc)
console.log(subsequenceVerification("axc", "ahbgdc")); // false (axc is not a subsequence of ahbgdc)
console.log(subsequenceVerification("ace", "abcde")); // true (ace is a subsequence of abcde)
console.log(subsequenceVerification("aec", "abcde")); // false (aec is not a subsequence of abcde)
```
## Requirements
1. The function should return true if subseq is a subsequence of mainStr, otherwise false.
2. Consider only alphabetical characters.

## Tips
 - Use two pointers to iterate through the strings. One pointer for subseq and another for mainStr.
 - If the current character of subseq matches the current character of mainStr, move both pointers to the next position.
 - If they don't match, move only the mainStr pointer.
 - If the subseq pointer reaches the end of the string, then subseq is a subsequence of mainStr.

 ## Implementation

 ### Function `subsequenceVerification`

 ```typescript

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

 ```

 ## Explanation
 1. `Pointers`: Use two pointers, one to iterate through subseq and another for mainStr.

 2. `Comparison`: Compare the characters of subseq and mainStr. If they match, advance both pointers.

 3. `Final Result`: If the subseq pointer reaches the end of the string, then subseq is a subsequence of mainStr.

## Extra Challenge
[X] Modify the isSubsequence function to be case-sensitive, meaning A and a should be considered different.