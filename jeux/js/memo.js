//Hide the play again button
$('.playAgain').hide();

var cardSet = "paris",
  totalCards = 12,//must be an even number max 24!!!
  card1 ="",
  card2="",
  trys = 0,
  shown = 1,
  mcount = 0,//how many matches
  theCards = ['zero','one','two','three','four','five','six'];
//for shuffle func
var i,rand,temp,str,nums = [];
var j = 50;//speed of card appearnce
$(document).ready(function(){
   //load all images and hide them so they are pre loaded when start to zoom
     for(i = 0;i<13;i++){}

  $("#slideshow").hide();
  function shower (trys){
    var theMes = "";
      if(trys < 10){
      theMes = "Well done you finished quickly!";
    }else if (trys < 15){
      theMes = "Well done you finished!";
    }else if (trys < 20){
      theMes = "Well done you finished, You are not very fast!";
    }else if (trys < 27){
      theMes = "Well done you finished at last! You're not very good at this are you!";
    }else if (trys < 50){
      theMes = "Oh my god what's wrong with you it's not that difficult!";
    }
      
    }
    var trys = 0;
  $('#trys span').text(trys);
  
  function shuffle(){
    //fill array 1-totalCards
    for(i = 1;i<totalCards+1;i++){
      nums[i] = i; 
    }
    //now randomize the numbers in the element
    for(i = 1;i<totalCards+1;i++){
      rand = Math.ceil(Math.random()*totalCards);
      temp = nums[i];
      nums[i] = nums[rand];
      nums[rand] = temp;      
    }
    //use the numbers
    for(i = 1;i<totalCards+1;i++){
      if(nums[i] > totalCards/2){
        nums[i]=nums[i]-totalCards/2;
      }
      $('#playfield').append('<div class="card down '+theCards[nums[i]]+'" data-face="'+nums[i]+'"></div>');
      $('.card').delay(j).fadeIn('slow');
      j = j+50;
    }
  }//close shuffle function
  
  shuffle();
  
  /*Click on a card*/
  $('.card').click(function(){
      
    //Score storage in local
    localStorage.setItem('score',JSON.stringify(trys));
    
    $('p.mess').slideUp('fast');
    $('#turns').fadeIn('slow');
    if ($(this).hasClass('up') === false && $(this).hasClass('matched') === false){ //only do if have not already done it!
      if ($('.card').hasClass('up') ){ //only runs when two are turned over
        card2 = $(this).data('face');
        $(this).toggleClass('down').toggleClass('up').html('<div class="pic">'+/*card2+*/'</div>');
        if(card2 === card1){ //we have a match!!
          $('.up').addClass('matched').removeClass('up');
          mcount = mcount + 1;
          if(mcount === totalCards/2){ //all matched up !!
                   $('.finished').text("GG");
                   $('.playAgain').show();
            shower(trys);
          } 
        }else{ // not a match wait then turn over
          $('.playAgain').hide();
          trys = trys + 1;
          $('#turns span').text(trys);
          if(trys === 37){
            $('.age').fadeIn('slow');
          }
          
          setTimeout(function(){
            $(this).toggleClass('down').toggleClass('up');
            $('.up').toggleClass('up').addClass('down').find('div').remove("div");
            },600);
        }
      }else{ //when just the one turned over
        $(this).toggleClass('down');
        $(this).toggleClass('up');
        card1 = $(this).data('face');
        $(this).html('<div class="pic">'+/*card1+*/'</div>');
      }
    }
  });
  
  /*Play again*/
  $('.playAgain').on('click',function(e) {
    e.preventDefault();
    localStorage.removeItem('score');
    location.reload();
  });
  
});

