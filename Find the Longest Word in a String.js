//Find the Longest Word in a String.

function getLength(prev, current) {
    return (prev.length > current.length) ? prev : current;
    //if the length of the previous word is greater then current word,
    //keep the larger/previous word. else, keep the current word.
}

function findLongestWord(str) {
  var word = str.split(" "); //Turns the string into an array with each word
  var find = word.reduce(getLength); //reduce the string to one word
  return find.length; //return the number 
}


findLongestWord("The quick brown fox jumped over the lazy dog");