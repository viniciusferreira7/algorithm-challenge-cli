export function formatText(text:string) {
  // biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
  const removedAccents = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

  const removedSpecialCharactersAndWhiteSpace = removedAccents.replace(/[^a-zA-Z]/g, "")
  return removedSpecialCharactersAndWhiteSpace.toLowerCase()
}