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
$('#facebook').click(function (e) {
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
/**
 * Facebook sharing for memo
 */
$('.memo').click(function (e) {
    e.preventDefault();
    //Recovery of the score in the local storage
    var score = localStorage.getItem('score');
    FB.ui(
        {
            method: 'feed',
            name: 'Defi M&M\'s - Memo',
            link: 'http://defi-mms.dumoulinjb.fr/jeux/memo.html',
            caption: 'J\ai fait '+score+' à ce jeu, peux-tu me battre ?',
            description: 'hey how is my Application ?',
            message: 'J\ai eu '+score+' à ce jeu, peux-tu me battre ?'
        });
});
/**
 * Facebook sharing for quizz1
 */
$('.quizz1').click(function (e) {
    e.preventDefault();
	var score = localStorage.getItem('score');
    FB.ui(
        {
            method: 'feed',
            name: 'Defi M&M\'s - Quizz1',
            link: 'http://defi-mms.dumoulinjb.fr/jeux/quizz1.html',
            caption: 'J\ai fait '+score+' à ce jeu, peux-tu me battre ?',
            description: 'hey how is my Application ?',
            message: 'J\ai eu '+score+' à ce jeu, peux-tu me battre ?'
        });
});
/**
 * Facebook sharing for quizz2
 */
$('.quizz2').click(function (e) {
    e.preventDefault();
	var score = localStorage.getItem('score');
    FB.ui(
        {
            method: 'feed',
            name: 'Defi M&M\'s - Quizz2',
            link: 'http://defi-mms.dumoulinjb.fr/jeux/quizz2.html',
            caption: 'J\ai fait '+score+' à ce jeu, peux-tu me battre ?',
            description: 'hey how is my Application ?',
            message: 'J\ai eu '+score+' à ce jeu, peux-tu me battre ?'
        });
});
/**
 * Facebook sharing for power4
 */
$('.power4').click(function (e) {
    e.preventDefault();
	
    //Recovery of the score in the local storage
    var score = localStorage.getItem('score');
    FB.ui(
        {
            method: 'feed',
            name: 'Defi M&M\'s - Puissance4',
            link: 'http://defi-mms.dumoulinjb.fr/jeux/power4.html',
            caption: 'J\ai fait '+score+' à ce jeu, peux-tu me battre ?',
            description: 'hey how is my Application ?',
            message: 'J\ai eu '+score+' à ce jeu, peux-tu me battre ?'
        });
});

/**
* Facebook sharing for angry M&M's
*/
$('.angrymms').click(function (e) {
    e.preventDefault();
	
    //Recovery of the score in the local storage
    var score = localStorage.getItem('score');
    FB.ui(
        {
            method: 'feed',
            name: 'Defi M&M\'s - Angry M&M\'s',
            link: 'http://defi-mms.dumoulinjb.fr/jeux/brise-murailles.html',
            caption: 'J\ai fait '+score+' à ce jeu, peux-tu me battre ?',
            description: 'hey how is my Application ?',
            message: 'J\ai eu '+score+' à ce jeu, peux-tu me battre ?'
        });
});
/**
* Facebook sharing for tictactoe
*/
$('.tictactoe').click(function (e) {
    e.preventDefault();
	
    //Recovery of the score in the local storage
    var score = localStorage.getItem('score');
    FB.ui(
        {
            method: 'feed',
            name: 'Defi M&M\'s - Morpion',
            link: 'http://defi-mms.dumoulinjb.fr/jeux/morpion.html',
            caption: 'J\ai fait '+score+' à ce jeu, peux-tu me battre ?',
            description: 'hey how is my Application ?',
            message: 'J\ai eu '+score+' à ce jeu, peux-tu me battre ?'
        });
});


FB.init({
appId : '590396651008141'
});
          