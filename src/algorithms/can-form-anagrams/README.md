# Challenge: Anagram Verification

## Description

An anagram is a word or phrase formed by rearranging the letters of another word or phrase. For example, "listen" is an anagram of "silent".

In this challenge, you need to check if two given strings are anagrams of each other.

## Task

Write a function `canFormAnagrams` that determines if two provided strings are anagrams of each other.

## Examples

 ```typescript
console.log(canFormAnagrams("listen", "silent")); // true
console.log(canFormAnagrams("hello", "world")); // false
console.log(canFormAnagrams("debit card", "bad credit")); // true
```

## Requirements

- The function should return true if the two strings are anagrams of each other, otherwise, false.
- Consider only alphabetical letters and ignore spaces, punctuation, and case sensitivity.

## Tips

To check if two strings are anagrams, you can count the occurrence of each letter in both strings and compare the counters.

## Implementation

Here's a code skeleton to get started:

```typescript
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

  if(!firstTextInArray.length || !secondTextInArray.length){
    spinner.error({ text: chalk.redBright('Text contains special characters or numbers, which are not allowed.These text cannot be an anagram.') })

    return
  }

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
```

## Explanation

Letter Counting: You need to count the occurrence of each letter in both strings.

Counter Comparison: After counting the letters in both strings, you need to compare the counters to determine if the strings are anagrams of each other.

## Extra Challenge

- [X] Modify the `canFormAnagrams` function to consider accents and special characters, ensuring that the strings can be anagrams regardless of the presence of these characters.
``` ```
