$( '#page h1, #page h2, #page h3, #page h4, #page h5, #page h6, #page p').hover(function(){
    $(this).append('<span class="displaytag">'+$(this).prop("tagName")+'</span>');
    $(this).css({
        'position' : 'relative'
    }).addClass('displaytag-parent');
}, function(){
    $(this).find('.displaytag').remove();
    $(this).removeClass('displaytag-parent')
});
// TODO: working on this 