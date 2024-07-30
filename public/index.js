// variables
const generalBtn = document.getElementById("genral");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sport");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

// Array
var newsDataArr = [];

// apis 
const API_KEY = "83aeea2589b347ea8b31babf82d38dd7";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload = function() {
    newsType.innerHTML = "<h4>Headlines</h4>";
    fetchHeadlines();
};

generalBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>General news</h4>";
    fetchGeneralNews();
});

businessBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Business</h4>";
    fetchBusinessNews();
});

sportsBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Sports</h4>";
    fetchSportsNews();
});

entertainmentBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Entertainment</h4>";
    fetchEntertainmentNews();
});

technologyBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Technology</h4>";
    fetchTechnologyNews();
});

searchBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Search : " + newsQuery.value + "</h4>";
    fetchQueryNews();
});

const fetchHeadlines = async () => {
    try {
        const response = await fetch(HEADLINES_NEWS + API_KEY, { mode: 'cors' });
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else {
            console.error('Error:', response.status, response.statusText);
            newsdetails.innerHTML = "<h5>No data found.</h5>";
        }
    } catch (error) {
        console.error('Error:', error);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

const fetchGeneralNews = async () => {
    try {
        const response = await fetch(GENERAL_NEWS + API_KEY, { mode: 'cors' });
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else {
            console.error('Error:', response.status, response.statusText);
            newsdetails.innerHTML = "<h5>No data found.</h5>";
        }
    } catch (error) {
        console.error('Error:', error);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

const fetchBusinessNews = async () => {
    try {
        const response = await fetch(BUSINESS_NEWS + API_KEY, { mode: 'cors' });
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else {
            console.error('Error:', response.status, response.statusText);
            newsdetails.innerHTML = "<h5>No data found.</h5>";
        }
    } catch (error) {
        console.error('Error:', error);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

const fetchEntertainmentNews = async () => {
    try {
        const response = await fetch(ENTERTAINMENT_NEWS + API_KEY, { mode: 'cors' });
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else {
            console.error('Error:', response.status, response.statusText);
            newsdetails.innerHTML = "<h5>No data found.</h5>";
        }
    } catch (error) {
        console.error('Error:', error);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

const fetchSportsNews = async () => {
    try {
        const response = await fetch(SPORTS_NEWS + API_KEY, { mode: 'cors' });
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else {
            console.error('Error:', response.status, response.statusText);
            newsdetails.innerHTML = "<h5>No data found.</h5>";
        }
    } catch (error) {
        console.error('Error:', error);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

const fetchTechnologyNews = async () => {
    try {
        const response = await fetch(TECHNOLOGY_NEWS + API_KEY, { mode: 'cors' });
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else {
            console.error('Error:', response.status, response.statusText);
            newsdetails.innerHTML = "<h5>No data found.</h5>";
        }
    } catch (error) {
        console.error('Error:', error);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

const fetchQueryNews = async () => {
    if (!newsQuery.value) return;

    try {
        const response = await fetch(SEARCH_NEWS + encodeURIComponent(newsQuery.value) + "&apiKey=" + API_KEY, { mode: 'cors' });
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else {
            console.error('Error:', response.status, response.statusText);
            newsdetails.innerHTML = "<h5>No data found.</h5>";
        }
    } catch (error) {
        console.error('Error:', error);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

function displayNews() {
    newsdetails.innerHTML = "";

    newsDataArr.forEach(news => {
        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height", "matchparent");
        image.setAttribute("width", "100%");
        image.src = news.urlToImage;

        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className = "text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className = "btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML = "Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });
}
