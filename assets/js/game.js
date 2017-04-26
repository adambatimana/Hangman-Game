// display wins and losses
  var wins =0;
  var losses = 0;
//number of guesses remaining  start with 15 -= 1
  var maxGuesses = 10;
//

  var words = ["bobafett", "hansolo", "luke", "rey", "leia", "skywalker", "jedi", "sith"];
// create math.random to randomly select words
  var selectWord = words[Math.floor(Math.random() * words.length)];
//array to store guesses
  var answerArray = [];
//selected word from array
  var lettersGuessed = [];

//current word display as "_" inside html of browser
    for (var i = 0; i < selectWord.length; i++) {
      answerArray[i] = "_ ";
// put in a string
        var newWord = answerArray.join(" ");
  $("#currentWord").html(newWord);
}

// press any key to guess letter for word
  document.onkeyup = function(event){
      var userGuess = event.key;
      console.log(userGuess);


// on event.key letter press replace _ with actual letter
      if (userGuess.length > 0){
        for (var i = 0; i < selectWord.length; i++) {
          if(selectWord[i] === userGuess){
            answerArray[i] = userGuess;
            // display selected word as "_" in the DOM
            $("#currentWord").html(answerArray);
            maxGuesses -=1;
          }
        }
      }else if (userGuess.length > 0) {
        for (var i = 0; i < selectWord.length; i++) {
          if(selectWord[i].indexOf(userGuess === -1)){
            lettersGuessed[i] = userGuess;
            $('#lettersAlready').html(lettersGuessed.join(', '));
            maxGuesses -=1;
        }
      }
}
insertHtml();
}

//if letter is guessed and wrong add letter to lettersGuessed array subtract from maxGuesses
//create array of letters already guessed and not allow to replace in guesses
// if you guess all the correct words pop up "YOU WIN!" add to WIN SCORE
function insertHtml() {
  var html =
  "<p>Wins: " + wins + "</p>" +
  "<p>Losses: " + losses + "</p>" +
  "<p>Max Guesses: " + maxGuesses + "</p>";
  $("#win").html(html);

}
