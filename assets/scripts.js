$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
    $('.gallery').on('click', 'ul.tags-bar span.nav-link', function() {
        $('.gallery ul.tags-bar span.nav-link').removeClass('active');
        $(this).addClass('active');
    });
});
