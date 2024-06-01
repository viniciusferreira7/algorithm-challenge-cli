# Challenge: Permutable Palindrome Verification

## Description

A palindrome is a word, phrase, number, or any other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). In this challenge, you need to check whether any permutation of a given string can form a palindrome.

## Task

Write a function `canFormPalindrome` that determines if any permutation of a provided string can form a palindrome.

## Examples

```javascript
console.log(canFormPalindrome("civic")); // true (the word itself is a palindrome)
console.log(canFormPalindrome("ivicc")); // true (permutation "civic" is a palindrome)
console.log(canFormPalindrome("hello")); // false (cannot form a palindrome)
console.log(canFormPalindrome("ãâbb")); // true (permutation "abba" is a palindrome)
```

## Requirements

- The function should return true if any permutation of the string can form a palindrome, otherwise false.
- Consider only alphabetical characters and ignore capitalization.

## Implementation

### Function `canFormPalindrome`

```javascript
import chalk from 'chalk'

function removeAccents(text: string) {
  // biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export function canFormPalindrome(text: string){
  const textWithoutAccents = removeAccents(text)
  const formattedText = (textWithoutAccents.replace(/[^a-zA-Z]/g, ""))
  
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
      console.log(chalk.redBright('❌ This word is not palindrome:', chalk.yellowBright(text)))
    } else {
      console.log(chalk.greenBright('✔️  It`s a palindrome:', chalk.yellowBright(text)))
    }

  } else {
    console.log(chalk.redBright('❌ Invalid parameter'))  
  }

}
```
## Extra Challenge

 - [X] Modify the `canFormPalindrome` function to ignore spaces and punctuation, in addition to considering only alphabetical characters, without differentiation between uppercase and lowercase.
``` ```