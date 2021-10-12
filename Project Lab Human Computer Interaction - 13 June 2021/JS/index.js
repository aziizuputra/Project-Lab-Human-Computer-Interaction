$(document).ready(function() {
    $('.image-group').hide()

    $('#container').click(function() {
        $('.frawlsalla').toggle(500)
        $('.frawlsallaQuote').toggle(500)
        $('.image-group').toggle(500)
    })

    $('#imageNext').click(function() {
        var curr = $('.main');
        var next = curr.next();
        if(next.length) {
            curr.removeClass('main').css('z-index', -1);
            next.addClass('main').css('z-index', 1);
        }
    })

    $('#imagePrev').click(function() {
        var curr = $('.main');
        var prev = curr.prev();
        if(prev.length) {
            curr.removeClass('main').css('z-index', -1);
            prev.addClass('main').css('z-index', 1);
        }
    })
})