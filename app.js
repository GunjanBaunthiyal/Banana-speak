var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputD = document.querySelector("#txt-output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getURL(a){
    return serverURL + "?" + "text=" + a
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something went wrong with the server! Try again after some time")
}

function clickHandler(){
    var txt = txtInput.value;

    fetch(getURL(txt))
        .then(response =>  response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputD.innerText = translatedText;  
        })
        .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler)