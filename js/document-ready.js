// galleries
jQuery(document).ready(function() {
    $("figure a[class^='gallery-']").each(function() {
        $(this).colorbox({
            rel: $(this).attr('class'),
            transition: 'fade',
            opacity: 0.6,
            maxWidth: '90%',
            maxHeight: '90%'
        });
    });
});

// responsive colorbox
$(window).resize(function() {
    if ($('#cboxOverlay').is(':visible')) {
        $.colorbox.load(true);
    }
});