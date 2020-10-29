const app = {};

app.key = `228073f89f70a5a70413d06777bf99d5`;


app.getHero = function (name) {
    $.ajax({
        url: 'https://gateway.marvel.com/v1/public/characters',
        method: 'GET',
        format: 'json',
        data: {
            apikey: '228073f89f70a5a70413d06777bf99d5',
            hash: 'd1b5db569df5a36801967bfe65b6da39',
            ts: 1,
            name: name,
        }
    }).then((data) => {
        console.log(data.data);
        $('.data').empty();
        app.displayGif(data.data)
    })
};


app.displayGif = function(data){
    data.results.forEach(gif => {
        // console.log(gif);
        
        // console.log(`${gifHTML}`);
        // console.log(`${nameHTML}`);
        const imgHTML = `<div class="hero"><img src="${gif.thumbnail.path}.jpg"></div>`
        const gifHTML= `<div class="desc">
        <p class=text>Background:<br><br>${gif.description}</p></div>`
        const nameHTML = `<p>${gif.thumbnail.path}.jpg</p>`
        $('.data').append(imgHTML);
        $('.data').append(gifHTML);
        
    });
}

 
app.init = function(){
    $('form').on('submit', function(event){
        event.preventDefault();
        const selection = $('input').val();
        console.log(selection)
        app.getHero(selection);
    })
}


$(function () {
    app.init();
 })
   
   
