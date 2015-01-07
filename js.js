Zepto(function(){
    $('.cards').on('click',  function() {

        var left = parseInt($(this).offset().left);

        $('.cards').addClass('allcards');
        $('.cards').removeClass('selected');
        $(this).addClass('selected').removeClass('transition').removeClass('allcards');
        $(this).css({"margin-left": left + 'px'});
        $(this).animate({"margin-left": left - 200 + 'px', "margin-top": 50 + 'px', "transform": "rotateY(90deg)"}, 400, function(){
            left = parseInt($(this).offset().left);
            $(this).animate({"margin-left": (left + 100) + 'px', "margin-top": 100 + 'px', "transform": "rotateY(180deg)"}, 400);
        });
        // $('.cover').addClass('to-cover');
    });
});