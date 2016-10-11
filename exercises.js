// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(no1, no2){
    "use strict";
    if(no1 > no2) {
      return no1;
    } else {
      return no2;
    }
}
console.assert(max(5, 1) == 5);
console.assert(max(6, 8.5) == 8.5);

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    "use strict";
    if(num1 > num2) {
      var larger = num1;
    }
    else{
      var larger = num2;
    }
    if(larger > num3) {
      return larger;
    }
    else{
      return num3;
    }
}

console.assert(maxOfThree(1, 5, 27) == 27);
console.assert(maxOfThree(0.4, 18, 02) == 18);
console.assert(maxOfThree(22, 8, .61) == 22);

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    var letter = char.toLowerCase();
    return 'aeiouy'.indexOf(letter) !== -1;
}

console.assert(isVowel('a'));
console.assert(!isVowel('b'));

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var newPhrase = "";
    for(var i=0; i < phrase.length; i++){
      var char = phrase[i];
      if(isVowel(char) || char == " "){
        newPhrase += char;
      }
      else {
        newPhrase += char + "o" + char;
      }
    }

    return newPhrase;
}

console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon");

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
    "use strict";
    var sum = 0;

    for(var i=0; i < array.length; i++){
      var number = array[i];
      sum += number;
    }

    return sum;
}

function multiply(array){
    "use strict";
    var product = array[0];

    for(var i=1; i < array.length; i++){
      var number = array[i];
      product *= number;
    }

    return product;
}

console.assert(sum([1,2,3,4]) == 10);
console.assert(multiply([1,2,3,4]) == 24);

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    "use strict";

    return string.split("").reverse().join("");
}

console.assert(reverse("jag testar") == ("ratset gaj"))

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    var lengthOfLongestWord = 0;
    for(var i=0; i < words.length; i++){
      var word = words[i];
      if(word.length > lengthOfLongestWord){
        lengthOfLongestWord = word.length;
      }
    }

    return lengthOfLongestWord;
}

console.assert(findLongestWord(['a', 'the']) === 3);

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, maxLength){
    "use strict";
    var listOfLongWords = [];

    for(var i=0; i < words.length; i++){
      var word = words[i];
      if(word.length > maxLength){
        listOfLongWords.push(word)
      }
    }

    return listOfLongWords;
}
var result = (filterLongWords(['a', 'the', 'be'], 2));

console.assert(result.length === 1);
console.assert(result[0] === 'the');

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    var freq = {};
    for (var i = 0; i < string.length; i++){
      var char = string[i];
      if (freq[char]){
        freq[char] = (freq[char] + 1)
      } else {
        freq[char = 1]
      }
    }
    return freq;

    console.assert(freq.a == 7);
};

charFreq("abbabcbdbabdbdbabababcbcbab");
var frequency = charFreq("abbabcbdbabdbdbabababcbcbab");
