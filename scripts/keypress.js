$("html").keydown(function(e){
    let key = String.fromCharCode(event.which).toUpperCase();
    let htmlkey = ".key"+key;

    if(e.keyCode == 8){
        $(".delete").css("background-color", "#574ced");
    }

    else if(e.keyCode == 32){
        // user has pressed space
        $(".space").css("background-color", "#574ced");
    }

    else if(e.keyCode == 9){
        $(".tab").css("background-color", "#574ced");
    }

    else if(e.keyCode == 13){
        $(".return").css("background-color", "#574ced");
    }

    else if(e.keyCode == 16){
        if (e.originalEvent.code == "ShiftLeft"){
            $(".leftshift").css("background-color", "#574ced");
        }

        else {
            $(".rightshift").css("background-color", "#574ced");
        }
    }

    else if(e.keycode == 18){
        console.log("BRUH")
        if (e.originalEvent.code == "AltLeft"){
            $(".Alt").css("background-color", "#574ced");
        }

        else {
            $(".keyAlt").css("background-color", "#574ced");
        }
    }

    else if(e.keyCode == 219){
        $(".keysquareleft").css("background-color", "#574ced");
    }

    else if(e.keyCode == 221){
        $(".keysquareright").css("background-color", "#574ced");
    }

    else if(e.keyCode == 190){
        $(".period").css("background-color", "#574ced");
    }

    else if(e.keyCode == 188){
        $(".comma").css("background-color", "#574ced");
    }

    else if(e.keyCode == 186){
        $(".semicolon").css("background-color", "#574ced");
    }

    else if(e.keyCode == 222){
        $(".quote").css("background-color", "#574ced");
    }

    else if(e.keyCode == 191){
        $(".slash").css("background-color", "#574ced");
    }

    else if(e.keyCode == 220){
        $(".backslash").css("background-color", "#574ced");
    }

    else if(e.keyCode == 189){
        $(".dash").css("background-color", "#574ced");
    }

    else{
        console.log(htmlkey)
        $(htmlkey).css("background-color", "#574ced");
    }
});

$("html").keyup(function(e){
    let key = String.fromCharCode(event.which).toUpperCase();
    let htmlkey = ".key"+key;

    if(e.keyCode == 8){
        $(".delete").css("background-color", "rgb(243, 243, 243)");
    }

    else if(e.keyCode == 32){
        // user has pressed space
        $(".space").css("background-color", "rgb(243, 243, 243)");
    }

    else  if(e.keyCode == 9){
        $(".tab").css("background-color", "rgb(243, 243, 243)");
    }

    else if(e.keyCode == 13){
        $(".return").css("background-color", "rgb(243, 243, 243)");s
    }

    else if(e.keyCode == 16){
        console.log(e.originalEvent.code)
        if (e.originalEvent.code == "ShiftLeft"){
            $(".leftshift").css("background-color", "rgb(243, 243, 243)")
        }

        else {
            $(".rightshift").css("background-color", "rgb(243, 243, 243)")
        }
    }

    else if(e.keyCode == 219){
        $(".keysquareleft").css("background-color", "rgb(243, 243, 243)");
    }

    else if(e.keyCode == 221){
        $(".keysquareright").css("background-color", "rgb(243, 243, 243)");
    }

    else if(e.keyCode == 17){
        if (e.originalEvent.code == "ControlLeft"){
            $(".leftctrl").css("background-color", "rgb(243, 243, 243)");
        }

        else {
            $(".keyCrtl").css("background-color", "rgb(243, 243, 243)");
        }
    }

    else if(e.keyCode == 190){
        $(".period").css("background-color", "rgb(243, 243, 243)");
    }

    else if(e.keyCode == 188){
        $(".comma").css("background-color", "rgb(243, 243, 243)");
    }

    else if(e.keyCode == 186){
        $(".semicolon").css("background-color", "rgb(243, 243, 243)");
    }

    else if(e.keyCode == 222){
        $(".quote").css("background-color", "rgb(243, 243, 243)");
    }

    else if(e.keyCode == 191){
        $(".slash").css("background-color", "rgb(243, 243, 243)");
    }

    else if(e.keyCode == 220){
        $(".backslash").css("background-color", "rgb(243, 243, 243)");
    }

    else if(e.keyCode == 189){
        $(".dash").css("background-color", "rgb(243, 243, 243)");
    }

    else{
        $(htmlkey).css("background-color", "rgb(243, 243, 243)");
    }
});

// $("html").keydown(function(e){
//     let key = String.fromCharCode(event.which).toUpperCase();
//     console.log(key.keyCode);

//     if(e.keyCode == 8){
//     }
//     if(e.keyCode == 32){
//         // user has pressed space
//         $(".space").css("background-color", "#574ced");
//     }

//     console.log(key);
//     let htmlkey = ".key"+key;
// });