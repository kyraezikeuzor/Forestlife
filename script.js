  //STAGE ONE QUESTIONS
  var myQuestions1 = [
    {
      question: "Forests are home to what percentage of the earth’s land animals and plants?",
      answers: {
        1: '85%',
        2: '100%',
        3: '90%',
        4: '50%'
      },
      correctAnswer: '1',
      correctAnswerStatement: 'Correct!',
      incorrectAnswerStatement: 'Incorrect!'
    },
  ];
  var myQuestions2 = [
    {
      question: "Approximately how much forest area is lost every year?",
      answers: {
        1: '3 million hectares',
        2: '8 million hectares',
        3: '14 million hectares',
        4: '19 million hectares'
      },
      correctAnswer: '3',
      correctAnswerStatement: 'Correct!',
      incorrectAnswerStatement: 'Incorrect!'
    },
  ];
  var myQuestions3 = [
    {
      question: "What percentage of carbon dioxide emissions do forests absorb?",
      answers: {
        1: '10%',
        2: '20%',
        3: '30%',
        4: '40%'
      },
      correctAnswer: '3',
      correctAnswerStatement: 'Correct!',
      incorrectAnswerStatement: 'Incorrect!'
    },
  ];
  var myQuestions4 = [
    {
      question: "What percentage of the world’s land area do forests cover?",
      answers: {
        1: '7%',
        2: '19%',
        3: '31%',
        4: '48%'
      },
      correctAnswer: '3',
      correctAnswerStatement: 'Correct!',
      incorrectAnswerStatement: 'Incorrect!'
    },
  ];
  var myQuestions5 = [
    {
      question: "How many trees does it take to absorb a car’s average annual carbon dioxide emissions?",
      answers: {
        1: 'More than 100',
        2: 'More than 200',
        3: 'More than 300',
        4: 'More than 400'
      },
      correctAnswer: '4',
      correctAnswerStatement: 'Correct!',
      incorrectAnswerStatement: 'Incorrect!'
    },
  ];
  var myQuestions6 = [
    {
      question: "How many kilograms of carbon dioxide can a tree sequester in a year?",
      answers: {
        1: '45 kilograms',
        2: '70 kilograms',
        3: '150 kilograms',
        4: '215 kilograms'
      },
      correctAnswer: '3',
      correctAnswerStatement: 'Correct!',
      incorrectAnswerStatement: 'Incorrect!'
    },
  ];
  var myQuestions7 = [
    {
      question: "What percentage of the world’s renewable energy supply does wood fuel make up?",
      answers: {
        1: '10%',
        2: '20%',
        3: '30%',
        4: '40%'
      },
      correctAnswer: '4',
      correctAnswerStatement: 'Correct!',
      incorrectAnswerStatement: 'Incorrect!'
    },
  ];
  var myQuestions8 = [
    {
      question: "How much more greenhouse gas is emitted when polyester is used in textiles rather than wood based fibers?",
      answers: {
        1: '10 times more',
        2: '50 times more',
        3: '120 times more',
        4: '170 times more'
      },
      correctAnswer: '4',
      correctAnswerStatement: 'Correct!',
      incorrectAnswerStatement: 'Incorrect!'
    },
  ];
  var myQuestions9 = [
    {
      question: "What percentage of deforestation do wood and paper products account for?",
      answers: {
        1: '10%',
        2: '30%',
        3: '40%',
        4: '60%'
      },
      correctAnswer: '1',
      correctAnswerStatement: 'Correct!',
      incorrectAnswerStatement: 'Incorrect!'
    },
  ];
  var myQuestions10 = [
    {
      question: "Around how many hectares of forest have been lost since 1990?",
      answers: {
        1: '100 million',
        2: '200 million',
        3: '300 million',
        4: '400 million'
      },
      correctAnswer: '4',
      correctAnswerStatement: 'Correct!',
      incorrectAnswerStatement: 'Incorrect!'
    },
  ];
  var myQuestions11 = [
    {
      question: "Approximately how many trees are cut down every minute?",
      answers: {
        1: '700',
        2: '1,300',
        3: '2,500',
        4: '3,600'
      },
      correctAnswer: '3',
      correctAnswerStatement: 'Correct!',
      incorrectAnswerStatement: 'Incorrect!'
    },
  ];
  var myQuestions12 = [
    {
      question: "What percentage of annual greenhouse gas emissions does tropical deforestation account for?",
      answers: {
        1: '10%',
        2: '20%',
        3: '30%',
        4: '40%'
      },
      correctAnswer: '2',
      correctAnswerStatement: 'Correct!',
      incorrectAnswerStatement: 'Incorrect!'
    },
  ];


  var quizContainer1 = document.getElementById('stage1-question1');
  var resultsContainer1 = document.getElementById('stage1-question1-result');
  var submitButton1 = document.getElementById('stage1-question1-submit');

  var quizContainer2 = document.getElementById('stage1-question2');
  var resultsContainer2 = document.getElementById('stage1-question2-result');
  var submitButton2 = document.getElementById('stage1-question2-submit');

  var quizContainer3 = document.getElementById('stage1-question3');
  var resultsContainer3 = document.getElementById('stage1-question3-result');
  var submitButton3 = document.getElementById('stage1-question3-submit');

  var quizContainer4 = document.getElementById('stage2-question1');
  var resultsContainer4 = document.getElementById('stage2-question1-result');
  var submitButton4 = document.getElementById('stage2-question1-submit');

  var quizContainer5 = document.getElementById('stage2-question2');
  var resultsContainer5 = document.getElementById('stage2-question2-result');
  var submitButton5 = document.getElementById('stage2-question2-submit');

  var quizContainer6 = document.getElementById('stage2-question3');
  var resultsContainer6 = document.getElementById('stage2-question3-result');
  var submitButton6 = document.getElementById('stage2-question3-submit');

  var quizContainer7 = document.getElementById('stage3-question1');
  var resultsContainer7 = document.getElementById('stage3-question1-result');
  var submitButton7 = document.getElementById('stage3-question1-submit');

  var quizContainer8 = document.getElementById('stage3-question2');
  var resultsContainer8 = document.getElementById('stage3-question2-result');
  var submitButton8 = document.getElementById('stage3-question2-submit');

  var quizContainer9 = document.getElementById('stage3-question3');
  var resultsContainer9 = document.getElementById('stage3-question3-result');
  var submitButton9 = document.getElementById('stage3-question3-submit');

  var quizContainer10 = document.getElementById('stage4-question1');
  var resultsContainer10 = document.getElementById('stage4-question1-result');
  var submitButton10 = document.getElementById('stage4-question1-submit');

  var quizContainer11 = document.getElementById('stage4-question2');
  var resultsContainer11 = document.getElementById('stage4-question2-result');
  var submitButton11 = document.getElementById('stage4-question2-submit');

  var quizContainer12 = document.getElementById('stage4-question3');
  var resultsContainer12 = document.getElementById('stage4-question3-result');
  var submitButton12 = document.getElementById('stage4-question3-submit');



  generateQuiz(myQuestions1, quizContainer1, resultsContainer1, submitButton1);
  generateQuiz(myQuestions2, quizContainer2, resultsContainer2, submitButton2);
  generateQuiz(myQuestions3, quizContainer3, resultsContainer3, submitButton3);
  generateQuiz(myQuestions4, quizContainer4, resultsContainer4, submitButton4);
  generateQuiz(myQuestions5, quizContainer5, resultsContainer5, submitButton5);
  generateQuiz(myQuestions6, quizContainer6, resultsContainer6, submitButton6);
  generateQuiz(myQuestions7, quizContainer7, resultsContainer7, submitButton7);
  generateQuiz(myQuestions8, quizContainer8, resultsContainer8, submitButton8);
  generateQuiz(myQuestions9, quizContainer9, resultsContainer9, submitButton9);
  generateQuiz(myQuestions10, quizContainer10, resultsContainer10, submitButton10);
  generateQuiz(myQuestions11, quizContainer11, resultsContainer11, submitButton11);
  generateQuiz(myQuestions12, quizContainer12, resultsContainer12, submitButton12);
  

  //FUNCTIONS
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
          resultsContainer.innerHTML = questions[i].correctAnswerStatement;
          resultsContainer.style.color = 'white';
          resultsContainer.style.backgroundColor = 'lightgreen';

        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = '#FF4747';
          resultsContainer.innerHTML = questions[i].incorrectAnswerStatement;
          resultsContainer.style.color = 'white';
          resultsContainer.style.backgroundColor = '#FF4747';
        }
      }
  
      // show number of correct answers out of total
      //resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }   
  
  }