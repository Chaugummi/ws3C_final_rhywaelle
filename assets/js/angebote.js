function main() {
    initEmail();
    initModal();
    selectFlipbook();
    initFlipbook();
}

function initEmail() {
    $('#klause__btn').click(function() {
        $('#klause__anmeldung').attr('action',
            'mailto:felix.mayer@students.fhnw.ch?subject=' +
            $('#klause__vorname').attr('value') +
            '&body=hallo' +
            $('#klause__nachname').val() +
            "HELLO"
        );
        $('#klause__anmeldung').submit();

        alert("Hello! I am an alert box!!");
        
    });
  
   $('.slider').slider(); 
}

function initModal() {
    $('.modal').modal();
}

function selectFlipbook() {
    $("#flyers_1").on('click', function(e) {
        $("#flipbook").empty();
        $("#flipbook").append("        <div class=\"hard\"><img class=\"responsive-img\" src=\"../assets/img/flyer/flyer01.png\" /></div>\n" +
            "            <div><img class=\"responsive-img\" src=\"../assets/img/flyer/flyer02.png\" /></div>\n" +
            "            <div class=\"hard cover\"></div>");
        initFlipbook();
    });
    $("#flyers_2").on('click', function(e) {
        $("#flipbook").empty();
        $("#flipbook").append("          <div class=\"hard\"><img src=\"../assets/img/flyer/flyer03.png\" class=\"responsive-img\" /></div>\n" +
            "                            <div class=\"hard cover\"></div>");
        initFlipbook();
    });
}



function initFlipbook() {
    $("#flipbook").turn({
        width: 500,
        height: 400,
        autoCenter: true
    });
}

$(document).ready(main);

