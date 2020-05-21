const apikey = '8AxVwoZxZZJ9pepiooO2glfC6o20n0ca';
const giphLimit = 30;

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.getElementById("btnSearch").addEventListener("click", ev => {
        ev.preventDefault();
        let url = 'https://api.giphy.com/v1/gifs/search?api_key='+apikey+'&limit='+giphLimit+'&q=';
        let str = document.getElementById('search').value.trim();
        url = url.concat(str);
        fetch(url)
        .then(response => response.json())
        .then(content => {
            let out = document.querySelector('.gifs');

            for (let i = 0; i < giphLimit; i++) {
                let fig = document.createElement('div');
                let img = document.createElement('img');
                let fc = document.createElement('p');

                img.className = 'gif';
                fc.className = 'giph_title';
                img.src = content.data[i].images.downsized.url;
                img.alt = content.data[i].title;
                fc.textContent = content.data[i].title;
                fig.appendChild(img);
                fig.appendChild(fc);
                out.insertAdjacentElement('afterbegin', fig);
            }

            document.querySelector('#search').value = "";
        })
        .catch(err => {
            console.error(err);
        });
    });
}