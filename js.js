Zepto(function(){
    $('.cards').on('click',  function() {
        // $(this).css({
        //     "position": "absolute",
        //     "left": "25%",
        //     "top": "25%",
        //     "z-index": "999"
        // });
        $('.cards').removeClass('selected');
        $(this).addClass('selected');
    })
});