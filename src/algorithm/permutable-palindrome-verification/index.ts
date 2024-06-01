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