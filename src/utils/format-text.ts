interface FormatTextOptions {
  lowercase: boolean
}

export function formatText(text: string, options?: FormatTextOptions) {
  // biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
  const removedAccents = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

  const removedSpecialCharactersAndWhiteSpace = removedAccents.replace(/[^a-zA-Z]/g, "")

  if(options?.lowercase){
    return removedSpecialCharactersAndWhiteSpace.toLowerCase()
  }
  
  return removedSpecialCharactersAndWhiteSpace
}