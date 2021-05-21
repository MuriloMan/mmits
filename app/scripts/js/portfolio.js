$(function () {
    $('#portfolio .moreDetail').on('click', function () {
        $('#portfolio .portfolioDetailItem').each(function (i, e) {
            $(e).addClass('d-none');
        });
        var id = $(this).attr('data-portfolioId');
        $('#' + id).removeClass('d-none');

        $("html").animate(
            {
                scrollTop: $('#' + id).offset().top
            },
            800 //speed
        );
    });
});