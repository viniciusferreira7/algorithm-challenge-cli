import yargs from 'yargs';
import { hideBin } from "yargs/helpers";
import { findTheHappyNumbers } from './algorithm/find-the-happy-numbers';


const algorithms = [
  'Find the Happy Numbers',
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
    command: 'run <algorithmNumber> <inputNumber>',
    describe: 'Run a specific algorithm with an input number',
    builder: {
      algorithmNumber: {
        describe: 'Number of the algorithm to run',
        type: 'number',
        demandOption: true,
      },
      inputNumber: {
        describe: 'Input number for the algorithm',
        type: 'number',
        demandOption: true,
      }
    },
    handler: (argv) => {
      switch (argv.algorithmNumber) {
        case 1:
          findTheHappyNumbers(argv.inputNumber);
          break;
        default:
          console.log('Invalid algorithm number. Please choose a valid algorithm number (1).');
      }
    }
  })
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .argv;


//TODO: Install biome lint to test