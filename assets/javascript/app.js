// PSEUDO CODING
// multiple choice questions
// timed for 30 seconds
// when buttn pressed or timed out, scores display

var count = 60;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
    window.location.reload();
  }
}, 1000);

 function submitAnswers() {
     var total = 5;
     var score = 0;

    //  get user input

    var q1 =  document.forms["quizForm"] ["q1"].value;
    var q2 =  document.forms["quizForm"] ["q2"].value;
    var q3 =  document.forms["quizForm"] ["q3"].value;
    var q4 =  document.forms["quizForm"] ["q4"].value;
    var q5 =  document.forms["quizForm"] ["q5"].value;

  

    for(i = 1; i <= total; i++){
        if(eval('q' + i) === null || eval('q' + i) === '') {
            alert('You forgot to answer question ' + i);
            return false;
            console.log(alert)
        }
        
    }

    // set correct answers

    var answers = ["b","a","d","b","d"];

    // check answers
    for(i = 1; i <= total; i++){
        if(eval('q' + i) === answers[i - 1]) {
            score++;
        }
     }


    //  display results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You Scored ' + score+' out of '+total+'</h3>';
alert('You scored '+ score + ' out of ' + total);
console.log(alert);



  
 }

