//Trivia Game

//Four objects with question-answer pairs.
var q1 = {
    question: "What is the capital of Texas?",
    answer: "AUSTIN"
};

var q2 = {
    question: "What is the capital of New Jersey?",
    answer: "TRENTON"
};

var q3 = {
    question: "What is the capital of New York?",
    answer: "BUFFALO"
};

var q4 = {
    question: "What is the capital of California?",
    answer: "SACRAMENTO"
};

//An array of the objects.
var questions = [q1,q2,q3,q4];

//Fisher-Yates Shuffle function applied to array.
function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
shuffle(questions);

//This function takes an array of objects full of Q&A pairs and does the following:
//1.)  Initiates a for loop that upon each iteration: A.)  Stores the current time in milliseconds in the variable, "start2".
//                                                    B.)  Compares the user's answer to the object's answer.
//2.)  "elapsed2" stores the time the user answered the question.
//3.)  If the user answers correctly, but took over 5 seconds, they user is informed.  If they answer correctly within 5 seconds
//     they are promped with "Correct!" and their score is increased by 1.  
//4.)  After the for loop is finished, the user's percentage of correct answers is calculated.  They are prompted with a unique message
//     depending on this percentage.

var score = 0;
function questionOutput (questionarray) {
    for (var i = 0; i < questionarray.length; i++) {
        var start = new Date();
        var start2 = start.getTime();
        var userInput = prompt(questionarray[i].question);
        var uppercaseInput = userInput.toUpperCase();
        if (uppercaseInput === questionarray[i].answer){
            var elapsed = new Date()
            var elapsed2 = elapsed.getTime() - start2;
            if (elapsed2 < 5000) {
                alert("Correct!");
                score += 1;
            } else {
                alert("Correct, but you took too long to answer.");
            }
        } else {
            alert("Incorrect.")
        }
    }
    if (score / questions.length >= 0.75){
    alert("You got " + score + " out of " + questions.length + " answers correct.  Good Job!");
    } else {
    alert("You got " + score + " out of " + questions.length + " answers correct.  Better luck next time.");
    }
};

questionOutput(questions);
