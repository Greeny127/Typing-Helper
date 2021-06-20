$.get("https://random-word-api.herokuapp.com/word?number=10000", function(data){
    var words = data.toString().replace(/,/g, " ");
    var smallwords = words.substring(0, 50);
    var count = 0;

    $('html').bind('keypress', function(e) {
        if (String.fromCharCode(e.keyCode) === smallwords.charAt(0)){
            smallwords = words.substring(0+count, 50+count);
            console.log(count)
            count = count + 1;
            $('.words').text(smallwords);    
        }
    });
    
    $('.words').text(smallwords); 
});   