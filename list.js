
$.ajax({
    type: 'GET',
    url: 'https://www.reddit.com/r/ImaginaryOoo/.json',
    success:    function(success){
                    $.each(success.data.children, function(){
  
                        if(i < 26){
                            i++;
                            var post = success.data.children[i].data.url;
                            var title = success.data.children[i].data.title;
                            var titles = $('<h3></h3>');                        
                            var img = $('<img>');
                            titles.append(title);
                            img.attr('src', post);
                            titles.appendTo($('#pictures'));
                            img.appendTo($('#pictures'));
                            
                        
                        } else{
                            return;
                        }
                    })
                    console.log('success');
                    console.log(success);
                    console.log(success.data.children);
                }

})

var i = -1;


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

