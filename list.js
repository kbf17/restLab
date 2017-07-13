$.ajax({
    type: 'GET',
    url: 'https://www.reddit.com/r/ImaginaryOoo/.json',
    success:    
        function(success){
            var all = success.data.children;
            $.each(all, function(){
                if(i < 26){
                    i++;
                    var post = all[i].data.url;
                    var title = all[i].data.title;
                    var link = $('<a></a>');
                    var titles = $('<h3></h3>');                        
                    var img = $('<img>');
                    if(post.indexOf("deviantart") != -1){
                        post = all[i].data.thumbnail;
                        if(post.indexOf('nsfw') != -1){
                            post = 'https://2s7gjr373w3x22jf92z99mgm5w-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/shutterstock_nsfw_pockygallery.jpg';
                        }  
                    }
                    img.attr('src', post); 
                    titles.append(title);
                    link.attr('href', 'single.html?url=https://www.reddit.com' + all[i].data.permalink);
                    titles.appendTo(link);
                    link.appendTo($('#pictures'));
                    img.appendTo($('#pictures'));
                }
            })
        }
    })

var i = -1;
