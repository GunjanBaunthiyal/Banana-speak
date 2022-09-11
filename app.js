var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputD = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(a){
    return serverURL + "?" + "text=" + a
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something went wrong with the server! Try again after some time")

}

/*Method1
btnTranslate.addEventListener("click", function clickEventHandler(){
    var txt = txtInput.value;  //taking input

    fetch(getTranslationURL(txt))
    .then(response =>  response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputD.innerText = translatedText;
    })
    .catch(errorHandler)
};*/

//outputD.innerText = "";

//Or method2 
function clickHandler(){
    var txt = txtInput.value;  //taking input

    fetch(getTranslationURL(txt))
        .then(response =>  response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputD.innerText = translatedText;   //output
        })
        .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler)