
const apiKey = "13ce8e99caef4532989b937695582dab";
const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=13ce8e99caef4532989b937695582dab";
const loadingElement = document.querySelector ("#loading");
const postContainer = document.querySelector ("#post-container");



async function getHeadLines (){
    const response = await fetch (url);
    console.log (response);

    const data = await response.json();
    console.log (data);

    loadingElement.classList.add ("hide");

    if (data.articles) {
        data.articles.forEach((news) => {
            const div = document.createElement ("div");
            const title = document.createElement ("h2")
            const author = document.createElement ("p")
            const description = document.createElement ("p")


            title.style.color = "#2a0173";
            div.style.backgroundColor = "white";
            div.style.borderRadius = "5px";
            div.style.padding = "5px";
            div.style.marginBottom = "10px";
            div.style.width = "800px";
            
            title.innerText = news.title;
            author.innerText = news.author;
            description.innerText = news.description;

            div.appendChild (title);
            div.appendChild (author);
            div.appendChild (description);

    

            postContainer.appendChild(div);
        });
    } else {
        console.error("Não foi possível obter as notícias");
    }
}

getHeadLines();
