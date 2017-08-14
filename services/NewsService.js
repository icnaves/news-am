export const getNews = () => fetch('http://shavomusic.ru/api_news_1/')
    .then(data => {
        return data.json()
    })

export const getNewById = id => fetch('http://shavomusic.ru/api_news_1/?id=' + id)
    .then(data => {
        return data.json()
    })