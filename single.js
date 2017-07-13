var search = location.search.substring(1);
var query = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
$.ajax({
    type: 'GET',
    url: query.url + '.json',
    success:    
        function(success){
            var post = success[0].data.children[0].data;
            var heading = post.title;
            var content = post.url;
            if(content.indexOf('deviantart') != -1){
                $('#content').css('background-image', 'url(http://24.media.tumblr.com/tumblr_lrtg75zU8m1qi29efo1_500.gif)');
                $('#content').css('height', '35em');
                $('#hidden').removeClass('hide');
                $('#hidden').attr('href', content);
            } else{
            $('#content').css('background-image', 'url(' + content + ')');
            }
            $('#caption').text(heading);


        }
    })



// Javascript way
// document.addEventListener('DOMContentLoaded', getSub);
// var xhttp = new XMLHttpRequest();
// function getSub(){
//     xhttp.onreadystatechange = function(json) {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log('yay')
//         }
//     };
// };
// xhttp.open("GET", query.url + ".json", true);
// xhttp.send();