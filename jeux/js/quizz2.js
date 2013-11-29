//Hide the play again button
$('.playAgain').hide();

var reponses = new Array();

$(function(){
    var jQuiz = {
        answers: { q1: 'b', q2: 'c', q3: 'a', q4: 'b', q5: 'b' },
        questionLenght: 5,
        checkAnswers: function() {
            var arr = this.answers;
            var ans = this.userAnswers;
            var resultArr = [];
            for (var p in ans) {
                var x = parseInt(p) + 1;
                var key = 'q' + x;
                var flag = false;
                if (ans[p] === 'q' + x + '-' + arr[key]) {
                    flag = true;
                }
                else {
                    flag = false;
                }
                resultArr.push(flag);
            }
            return resultArr;
        },
        init: function(){
            var count=0;
            
            $('.btnNext').click(function(){
                if ($('input[type=radio]:checked:visible').length === 0) {
                            
                    return false;
                }
                $(this).parents('.questionContainer').fadeOut(500, function(){
                    $(this).next().fadeIn(500);
                });
                
                count++;
                //Fulling of the drawing
                jQuery('.greyscale').animate({
                        height: 254 - 50*count
                }, 500);
                reponses[1]=$('input[name=q1]:checked').val();
                reponses[2]=$('input[name=q2]:checked').val();
                reponses[3]=$('input[name=q3]:checked').val();
                reponses[4]=$('input[name=q4]:checked').val();
            });
             
            $('.btnShowResult').click(function(){
                var arr = $('input[type=radio]:checked');
                var ans = jQuiz.userAnswers = [];
                for (var i = 0, ii = arr.length; i < ii; i++) {
                    ans.push(arr[i].getAttribute('id'));
                }
                reponses[5]=$('input[name=q5]:checked').val();
            });
			
            $('.btnShowResult').click(function(){
                var results = jQuiz.checkAnswers();
                
                $('#playfield').empty();
                var resultSet = $('#playfield');
                var trueCount = 0;
                var ii=results.length;
                resultSet.append('<div class="title"><h1>Connaissez-vous vraiment M&M\'s ?</h1></div>');
                for (var i = 0; i <ii; i++){
                    if (results[i] === true) {
                        trueCount++;
                        resultSet.append('<div class="reponses">Question ' + (i+1) + '. <br>Vous avez répondu : '+reponses[i+1]+' : Bonne réponse ! </div><br>');

                    }else{
                        resultSet.append('<div class="reponses">Question ' + (i+1) + '. <br>Vous avez répondu : '+reponses[i+1]+' : Mauvaise réponse ! </div><br>');
                    }
                }
                //Full drawing
                jQuery('.greyscale').animate({
                        height: 0
                }, 500);
                $('#nb_turns').html(trueCount);
                //Score in local storage
                localStorage.setItem('score',JSON.stringify(trueCount));
                
                //resultSet.append("<div class='playAgain'>Recommencer</div>");
                $('.playAgain').show();
            });
        }
    };
    jQuiz.init();
});
/*Play again*/
  $('.playAgain').on('click',function(e) {
    
    localStorage.removeItem('score');
    location.reload();
  });