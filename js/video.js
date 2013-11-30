var player={
        
        params : {
                video:'',
                progressBar:'',
                button:'',
                buffer:'',
                skip:'',
                onloaded:function(){},
                onskip:function(){},
                onended:function(){},
                onplay:function(){}
        },

        init : function (options) {
                this.params=$.extend(this.params,options);
                $(this.params.video).bind('timeupdate',this.updateProgress);
                
        },
        
        
        playPause : function () {
                var media=$(player.params.video)[0];
                $(player.params.button).removeClass('loading');
                if(media.paused){
                        media.play();
                        $(player.params.video).addClass('play');
                        $(player.params.video).removeClass('fadeout');
                        $(player.params.button).addClass('off');
                        player.params.onplay.call(this);
                }
                else{
                        media.pause();
                        $(player.params.video).addClass('fadeout');
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
        
        skip:function() {
            var media=$(player.params.video)[0];
            var ePositionX=this.offsetWidth;
            var timeEnd=ePositionX*media.duration;
            media.currentTime=timeEnd;
            var url = "http://127.0.0.1/defi_mms/jeux.html";    
            $(location).attr('href',url);
        },
        end:function() {
            window.location="http://127.0.0.1/defi_mms/jeux.html";
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
        onended:function() {
            console.log('ended');
        },
        onrandom:function(){
                console.log('random'); 
                
        }
});

player.playPause();
$('#video, #button').on('click',player.playPause);
$('#progressBar').on('click',player.setTime);
$('.skip').on('click',player.skip);
$(player.params.video)[0].addEventListener('ended',player.end);