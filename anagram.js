export function isAnagram(string, anagram) {
    let result = false;
    if (string.length === anagram.length) {
      const letterOccurrences = getLetterOccurrences(string);
      result = isAnagramOccurrences(letterOccurrences, anagram);
    }
  
    return result;
  }
    const getLetterOccurrences = (string) => 
        Array.from(string).reduce((acc, cur) => (acc[cur] = (acc[cur] || 0) + 1, acc), {});
  
  function isAnagramOccurrences(letterOccurrences, anagram) {
    const res = Array.from(anagram).every(
      (letter) => --letterOccurrences[letter] >= 0
    );
    return res;
  }