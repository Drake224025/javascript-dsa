function isPalindrome(text) {
  // 1. Clean the input text (convert to lowercase, remove non-alphanumeric characters)
  const cleanedText = text.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // 2. Set pointers at the beginning and end of the cleaned text
  let start = 0;
  let end = cleanedText.length - 1;

  // 3. Iterate while the start pointer is less than the end pointer
  while (start < end) {
    // 4. Compare characters at the current positions of the pointers (case-insensitive)
    if (cleanedText[start] !== cleanedText[end]) {
      return false; // Not a palindrome if characters don't match
    }
    // 5. Move the start pointer one position to the right
    start++;
    // 6. Move the end pointer one position to the left
    end--;
  }

  // 7. If the loop completes, all characters matched, it's a palindrome
  return true;
}
