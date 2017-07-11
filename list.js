document.addEventListener('DOMContentLoaded', getSub);


function getSub(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse();
            console.log('yay');
        }
    };
    xhttp.open("GET", "https://www.reddit.com/r/totallynotrobots/.json", true);
    xhttp.send();
};






// $(document).ready(function () {
//     var jsonURL = "https://www.reddit.com/r/totallynotrobots/.json";
//     $.getJSON(jsonURL, function (json){
//         var imgList= "";
//         $.each(json.url, function () {
//             imgList += '<li><img src= "' + this.imgPath + '"></li>';
//         });
//         $('div.pictures').append(imgList);
//     });
// });
