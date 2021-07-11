//console.log("Hey dude my name is asif")

//alert("This works man")

//var username = prompt("Give me username")
//alert ("this script works bro " + username)

var btnTranslate = document.querySelector("#btnTranslate");

//button is not working
var textInput = document.querySelector("#textInput");

btnTranslate.addEventListener("onclick", function () {
    console.log("Clicked");
    console.log("input", textInput.value);
})


 