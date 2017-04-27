//***************************** SET UP ****************************************
// display wins and losses
  var wins =0;
  var losses = 0;
//number of guesses remaining  start with 15 -= 1
  var maxGuesses = 10;
//array to store correct guesses
    var answerArray = [];
//selected word from array of wrong guessed letters
    var lettersGuessed = [];
//set up array of words to be used
    var words = ["bobafett", "hansolo", "luke", "rey", "leia", "skywalker", "jedi", "sith"];
// create math.random to randomly select words
    var selectWord = words[Math.floor(Math.random() * words.length)];

//***************************** FUNCTIONS ****************************************
//current word display as "_" inside html of #currentWord
  function randomWord(){
    for (var i = 0; i < selectWord.length; i++) {
      answerArray[i] = "_ ";
// put in a string
    var newWord = answerArray.join(" ");
  $("#currentWord").html(newWord);
}
}

//set up HTML
function insertHtml() {
  var html =
  "<p>Wins: " + wins + "</p>" +
  "<p>Losses: " + losses + "</p>" +
  "<p>Max Guesses: " + maxGuesses + "</p>";
  $("#win").html(html);

}

// if you guess all the correct words pop up "YOU WIN!" add to WIN SCORE
function checkWin (){
//if maxGuesses is 0 alert failed game
  if (maxGuesses === 0) {
    alert("YOU LOSE!");
    randomWord();
    losses ++;
    maxGuesses = 10;
    lettersGuessed = [];
//else if statement for win if all letters are guessed correctly
// else if (maxGuess > 0 && all words are filled in)
}
}

//***************************** LOGIC ****************************************
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
//if letter is guessed and wrong add letter to lettersGuessed array subtract from maxGuesses
      }else if (selectWord != userGuess) {
            lettersGuessed[i] = userGuess;
            var alGuessed = lettersGuessed.join(", ");
            $('#lettersAlready').html(alGuessed);
            checkWin();
    }
  }
}
//if letter is guessed and wrong add letter to lettersGuessed array subtract from maxGuesses
insertHtml();
}

insertHtml();
randomWord();
