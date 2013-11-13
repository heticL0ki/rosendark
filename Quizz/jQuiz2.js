$(function(){
    var jQuiz = {
        answers: { q1: 'b', q2: 'c', q3: 'a', q4: 'b', q5: 'b' },
        questionLenght: 5,
        checkAnswers: function() {
            var arr = this.answers;
            var ans = this.userAnswers;
            var resultArr = []
            for (var p in ans) {
                var x = parseInt(p) + 1;
                var key = 'q' + x;
                var flag = false;
                if (ans[p] == 'q' + x + '-' + arr[key]) {
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
            $('.btnNext').click(function(){
                if ($('input[type=radio]:checked:visible').length == 0) {
                            
                    return false;
                }
                $(this).parents('.questionContainer').fadeOut(500, function(){
                    $(this).next().fadeIn(500);
                });
                var el = $('#progress');
                el.width(el.width() + 120 + 'px');
            });
            $('.btnPrev').click(function(){
                $(this).parents('.questionContainer').fadeOut(500, function(){
                    $(this).prev().fadeIn(500)
                });
                var el = $('#progress');
                el.width(el.width() - 120 + 'px');
            })
            $('.btnShowResult').click(function(){
                var arr = $('input[type=radio]:checked');
                var ans = jQuiz.userAnswers = [];
                for (var i = 0, ii = arr.length; i < ii; i++) {
                    ans.push(arr[i].getAttribute('id'))
                }
            })
            $('.btnShowResult').click(function(){
                $('#progress').width(300);
                $('#progressKeeper').hide();
                var results = jQuiz.checkAnswers();
                var resultSet = '';
                var trueCount = 0;
                for (var i = 0, ii = results.length; i < ii; i++){
                    if (results[i] == true) trueCount++;
                    resultSet += '<div> Question ' + (i + 1) + ' is ' + results[i] + '</div>'
                }
                resultSet += '<div class="totalScore">Votre score : ' + trueCount * 20 + ' pts.</div>'
                $('#resultKeeper').html(resultSet).show();
            })
        }
    };
    jQuiz.init();
})