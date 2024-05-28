function splitInNumber(value: number){
  const convertNumberToString = value.toString();

  return convertNumberToString.split("").map(Number)
}

function findHappyNumber(value: number){
  let happyNumber: number | null = null
  let notHappyNumber: number | null = null
  const seenNumbers = new Set<number>()
  
  let numbers = splitInNumber(value)

  while(!happyNumber || !notHappyNumber){
    const reduce = numbers.reduce((acc, sum) => {
      return acc + sum ** 2
    }, 0);
    
    const FINISH_CYCLE = reduce === 1

    if(FINISH_CYCLE){
      happyNumber = value;
      break
    }

    const INFINITE_CYCLE = seenNumbers.has(reduce)

    if(INFINITE_CYCLE){
      seenNumbers.add(reduce)

      notHappyNumber = value
      break
    }

    seenNumbers.add(reduce)

    numbers = splitInNumber(reduce)

  }

  const isHappyNumber = !!happyNumber
  
  return { isHappyNumber, number: value, seenNumbers: Array.from(seenNumbers)}

}

function findManyHappyNumbers(value: number){
  const numbers= Array.from({length: value}, ((_, index) => index + 1))

 const happyNumbers = numbers.filter(numb => {
  const result = findHappyNumber(numb)

    return result.isHappyNumber
  })

  return { happyNumbers }
}

export function findTheHappyNumbers(value: number) {
	if (typeof value !== "number" || !value) {
		console.log(`The value provided is not a valid option: ${value}`);

		return;
	}

 const { isHappyNumber, number, seenNumbers } = findHappyNumber(value)
 const { happyNumbers } = findManyHappyNumbers(value)

 console.log({isHappyNumber, number, seenNumbers,})
 console.log(`happy numbers between 1 and ${value}`, happyNumbers)
}



