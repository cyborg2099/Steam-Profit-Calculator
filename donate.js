jQuery(document).ready(function($){
    $('.bitcoin__link').click(function() {
    var $text_copy = $(this);
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($text_copy.text()).select();
    document.execCommand("copy");
    $temp.remove();
    $('.copy_ms').fadeIn(500);
    setTimeout(function(){$('.copy_ms').fadeOut(500);},1500);
    });
});