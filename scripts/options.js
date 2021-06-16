$(function()
    {
      $('[name="layouts"]').change(function()
      {
        if ($(this).val() == "2") {
           console.log("2");
        }

        else{
            console.log("1");
        };

      });
});