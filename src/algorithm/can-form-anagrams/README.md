# Challenge: Anagram Verification

## Description

An anagram is a word or phrase formed by rearranging the letters of another word or phrase. For example, "listen" is an anagram of "silent".

In this challenge, you need to check if two given strings are anagrams of each other.

## Task

Write a function `canFormAnagrams` that determines if two provided strings are anagrams of each other.

## Examples

```javascript
console.log(canFormAnagrams("listen", "silent")); // true
console.log(canFormAnagrams("hello", "world")); // false
console.log(canFormAnagrams("debit card", "bad credit")); // true
```

## Requirements

- The function should return true if the two strings are anagrams of each other, otherwise, false.
- Consider only alphabetical letters and ignore spaces, punctuation, and case sensitivity.

## Tips

To check if two strings are anagrams, you can count the occurrence of each letter in both strings and compare the counters.

## Implementation

Here's a code skeleton to get started:

```javascript
function canFormAnagrams(str1, str2) {
  // Implement your logic here
}

// Testing the function
console.log(canFormAnagrams("listen", "silent")); // true
console.log(canFormAnagrams("hello", "world")); // false
console.log(canFormAnagrams("debit card", "bad credit")); // true
```

## Explanation

Letter Counting: You need to count the occurrence of each letter in both strings.

Counter Comparison: After counting the letters in both strings, you need to compare the counters to determine if the strings are anagrams of each other.

## Extra Challenge

- [ ] Modify the `canFormAnagrams` function to consider accents and special characters, ensuring that the strings can be anagrams regardless of the presence of these characters.
``` ```
