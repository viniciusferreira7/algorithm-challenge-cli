# Algorithm CLI

## Description
This CLI offers a selection of algorithms that you can list and execute directly from the terminal. Currently, the CLI supports the "Find the Happy Numbers" algorithm.

## Commands

### List Available Algorithms
Displays a list of all available algorithms.

```sh
algorithm list
```

### Expected output:

```sh
List of algorithms:
1 - Find the Happy Numbers
```

### Run Algorithm: Find the Happy Numbers
#### Executes the specified algorithm by passing the corresponding number and its parameters.

```sh
algorithm run 1 <parameters>
```

### Example
#### To list happy numbers up to 2:

```sh
algorithm run 1 2
```

### Expected output:
```sh
Find the Happy Numbers

{ isHappyNumber: true, number: 1, seenNumbers: [ 1 ] }
{ isHappyNumber: false, number: 2, seenNumbers: [ 4, 16, 37, 58, 89, 145, 42, 20 ] }
Happy numbers between 1 and 2: [1]
```

### To list happy numbers up to 11:

```sh
algorithm run 1 11
```


### Expected output:

```sh
Find the Happy Numbers

{ isHappyNumber: true, number: 1, seenNumbers: [ 1 ] }
{ isHappyNumber: false, number: 2, seenNumbers: [ 4, 16, 37, 58, 89, 145, 42, 20 ] }
...
{ isHappyNumber: true, number: 10, seenNumbers: [ 1 ] }
{ isHappyNumber: false, number: 11, seenNumbers: [ 2, 4, 16, 37, 58, 89, 145, 42, 20 ] }
Happy numbers between 1 and 11: [1, 7, 10]

```

## Available Algorithms
Find the Happy Numbers: Finds all happy numbers up to the specified number.
## Options
algorithm run 1 <number>: Runs the "Find the Happy Numbers" algorithm with a single parameter that should be a number.
## Installation
Make sure you have bun installed. Clone this repository and navigate to the project directory. Install the necessary dependencies (if any).

## Usage

To install dependencies:

```bash
bun install
```
Run the commands as described above to list and execute algorithms directly from the terminal.





