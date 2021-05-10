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


    $(function(){
        if(window.location.href.includes('/en/')){
            $('a').each(function(i,e){
                e.href = '/en/' + e.href;
                console.log(e.href);
            });
        }
    })

});