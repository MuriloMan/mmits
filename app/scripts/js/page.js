$(function () {
    $('#clickShowCredits').on('click', function () {
        $('#credits').toggleClass('d-none');
    });

    $.get('/mmits-config.json', function (data) {
        $('#yearmmits').html(data.year);
        $('#versionmmits').html("v" + data.version);
    }, 'json');

    //auto call function, fix link english version
    (function () {
        if (window.location.href.includes('/en/')) {

            //change language switcher
            $('#imgFlaglg').attr({ 'src': '/assets/brflag.svg' });
            $('#imgFlagxs').attr({ 'src': '/assets/brflag.svg' });

            //change urls
            $('.cl').each(function (_i, e) {
                e.href = e.href
                    .replace('/en/', '')
                    .replace('.com/', '.com/en/');
            });

            //To portuguese
            $('.cng-lang').each(function(_i,e){
                e.href = '/';
            });
        } else {
            $('#imgFlaglg').attr({ 'src': '/assets/usflag.svg' });
            $('#imgFlagxs').attr({ 'src': '/assets/usflag.svg' });
        }
    })();

    //Writing log to cheaters
    (function(){
        console.log("%cWanna know something buddy? %c \n all the website code is available in %c https://github.com/MuriloMan/mmits","color:red;font-size:40px", "color:green; font-size:16px", "color:blue; font-size:16px;");
    })();
});