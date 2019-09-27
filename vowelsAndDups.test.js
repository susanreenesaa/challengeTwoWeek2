const duplicatesAndVowels = require('./VowelsAndDuplicates');

test('returns an error message if string is less than two characters', () => {
    expect(duplicatesAndVowels('s')).toBe("The string should be of two characters or more");
});

test('returns vowels and the number of duplicates', () => {
    expect(duplicatesAndVowels("hAppy  codIng at andEla")).toStrictEqual([ 'AoIaE', 5 ]);
});
