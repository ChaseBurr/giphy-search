// require("dotenv").config();

const API_KEY = "8AxVwoZxZZJ9pepiooO2glfC6o20n0ca";

const giphLimit = 32;

document.addEventListener("DOMContentLoaded", init);
document
     .querySelector("#searchForm")
     .addEventListener("submit", (e) => e.preventDefault());

function init() {
     document.getElementById("btnSearch").addEventListener("click", (e) => {
          e.preventDefault();
          let url =
               "https://api.giphy.com/v1/gifs/search?api_key=" +
               API_KEY +
               "&limit=" +
               giphLimit +
               "&q=";
          let str = document.getElementById("search").value.trim();
          url = url.concat(str);
          fetch(url)
               .then((response) => response.json())
               .then((content) => {
                    let out = document.querySelector(".gifs");
                    console.log(content);

                    for (let i = 0; i < giphLimit; i++) {
                         let img = document.createElement("img");
                         img.className = "giphy";
                         img.src = content.data[i].images.downsized.url;
                         img.alt = content.data[i].title;

                         let fc = document.createElement("p");
                         // fc.className = "giph_title";
                         // fc.textContent = content.data[i].title;

                         let fig = document.createElement("a");
                         fig.href = content.data[i].url;
                         fig.target = "_blank";
                         fig.className = "gif";
                         fig.appendChild(img);
                         fig.appendChild(fc);

                         out.insertAdjacentElement("afterbegin", fig);
                    }

                    document.querySelector("#search").value = "";
               })
               .catch((err) => {
                    console.error(err);
               });
     });
}
