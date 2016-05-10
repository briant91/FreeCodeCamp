function titleCase(str) {
  
  var splitter = str.split(" "); //Splits the string into arrays.
  var newArray;
  
  for (i = 0; i < splitter.length; i++){ //i starts are array 0; for every array less than
                                         // the total length of the array, repeat the loop.
    
   newArray = splitter[i].substring(1).toLowerCase(); //Miss out the first letter of the substring of 
                                                      // each existing array, change all to lowercase
                                                      // and assign to new array.
    
   splitter[i] = splitter[i][0].toUpperCase() + newArray; //Keep only the first letter of each array
                                                          // and change this letter to uppercase, then
                                                          // add the uppercase letter to the rest of
                                                          // the lowercase strings in newArray.
  }
  splitter = splitter.join(" ");  //Turns the array into a single string.
  return splitter; // returns the single string.
}

titleCase("I'm a little tea pot");