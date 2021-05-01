$(function () {

    $('#clickShowCredits').on('click', function () {
        if ($('#credits').hasClass('d-none'))
            $('#credits').removeClass('d-none');
        else
            $('#credits').addClass('d-none');
    });

    $.get('/mmits-config.json', function (data) {
        $('#yearmmits').html(data.year);
        $('#versionmmits').html(data.version);
    }, 'json');


});