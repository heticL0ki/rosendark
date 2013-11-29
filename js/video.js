var player={
        
        params : {
                video:'',
                progressBar:'',
                button:'',
                buffer:'',
                skip:'',
                onloaded:function(){},
                onskip:function(){},
                onplay:function(){}
        },

        init : function (options) {
                this.params=$.extend(this.params,options);
                $(this.params.video).bind('timeupdate',this.updateProgress);
                $(this.params.video);
        },
        
        
        playPause : function () {
                var media=$(player.params.video)[0];
                $(player.params.button).removeClass('loading');
                if(media.paused){
                        media.play();
                        $(player.params.video).addClass('play');
                        $(player.params.button).addClass('off');
                        player.params.onplay.call(this);
                }
                else{
                        media.pause();
                        $(player.params.button).removeClass('off');
                }
        },

        updateProgress : function () {
                var media=$(this)[0];
                var progressW=media.currentTime*100/media.duration;
                $(player.params.progressBar).width(progressW+'%');
        
                var bufferW=media.buffered.end(0)*100/media.duration;
                $(player.params.buffer).width(bufferW+'%');
        },

        setTime : function (e) {
                var media=$(player.params.video)[0];
                media.currentTime=e.offsetX*media.duration/$(this).width();
        },
        
        skip:function(e) {
            var media=$(player.params.video)[0];
            var ePositionX=this.offsetWidth;
            var timeEnd=ePositionX*media.duration;
            media.currentTime=timeEnd;
            var url = "http://defi-mms.dumoulinjb.fr/jeux.html";    
            $(location).attr('href',url);
        }        
                
}; 


player.init({
        video:'#video',
        button:'#button',
        progressBar:'.progress',
        buffer:'.buffer',
        skip:'.skip',
        onloaded:function(){
                console.log('loaded');
                player.playPause();
        },
        onplay:function(){
                console.log('playing');  
        },
        onskip:function(){
                console.log('skiping');  
        },
        onrandom:function(){
                console.log('random'); 
                
        }
});

player.playPause();
$('#video, #button').on('click',player.playPause);
$('#progressBar').on('click',player.setTime);
$('.skip').on('click',player.skip);
jQuery( ".skip" ).on( "vclick", player.skip );
$('.skip').on('touchstart', player.skip);


