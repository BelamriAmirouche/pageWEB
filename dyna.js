/*jquery*/
let n = 1;
$(document).ready(function() {

    $('#obj p').hide('1500');

    $('#objclick').click(function(e) {
        e.preventDefault();
        $('#obj p').toggle('2000');

    });

});