//console.log("Hey dude my name is asif")

//alert("This works man")

//var username = prompt("Give me username")
//console.log(username)
//alert ("this script works bro " + username)

console.log(document)
var heading = document.querySelector(".heading")
console.log(heading.textContent)
// heading.textContent = username
var output = document.querySelector("#textOutput")
console.log(output.textContent)

var btnTranslate = document.querySelector("#btnTranslate");

  var textInput = document.querySelector("#textInput");

    btnTranslate.addEventListener("click", function () {
      var input = textInput.value
      output.textContent = input

})

var outputDiv = document.querySelector("#output")


 