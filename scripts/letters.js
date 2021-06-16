function letters(length, characters) {
    let result = '';
    let charactersLength = characters.length;

    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   
    return result;
}

function divWords(letters, len, wordlimit){
    let words = [];
    let charactersLength = letters.length;

    for (var j = 0; j < wordlimit; j++){
        result = "";
        for ( var i = 0; i < len; i++ ) {
            result += letters.charAt(Math.floor(Math.random() * charactersLength));
        }

        words.push(result);
    }

    return words;
}

var characters = letters(16000, "fjkd")
var words = divWords(characters, 4, 10)

console.log(words)