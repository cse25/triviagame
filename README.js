//Nation Capitals Trivia Game

//Objects with questions and answers.
var q1 = {
    question: "What is the capital of Kazakhstan?",
    answer: "ASTANA"
};

var q2 = {
    question: "What is the capital of Kenya?",
    answer: "NAIROBI"
};

var q3 = {
    question: "What is the capital of The United Arab Emirates?",
    answer: "ABU DHABI"
};

var q4 = {
    question: "What is the capital of Uruguay?",
    answer: "MONTEVIDEO"
};

var q5 = {
    question: "What is the capital of Vietnam?",
    answer: "HANOI"
};

var q6 = {
    question: "What is the capital of Trinidad and Tobago?",
    answer: "PORT OF SPAIN"
};

var q7 = {
    question: "What is the capital of Switzerland?",
    answer: "BERN"
};

var q8 = {
    question: "What is the capital of Lebanon?",
    answer: "BEIRUT"
};

var q9 = {
    question: "What is the capital of Algeria?",
    answer: "ALGIERS"
};

var q10 = {
    question: "What is the capital of Argentina?",
    answer: "BUENOS AIRES"
};

var q11 = {
    question: "What is the capital of France?",
    answer: "PARIS"
};

var q12 = {
    question: "What is the capital of South Korea?",
    answer: "SEOUL"
};

var q13 = {
    question: "What is the capital of Iran?",
    answer: "TEHRAN"
};

var q14 = {
    question: "What is the capital of Poland?",
    answer: "WARSAW"
};

var q15 = {
    question: "What is the capital of Peru?",
    answer: "LIMA"
};

var q16 = {
    question: "What is the capital of Denmark?",
    answer: "COPENHAGEN"
};

var q17 = {
    question: "What is the capital of Russia?",
    answer: "MOSCOW"
};

var q18 = {
    question: "What is the capital of Egypt?",
    answer: "CAIRO"
};

var q19 = {
    question: "What is the capital of Finland?",
    answer: "HELSINKI"
};

var q20 = {
    question: "What is the capital of India?",
    answer: "NEW DELHI"
};

var q21 = {
    question: "What is the capital of Madagascar?",
    answer: "ANTANANARIVO"
};

var q22 = {
    question: "What is the capital of Sri Lanka?",
    answer: "SRI JAYAWARDENPURA KOTTE"
};

var q23 = {
    question: "What is the capital of Macedonia?",
    answer: "SKOPJE"
};

var q24 = {
    question: "What is the capital of Mali?",
    answer: "BAMAKO"
};

var q25 = {
    question: "What is the capital of Maldives?",
    answer: "MALE"
};

var q26 = {
    question: "What is the capital of Albania?",
    answer: "TIRANA"
};

var q27 = {
    question: "What is the capital of Cote d'Ivoire?",
    answer: "YAMOUSSOUKRO"
};

var q28 = {
    question: "What is the capital of Djibouti?",
    answer: "DJIBOUTI"
};

var q29 = {
    question: "What is the capital of Ecuador?",
    answer: "QUITO"
};

var q30 = {
    question: "What is the capital of Turkey?",
    answer: "ANKARA"
};
//An array of the question objects.
var mediumQuestions = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
var easyQuestions = [q11,q12,q13,q14,q15,q16,q17,q18,q19,q20];
var hardQuestions = [q21,q22,q23,q24,q25,q26,q27,q28,q29,q30];

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
shuffle(mediumQuestions);
shuffle(easyQuestions);
shuffle(hardQuestions);

//This function takes an array of objects full of Q&A pairs and does the following:
//1.)  Initiates a for loop that upon each iteration: A.)  Stores the current time in milliseconds in the variable, "start2".
//                                                    B.)  Compares the user's answer to the object's answer.
//2.)  "elapsed2" stores the time the user answered the question.
//3.)  If the user answers correctly, but took over 5 seconds, they user is informed.  If they answer correctly within 5 seconds
//     they are promped with "Correct!" and their score is increased by 1.  
//4.)  After the for loop is finished, the user's percentage of correct answers is calculated.  They are prompted with a unique message
//     depending on this percentage.

var score = 0;
var total = 0;
function questionOutput (questionarray) {
    alert("There are 10 questions.  You have 10 seconds to answer each question.  Answers are not case sensitive.");
    var quizStartTime = new Date();
    var quizStartTime2 = quizStartTime.getTime();
    for (var i = 0; i < questionarray.length; i++) {
        var questionStartTime = new Date();
        var questionStartTime2 = questionStartTime.getTime();
        var userInput = prompt(questionarray[i].question);
        var uppercaseInput = userInput.toUpperCase();
        if (uppercaseInput === questionarray[i].answer){
            var questionEndTime = new Date()
            var elapsed = questionEndTime.getTime() - questionStartTime2;
            if (elapsed < 10000) {
                score += 1;
                total += 1;
                alert("Correct!  Your current score is: " + score + " out of " + total);
            } else {
                alert("Correct, but you took too long to answer.  Your current score is: " + score + " out of " + total);
            }
        } else {
            total += 1;
            alert("Incorrect. The correct answer is " + questionarray[i].answer + ".  Your total score is: " + score + " out of " + total);
        }
    }
    var quizEndTime = new Date();
    var totalElapsedTime = quizEndTime.getTime() - quizStartTime2;
    var totalElapsedTimeSeconds = totalElapsedTime / 1000;
    var totalElapsedTimeSecondsRounded = Math.round(totalElapsedTimeSeconds*10)/10;
    if (score / 10 >= 0.70){
        alert("You got " + score + " out of 10 answers correct.  Great Job!  The quiz took you " + totalElapsedTimeSecondsRounded + " seconds to complete.");
    } else {
        alert("You got " + score + " out of 10 answers correct.  Better luck next time.  The quiz took you " + totalElapsedTimeSecondsRounded + " seconds to complete.");
    }
};

function chooseDifficulty() {
    var difficultyChoice = prompt("Welcome to the Nation Capitals Trivia Game!  Please type 'easy', 'medium', or 'hard' to select the difficulty");
    var upperCaseDifficultyChoice = difficultyChoice.toUpperCase();
    if (upperCaseDifficultyChoice === "EASY") {
        questionOutput(easyQuestions);
    } else if (upperCaseDifficultyChoice === "MEDIUM") {
        questionOutput(mediumQuestions);
    } else if (upperCaseDifficultyChoice === "HARD") {
        questionOutput(hardQuestions);
    } else {
        alert("Not a valid entry.  Please try again.");
        chooseDifficulty();
    }
};

chooseDifficulty();
