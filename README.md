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
- Subsequence Verification
- Prime Number Sequence
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
- Subsequence Verification
- Prime Number Sequence
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

#### [seem more about it](https://github.com/viniciusferreira7/algorithm-challenge-cli/tree/main/src/algorithm/find-the-happy-numbers)

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

#### [seem more about it](https://github.com/viniciusferreira7/algorithm-challenge-cli/tree/main/src/algorithm/permutable-palindrome-verification)

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
- Subsequence Verification
- Prime Number Sequence
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

###  Can form anagram `@54-` and `456`:

```sh
? Select a algorithm Anagram Verification
✔ Executing!
? Enter a first text @54-
? Enter a second text 456
```

### Expected output:

```sh
✖ Text contains special characters or numbers, which are not allowed.These text cannot be an anagram.
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

#### [seem more about it](https://github.com/viniciusferreira7/algorithm-challenge-cli/tree/main/src/algorithm/can-form-anagrams)

# Subsequence Verification
## Enter a number.

```sh
Welcome to the algorithm CLI

Which you want to test? 

? Select a algorithm
  Find the Happy Numbers
  Permutable Palindrome Verification
  Anagram Verification
❯ Subsequence Verification
- Prime Number Sequence
```

### Example
#### `abc` can be a subsequence from `ahbgdc`:

```sh
? Select a algorithm Anagram Verification
✔ Executing!
? Enter a first text abc
? Enter a second text ahbgdc
```

### Expected output:
```sh
✔ "abc" can be a subsequence from "ahbgdc"
```

### `axc` can be a subsequence from `ahbgdc`:

```sh
? Select a algorithm Anagram Verification
✔ Executing!
? Enter a first text axc
? Enter a second text ahbgdc
```

### Expected output:

```sh
✖ "axc" cannot be a subsequence from "ahbgdc"
```

### `acE` can be a subsequence from `abcde`:

```sh
? Select a algorithm Anagram Verification
✔ Executing!
? Enter a first text acE
? Enter a second text abcde
```

### Expected output:

```sh
✖ "acE" cannot be a subsequence from "abcde"
```

#### [seem more about it](https://github.com/viniciusferreira7/algorithm-challenge-cli/tree/main/src/algorithms/subsequence-verification)

# Prime Number Sequence
## Enter a number.

```sh
Welcome to the algorithm CLI

Which you want to test? 

? Select a algorithm
  Find the Happy Numbers
  Permutable Palindrome Verification
  Anagram Verification
  Subsequence Verification
❯ Prime Number Sequence
```

### Example
#### `30` is not a prime number:

```sh
? Select a algorithm Anagram Verification
✔ Executing!
? Enter a number 30.
```

### Expected output:
```sh
✖ 30 is not a prime a number!

 The Prime numbers up to 30: 2,3,5,7,11,13,17,19,23,29 

 The sum of all prime numbers up to 30 is 129
```

#### `37` is a prime number:

```sh
? Select a algorithm Anagram Verification
✔ Executing!
? Enter a number 37.
```

### Expected output:
```sh
✔ 37 is a prime a number!

 The Prime numbers up to 37: 2,3,5,7,11,13,17,19,23,29,31,37 

 The sum of all prime numbers up to 37 is 197
```


#### `120` is not a prime number:

```sh
? Select a algorithm Anagram Verification
✔ Executing!
? Enter a number 120.
```

### Expected output:
```sh
✖ 120 is not a prime a number!

 The Prime numbers up to 120: 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113

 The sum of all prime numbers up to 120 is 1593
```

#### [seem more about it](https://github.com/viniciusferreira7/algorithm-challenge-cli/tree/main/src/algorithms/generate-prime-numbers)





# Available Algorithms
- Find the Happy Numbers: Finds all happy numbers up to the specified number.
- Permutable Palindrome Verification: can form a palindrome.
- Anagram Verification: can form an anagram.
- Subsequence Verification: is a sequence that can be derived from another sequence by removing some or no elements.
- Prime Number Sequence: Prime numbers are numbers greater than 1 that can only be divided by 1 and themselves. In this challenge, you need to generate a sequence of prime numbers up to a given value.

