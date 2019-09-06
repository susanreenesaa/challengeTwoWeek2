function duplicatesAndVowels(name) {
  //sorting out vowels in a string
  const vowels = name.match(/[aeiouAEIOU]/gi);
  //   removing duplicate vowels from the string
  const uniqueVowels = [...new Set(vowels)].join("");
  //   getting duplicates from the original string
  const numberOfDuplicates = name
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .match(/(.)\1+/g).length; //it matches the same subsequent letters
  var x = [uniqueVowels, numberOfDuplicates];
  console.log(x);
}
duplicatesAndVowels("happy coding at andela");
