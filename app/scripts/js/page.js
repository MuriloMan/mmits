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
    (function(){
        if(window.location.href.includes('/en/')){
            $('a').each(function(_i,e){
                e.href = e.href
                .replace('/en/', '')
                .replace('.com/', '.com/en/');
            });
        }
    })();

});