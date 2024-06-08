# Algorithm CLI - ⚠️ in development

## Description
This CLI offers a selection of algorithms that you can list and execute directly from the terminal. Currently, the CLI supports the "Find the Happy Numbers" algorithm.

## Installation
Make sure you have bun installed. Clone this repository and navigate to the project directory. Install the necessary dependencies (if any).

## Usage

To install dependencies:

```bash
bun install
```
Run the commands as described above to list and execute algorithms directly from the terminal.


## Commands

### Start
Displays a list of all available algorithms.

```sh
bun start
```

### Expected output:

```sh
Welcome to the algorithm CLI

Which you want to test? 

? Select a algorithm (Use arrow keys)
❯ Find the Happy Numbers
  Permutable Palindrome Verification
- Anagram Verification
```

### Run Algorithm: 
# Find the Happy Numbers
## Selects find the Happy Numbers algorithm.

```sh
Welcome to the algorithm CLI

Which you want to test? 

? Select a algorithm (Use arrow keys)
❯ Find the Happy Numbers
  Permutable Palindrome Verification
- Anagram Verification
```

### Example
#### To list happy numbers up to `19`:

```sh
? Select a package Find the Happy Numbers
✔ Executing!
? Enter a number 19
```

### Expected output:
```sh
✔ The value provided is happy a number!

Numbers seen: 82,68,100

happy numbers between 1 and 19: 1,7,10,13,19
```

### To list happy numbers up to `45`:

```sh
? Select a package Find the Happy Numbers
✔ Executing!
? Enter a number 45
```


### Expected output:

```sh
✖ The value provided is not a happy number!

Numbers seen: 41,17,50,25,29,85,89,145,42,20,4,16,37,58

happy numbers between 1 and 45: 1,7,10,13,19,23,28,31,32,44
```

### To list happy numbers up to `test`:

```sh
? Select a package Find the Happy Numbers
✔ Executing!
? Enter a number test
```


### Expected output:

```sh
✖ The value provided is not a valid option: test
```

### Run Algorithm: 
# Permutable Palindrome Verification
##  Selects permutable Palindrome Verification.

```sh
Welcome t  the algorithm CLI

Which you want to test? 

? Select a algorithm
  Find the Happy Numbers
❯ Permutable Palindrome Verification
- Anagram Verification
```

### Example
#### Verify if `civic` is a palindrome:

```sh
? Select a algorithm Permutable Palindrome Verification
✔ Executing!
? Enter a text civic
```

### Expected output:
```sh
✔ It`s a palindrome: civic
```

### Verify if `hello` is a palindrome:

```sh
algorithm run 2 hello
```


### Expected output:

```sh
✖ This text is not palindrome: hello
```

### Verify if `145` is a palindrome:

```sh
✖ Invalid parameter
```


### Expected output:

```sh
❌ Invalid parameter
```

### Run Algorithm: 
# Anagram Verification
## Selects anagram Verification algorithm.

```sh
Welcome to the algorithm CLI

Which you want to test? 

? Select a algorithm
  Find the Happy Numbers
  Permutable Palindrome Verification
❯ Anagram Verification
```

### Example
#### Can form anagram `listen` and `silent`:

```sh
? Select a algorithm Anagram Verification
✔ Executing!
? Enter a first text silent
? Enter a second text listen
```

### Expected output:
```sh
✔ Theses text are anagrams of each other.
```

###  Can form anagram `não PoSsô` and `noa ossop`:

```sh
? Select a algorithm Anagram Verification
✔ Executing!
? Enter a first text não PoSsô
? Enter a second text noa ossop
```

### Expected output:

```sh
✔ Theses text are anagrams of each other.
```

## Available Algorithms
- Find the Happy Numbers: Finds all happy numbers up to the specified number.
- Permutable Palindrome Verification: can form a palindrome.
- Anagram Verification: can form an anagram 


