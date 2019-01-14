$(document).ready(function() {
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
});