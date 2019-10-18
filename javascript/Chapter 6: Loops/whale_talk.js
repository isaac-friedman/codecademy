let input = "This would come from a form input and any remotely realistic application. Note that there is a good distribution of vowels and consonants in this string.";

const vowels = ['a', 'e', 'i', 'o', 'u'];

output = [];

//cast to array to make our lives easier
[...input].forEach(function(letter) {
    if (vowels.includes(letter)) {
      output.push(letter + letter);
  }
});
whale = output.join('');
console.log(whale);
