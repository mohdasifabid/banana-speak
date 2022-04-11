var url = "https://api.funtranslations.com/translate/dolan.json"
var input = document.querySelector("#textInput")
var output = document.querySelector("#textOutput")
var btnTranslate = document.querySelector("#btnTranslate");
var outputDiv = document.querySelector("#output")

btnTranslate.addEventListener("click", function () {
     var userInput = input.value;
      fetch(url + "?text=" + userInput).then(function (response){
          return response.json()
        }).then(function (data){
            output.textContent = data.contents.translated;
        })
})



 