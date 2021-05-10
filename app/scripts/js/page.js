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


    //auto call function, fix link english version
    (function () {
        if (window.location.href.includes('/en/')) {

            //change language switcher
            $('#imgFlaglg').attr({ 'src': '/assets/brflag.svg' });
            $('#imgFlagxs').attr({ 'src': '/assets/brflag.svg' });

            //change urls
            $('a').each(function (_i, e) {
                e.href = e.href
                    .replace('/en/', '')
                    .replace('.com/', '.com/en/');
            });
        } else {
            $('#imgFlaglg').attr({ 'src': '/assets/usflag.svg' });
            $('#imgFlagxs').attr({ 'src': '/assets/usflag.svg' });
        }
    })();

});