# Subsequence Verification Challenge

## Description
A **subsequence** is a sequence that can be derived from another sequence by removing some or no elements without changing the order of the remaining elements. In this challenge, you need to check if a string is a subsequence of another string.

## Task
Write a function `subsequenceVerification` that determines if a string (`subseq`) is a subsequence of another string (`mainStr`).

## Examples
```typescript
console.log(subsequenceVerification("abc", "ahbgdc")); // true (abc is a subsequence of ahbgdc)
console.log(subsequenceVerification("axc", "ahbgdc")); // false (axc is not a subsequence of ahbgdc)
console.log(subsequenceVerification("ace", "abcde")); // true (ace is a subsequence of abcde)
console.log(subsequenceVerification("aec", "abcde")); // false (aec is not a subsequence of abcde)
```
## Requirements
1. The function should return true if subseq is a subsequence of mainStr, otherwise false.
2. Consider only alphabetical characters.

## Tips
 - Use two pointers to iterate through the strings. One pointer for subseq and another for mainStr.
 - If the current character of subseq matches the current character of mainStr, move both pointers to the next position.
 - If they don't match, move only the mainStr pointer.
 - If the subseq pointer reaches the end of the string, then subseq is a subsequence of mainStr.

 ## Implementation

 ### Function `subsequenceVerification`

 ```typescript

const here = 'empty'

 ```

 ## Explanation
 1. `Pointers`: Use two pointers, one to iterate through subseq and another for mainStr.

 2. `Comparison`: Compare the characters of subseq and mainStr. If they match, advance both pointers.

 3. `Final Result`: If the subseq pointer reaches the end of the string, then subseq is a subsequence of mainStr.

## Extra Challenge
[ ] Modify the isSubsequence function to be case-sensitive, meaning A and a should be considered different.