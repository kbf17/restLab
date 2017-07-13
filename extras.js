various code that didn't work


// document.addEventListener('DOMContentLoaded', getSub);


// function getSub(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log('yay');
//         }
//     };
//     // xhttp.open("GET", "https://www.reddit.com/r/totallynotrobots/.json", true);
//     // xhttp.send();
// };

// var json = "https://www.reddit.com/r/totallynotrobots/.json";
// var js = JSON.parse(json);



// function getObjects(obj, key, val) {
//     var objects = [];
//     for (var i in obj) {
//         if (!obj.hasOwnProperty(i)) continue;
//         if (typeof obj[i] == 'object') {
//             objects = objects.concat(getObjects(obj[i], key, val));    
//         } else 
//         //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
//         if (i == key && obj[i] == val || i == key && val == '') { //
//             objects.push(obj);
//         } else if (obj[i] == val && key == ''){
//             //only add if the object is not already in the array
//             if (objects.lastIndexOf(obj) == -1){
//                 objects.push(obj);
//             }
//         }
//     }
//     return objects;
// }

// console.log(getObjects(js, 'url'));



    jsonURL = jsonURL.replace(/\\n/g, "\\n")  
               .replace(/\\'/g, "\\'")
               .replace(/\\"/g, '\\"')
               .replace(/\\&/g, "\\&")
               .replace(/\\r/g, "\\r")
               .replace(/\\t/g, "\\t")
               .replace(/\\b/g, "\\b")
               .replace(/\\f/g, "\\f");
    jsonURL = jsonURL.replace(/[\u0000-\u0019]+/g,"");

    JSON.parse(jsonURL);


// $(document).ready(function () {
//     var jsonURL = "https://www.reddit.com/r/totallynotrobots/.json";
//     $.getJSON(jsonURL, function (json){
//         // $.each(success.data.children, function(){
//         //     $('body').append($('<h3></h3>')).append(all.data.title);
//         //     $('body').append($('<div></div>')).append(all.data.url);
//         // })
//         console.log(json);
//         console.log(json.data);
//         var all = json.data.children
//         console.log(all.data.title);

    
//     })



// })


function formatSrc(url) {
}