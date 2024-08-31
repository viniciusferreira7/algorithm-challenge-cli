import { input } from '@inquirer/prompts';
import select from '@inquirer/select';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';

import { canFormAnagrams } from './algorithms/can-form-anagrams';
import { findTheHappyNumbers } from './algorithms/find-the-happy-numbers';
import { canFormPalindrome } from './algorithms/permutable-palindrome-verification';
import { subsequenceVerification } from './algorithms/subsequence-verification';
import { generatePrimeNumbers } from './algorithms/generate-prime-numbers';
import { sleep } from 'bun';

interface AlgorithmParams {
  name: string
  message: string
}

interface Algorithm {
  name: string;
  value: string;
  description?: string
  params?: AlgorithmParams[];
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  execute?: (...args: any[]) => Promise<void>;
  disabled?: boolean;
}

const algorithmList = [
  {
    name: 'Find the Happy Numbers',
    value: 'find_the_happy_numbers',
    params: [
      {
        name: 'value',
        message: 'Enter a number',
      }      
    ],
    execute: findTheHappyNumbers,
  },
  {
    name: 'Permutable Palindrome Verification',
    value: 'permutable_palindrome_verification',
    params: [
      {
        name: 'text',
        message: 'Enter a text',
      }      
    ],
    execute: canFormPalindrome,
  },
  {
    name: 'Anagram Verification',
    value: 'anagram_verification',
    params: [
      {
        name: 'first_text',
        message: 'Enter a first text',
      },
      {
        name: 'second_text',
        message: 'Enter a second text',
      },
    ],
    execute: canFormAnagrams,
  },
  {
    name: 'Subsequence Verification',
    value: 'subsequence_verification',
    params: [
      {
        name: 'first_text',
        message: 'Enter a first text',
      },
      {
        name: 'second_text',
        message: 'Enter a second text',
      },
    ],
    execute: subsequenceVerification,
  },
  {
    name: 'Prime Number Sequence',
    value: 'prime_number_sequence',
    params: [
      {
        name: 'value',
        message: 'Enter a number',
      } 
    ],
    execute: generatePrimeNumbers,
  },
 
] satisfies Algorithm[]

export async function welcome(){
  const rainbowTitle = chalkAnimation.glitch('Welcome to the algorithm CLI \n')

  await sleep(2000)
  rainbowTitle.stop()

}

async function askWhichAlgorithm(){
  console.log(`${chalk.bgBlue('Which you want to test? \n')}`)

  const answer = await select({
    message: 'Select a algorithm',
    choices: algorithmList,
  });

  return handleAnswer(answer);
}

async function handleAnswer(answer: string){
  const findAlgorithm = algorithmList.find(item => item?.value === answer)

  const spinner = createSpinner('Checking choice...').start()
  await sleep(800)

  if(findAlgorithm){
    spinner.success({ text: 'Executing!' })
    await handleInput(findAlgorithm)

  } else {
    spinner.error({ text: 'Not available' })
    process.exit(1)
  }
}

async function handleInput(algorithm: Algorithm){
 if(algorithm.params){
  const params =  await getParams(algorithm.params)


  if(algorithm.execute){
    await algorithm.execute({...params})
  }
 }

}

async function getParams(params: AlgorithmParams[]){
  const arrayOfParams: string[][] = []

  if(params?.length){
    for (const i in params){

      const value = await input({ message:  params[i].message,  })
      const param = Object.values({name:  params[i].name, value})

      arrayOfParams.push(param)
      
    }
    
  }

  return Object.fromEntries(arrayOfParams)
}

await welcome()
await askWhichAlgorithm()
