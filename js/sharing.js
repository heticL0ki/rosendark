/*
 * Twitter sharing for the games
 * 
 * @param {type} d
 * @param {type} s
 * @param {type} id
 * @returns {undefined}
 */
!function(d,s,id){
        var js,fjs=d.getElementsByTagName(s)[0];
        if(!d.getElementById(id)){
                js=d.createElement(s);
                js.id=id;
                js.src="https://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js,fjs);
        }
}(document,"script","twitter-wjs");

/**
 * Twitter sharing for the website
 * 
 * @param {type} d
 * @param {type} s
 * @param {type} id
 * @returns {undefined}
 */
!function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
    if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;
        js.src=p+'://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js,fjs);
    }
}(document, 'script', 'twitter-wjs');
                

/**
 * Facebook sharing for the website
 */
$(document).ready(function () {
    $('#facebook').click(function (e) {
        //Recovery of the score in the local storage
        var score = localStorage.getItem('score');
        e.preventDefault();
        FB.ui(
            {
                method: 'feed',
                name: 'Defi M&M\'s',
                link: 'http://defi-mms.dumoulinjb.fr/',
                caption: 'hey how is my Application ? tell me dude',
                description: 'hey how is my Application ?',
                message: ''
            });
    });
});
/**
 * Facebook sharing for memo
 */
$(document).ready(function () {
    $('.memo').click(function (e) {
        //Recovery of the score in the local storage
        var score = localStorage.getItem('score');
        e.preventDefault();
        FB.ui(
            {
                method: 'feed',
                name: 'Defi M&M\'s',
                link: 'http://defi-mms.dumoulinjb.fr/',
                caption: 'hey how is my Application ? tell me dude',
                description: 'hey how is my Application ?',
                message: 'J\ai eu '+score+' à ce jeu, peux-tu me battre ?'
            });
    });
});
/**
 * Facebook sharing for quizz1
 */
$(document).ready(function () {
    $('.quizz1').click(function (e) {
        e.preventDefault();
        FB.ui(
            {
                method: 'feed',
                name: 'Defi M&M\'s',
                link: 'http://defi-mms.dumoulinjb.fr/',
                caption: 'hey how is my Application ? tell me dude',
                description: 'hey how is my Application ?',
                message: 'J\ai eu '+score+' à ce jeu, peux-tu me battre ?'
            });
    });
});
/**
 * Facebook sharing for quizz2
 */
$(document).ready(function () {
    $('.quizz2').click(function (e) {
        e.preventDefault();
        FB.ui(
            {
                method: 'feed',
                name: 'Defi M&M\'s',
                link: 'http://defi-mms.dumoulinjb.fr/',
                caption: 'hey how is my Application ? tell me dude',
                description: 'hey how is my Application ?',
                message: 'J\ai eu '+score+' à ce jeu, peux-tu me battre ?'
            });
    });
});
/**
 * Facebook sharing for power4
 */
$(document).ready(function () {
    $('.power4').click(function (e) {
        e.preventDefault();
        FB.ui(
            {
                method: 'feed',
                name: 'Defi M&M\'s',
                link: 'http://defi-mms.dumoulinjb.fr/',
                caption: 'hey how is my Application ? tell me dude',
                description: 'hey how is my Application ?',
                message: 'J\ai eu '+score+' à ce jeu, peux-tu me battre ?'
            });
    });
});

/**
* Facebook sharing for angry M&M's
*/
$(document).ready(function () {
    $('.angrymms').click(function (e) {
        e.preventDefault();
        FB.ui(
            {
                method: 'feed',
                name: 'Defi M&M\'s',
                link: 'http://defi-mms.dumoulinjb.fr/',
                caption: 'hey how is my Application ? tell me dude',
                description: 'hey how is my Application ?',
                message: 'J\ai eu '+score+' à ce jeu, peux-tu me battre ?'
            });
    });
});
/**
* Facebook sharing for tictactoe
*/
$(document).ready(function () {
    $('.tictactoe').click(function (e) {
        e.preventDefault();
        FB.ui(
            {
                method: 'feed',
                name: 'Defi M&M\'s',
                link: 'http://defi-mms.dumoulinjb.fr/',
                caption: 'hey how is my Application ? tell me dude',
                description: 'hey how is my Application ?',
                message: 'J\ai eu '+score+' à ce jeu, peux-tu me battre ?'
            });
    });
});


FB.init({
appId : '590396651008141'
});
          