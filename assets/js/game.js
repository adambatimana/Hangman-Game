// display wins and losses
  var wins =0;
  var losses = 0;
//number of guesses remaining  start with 15 -= 1
  var maxGuesses = 15;
//"bobafett", "han solo", "luke", "rey", "leia", "millennium falcon", "skywalker", "jedi", "sith"
//create array of words to be selected
  var words =[
    ["s","t","a","r", "w", "a", "r", "s"],
    ["b","o","b","a", "f", "e", "t", "t"],
    ["h","a","n","s", "o", "l", "o"],
    ["f","a","l","c", "o", "n"],
    ["l","u","k","e"],
    ["s","k","y","w", "a", "l", "k", "e", "r"],
];





  // create math.random to randomly select words
    var selectWord = words[Math.floor(Math.random() * words.length)];
    var newWord = new Array (selectWord.length);
    console.log(newWord);
    var lettersGuessed =[];


    for (var i = 0; i < newWord.length; i++) {
      newWord[i] = "_ ";
    }

$("#currentWord").html(newWord);

// press any key to begin event listener
  document.onkeyup = function(event){

      var userGuess = event.key;
      maxGuesses -= 1;



      //current word display as "_" inside html of browser




    //conditional statements for game logic




}







//create array of letters already guessed and not allow to replace in guesses



function insertHtml() {
  var html =
  "<p>Wins: " + wins + "</p>" +
  "<p>Losses: " + losses + "</p>" +
  "<p>Max Guesses: " + maxGuesses + "</p>";
  document.querySelector("#win").innerHTML = html;

}

insertHtml();
