import yargs from 'yargs';
import { hideBin } from "yargs/helpers";
import { findTheHappyNumbers } from './algorithm/find-the-happy-numbers';
import { canFormPalindrome } from './algorithm/permutable-palindrome-verification';
import { canFormAnagrams } from './algorithm/can-form-anagrams';


const algorithms = [
  'Find the Happy Numbers',
  'Permutable Palindrome Verification',
  'Anagram Verification',
]

yargs(hideBin(process.argv))
  .command({
    command: 'list',
    describe: 'Displays a list of algorithms',
    handler: () => {
      console.log('list of algorithms:');
      algorithms.forEach((algorithm, index) => {
        console.log(`${index + 1} - ${algorithm}`);
      });
    }
  })
  .help()
  .argv;

yargs(hideBin(process.argv))
  .command({
    command: 'run <algorithmNumber> <input>',
    describe: 'Run a specific algorithm with an input',
    builder: {
      algorithmNumber: {
        describe: 'Number of the algorithm to run',
        type: 'number',
        demandOption: true,
      },
      input: {
        describe: 'Input for the algorithm',
        type: 'string',
        demandOption: true,
      }
    },
    handler: (argv) => {
      switch (argv.algorithmNumber) {
        case 1:
          findTheHappyNumbers(argv.input);
          break;
        case 2:
          canFormPalindrome(argv.input);
          break;
        case 3:
          canFormAnagrams(argv.input);
          break;
        default:
          console.log('Invalid algorithm number. Please choose a valid algorithm number (1).');
      }
    }
  })
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .argv;
