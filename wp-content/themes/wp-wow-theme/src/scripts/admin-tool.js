jQuery('#page h1, #page h2, #page h3, #page h4, #page h5, #page h6, #page p').hover(function () {
    jQuery(this).append('<span class="displaytag">&lt;' + jQuery(this).prop("tagName") + '&gt;</span>');
    jQuery(this).css({
        'position': 'relative'
    }).addClass('displaytag-parent');
}, function () {
    jQuery(this).find('.displaytag').remove();
    jQuery(this).removeClass('displaytag-parent')
});

function getACount(tag) {
    if (document.getElementsByTagName(tag).length) {
        return jQuery('#resultadmin').append('<li class="countag list-group-item list-group-item-action"><span>&lt;' + tag + '&gt;</span> ' + document.getElementsByTagName(tag).length + ' count</li>')
    } else {
        return jQuery('#resultadmin').append('<li class="countag list-group-item list-group-item-action error">&lt;' + tag + '&gt;: No result</li>')
    }
}
function countIMGNoAlt() {
    var images = document.getElementsByTagName('img');
    var numImages = images.length;
    var urlcount = '';
    for (let i = 0; i < numImages; i++) {
        if(images[i].alt == '' || images[i].alt == undefined) {
            urlcount += '<p class="mb-0 small"><a href="' +images[i].src + '" target="_blank">' +images[i].src + '</a></p>';
        }
    }
    jQuery('#resultadmin').append('<li class="countag list-group-item list-group-item-action error">IMG without ALT tag:<div>'+urlcount+'</div></li>')
}

function calljqueruUI() {
    var st = document.createElement("link");
    st.type = 'text/css';
    st.rel = 'stylesheet';
    st.href = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css";
    jQuery("body").append(st);
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js";
    jQuery("body").append(s);
}

jQuery(document).ready(function () {
    calljqueruUI()
    jQuery('.admintoolbar').append('<a href="javascript:void(0);" id="toggleadmintool">Admin Tool</a>')
    jQuery('#toggleadmintool').on('click', function () {
        jQuery('#toggleadmintool').toggleClass('active')
        jQuery('#resultadmin').toggleClass('active')
        jQuery( "#resultadmin" ).draggable({ handle:'#resultadminheader'});
    })
    jQuery('#page').append('<ul id="resultadmin" class="list-group m-3"><li class="list-group-item-action list-group-item active" id="resultadminheader">Results</li></ul>')
    if (jQuery('#resultadmin').length) {
        getACount('h1')
        getACount('h2')
        getACount('h3')
        getACount('h4')
        getACount('h5')
        getACount('h6')
        getACount('a')
        getACount('img')
        countIMGNoAlt()
    }
});



// TODO: working on this 