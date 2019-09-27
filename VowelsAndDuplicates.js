function duplicatesAndVowels(name) {
  //sorting out vowels in a string
  if(name.length>2){
  const vowels = name.match(/[aeiou]/gi);
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
  return (x);
  
}
else{
  return "The string should be of two characters or more"
}
}

console.log(duplicatesAndVowels("hAppy  codIng at andEla"));

module.exports= duplicatesAndVowels;