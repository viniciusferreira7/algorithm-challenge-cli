import { input } from '@inquirer/prompts';
import select from '@inquirer/select';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';
import { canFormAnagrams } from './algorithm/can-form-anagrams';
import { findTheHappyNumbers } from './algorithm/find-the-happy-numbers';
import { canFormPalindrome } from './algorithm/permutable-palindrome-verification';
import { sleep } from './utils/sleep';

interface AlgorithmParams {
  message: string;
  name: string
}

interface Algorithm {
  name: string;
  value: string;
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
        message: 'Enter a number',
        name: 'value'
      }      
    ],
    execute: findTheHappyNumbers,
  },
  {
    name: 'Permutable Palindrome Verification',
    value: 'permutable_palindrome_verification',
    // execute: canFormPalindrome,
  },
  {
    name: 'Anagram Verification ⚠️',
    value: 'anagram_verification',
    // execute: canFormAnagrams,
    disabled: true
  },
] satisfies Algorithm[]

let algorithm: string



export async function welcome(){
  const rainbowTitle = chalkAnimation.glitch('Welcome to the algorithm CLI \n')

  await sleep()
  rainbowTitle.stop()

}

async function askWhichAlgorithm(){
  console.log(`${chalk.bgBlue('Which you want to test? \n')}`)

  const answer = await select({
    message: 'Select a algorithm manager',
    choices: algorithmList,
  });

  algorithm = answer

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
  const arrayOfParams: string[] = []

  if(algorithm.params?.length){
    for (const i in algorithm.params){

      const value = await input({ message:  algorithm.params[i].message,  })
      const param = Object.values({name:  algorithm.params[i].name, value})

      arrayOfParams.push(...param)
      
    }

    const params = Object.fromEntries([arrayOfParams])

    if(algorithm.execute){
      await algorithm.execute({...params})
    }

  }

}

await welcome()
await askWhichAlgorithm()
