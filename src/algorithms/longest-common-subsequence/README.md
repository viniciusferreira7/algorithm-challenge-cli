# Challenge: Longest Common Subsequence (LCS)

## Description

The Longest Common Subsequence (LCS) problem is to find the longest subsequence present in both given strings in the same order. A subsequence is a sequence that appears in the same relative order but not necessarily contiguous. For example, "abc", "abg", "bdf", "aeg", "acefg", .. etc are subsequences of "abcdefg".

## Task

Write a function longestCommonSubsequence that takes two strings and returns the length of their longest common subsequence.

## Examples
 ```typescript
Copiar código
console.log(longestCommonSubsequence("ABCBDAB", "BDCAB")); // Output: 4 ("BCAB" is the longest common subsequence)
console.log(longestCommonSubsequence("AGGTAB", "GXTXAYB")); // Output: 4 ("GTAB" is the longest common subsequence)
console.log(longestCommonSubsequence("12341", "341213")); // Output: 3 ("341" is the longest common subsequence)
console.log(longestCommonSubsequence("ABC", "DEF")); // Output: 0 (No common subsequence)
```
## Requirements

**1**. The function should return the length of the longest common subsequence of two given strings.

**2**. The function should handle strings with up to 1000 characters efficiently.

## Hints

- Use dynamic programming to solve the problem efficiently.
- Create a 2D array to store the lengths of LCS of substring pairs.
- Build the solution bottom-up by comparing characters and storing results of subproblems.
  

## Implementation

Here is a code skeleton to get started:

```typescript
console.log('in development')
```

## Explanation

**1.** Dynamic Programming Table: Create a 2D array dp where dp[i][j] will store the length of LCS of str1[0...i-1] and str2[0...j-1].

**2.** Building the Table: Iterate through each character of both strings, and fill the table using the following rules:
If the characters match (str1[i-1] === str2[j-1]), then dp[i][j] = dp[i-1][j-1] + 1.
Otherwise, dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]).

**3.** Result: The length of the longest common subsequence will be found in dp[m][n].
## Challenge Extension

[ ] Modify the function to not only return the length but also the longest common subsequence itself.