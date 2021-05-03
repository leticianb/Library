$(document).ready(function() {

    $('.nav-link').click(function(e) {
        e.preventDefault();
        let url = $(this).attr('href');

        alert(url);
    })
})