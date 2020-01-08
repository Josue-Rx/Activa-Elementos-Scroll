$(document).ready(function(){
$('#alert').hide(0);

    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var content2 = $('#content2').offset();
        content2 = content2.top;

        if(windowHeight >= content2) {
            $('#alert').fadeIn(200); 
        }else{
            $('#alert').fadeOut(200);
        }    
    });

});