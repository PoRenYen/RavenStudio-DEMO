let lastScroll = 0;

$(window).scroll(function () {
    const nowScroll = $(window).scrollTop();
    console.log('lastScroll:', lastScroll);
    console.log('nowScroll:', nowScroll);

    if (lastScroll = nowScroll) {
        $('.bar').addClass('bar-color');
    }
    else {
        $('.bar').removeClass('bar-color');
    }

    lastScroll = nowScroll;
});
// 
$('.items-imgs img').click(function () {
    console.log('this', $(this));
    console.log('this', $(this).attr('src'));
    console.log('this data-imgitem:', $(this).data('imgitem'));

    const smallImgsrc = $(this).attr('src')
    $('.items-img > img').attr('src', smallImgsrc)
});