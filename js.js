Zepto(function(){
    $('.cards').on('click',  function() {
        // $(this).css({
        //     "position": "absolute",
        //     "left": "25%",
        //     "top": "25%",
        //     "z-index": "999"
        // });
        $('.cards').addClass('allcards');
        $('.cards').removeClass('selected');
        $(this).addClass('selected').removeClass('allcards');
    });
});