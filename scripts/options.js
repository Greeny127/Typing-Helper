$(function()
    {
      $('[name="layouts"]').change(function()
      {
        if ($(this).val() == "2") {
           azerty();
        }

        else{
            qwerty();
        };

      });
});

function azerty(){
    $('#Q').html("A");
    $('.keyQ').addClass('keyA').removeClass('keyQ');

    $('#W').html("Z");
    $('.keyW').addClass('keyZ').removeClass('keyW');

    $('#A').html("Q");
    $('#A').addClass('keyQ').removeClass('keyA');

    $('#Z').html("W");
    $('#Z').addClass('keyW').removeClass('keyZ');
}

function qwerty(){
    $('#Q').html("Q");
    $('#Q').addClass('keyQ').removeClass('keyA');

    $('#Z').html("Z");
    $('#Z').addClass('keyZ').removeClass('keyW');

    $('#A').html("A");
    $('#A').addClass('keyA').removeClass('keyQ');

    $('#W').html("W");
    $('#W').addClass('keyW').removeClass('keyZ');
}