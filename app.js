var url = "https://api.funtranslations.com/translate/dolan.json"


var input = document.querySelector("#textInput")
console.log(heading.textContent)

var output = document.querySelector("#textOutput")
console.log(output.textContent)

var btnTranslate = document.querySelector("#btnTranslate");


    btnTranslate.addEventListener("click", function () {
           
           var userInput = input.value;
           fetch(url + "?text=" + userInput).then(function (response){
               return response.json()
           }).then(function (data){
               console.log(data);
               output.textContent = data.contents.translated;
           })

})

var outputDiv = document.querySelector("#output")


 