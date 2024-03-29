const remoteURL = "http://localhost:5002"

export default {

//All methods that fetch the news data, with varying parameters and/or methods

    getNewsItem(id) {
        return fetch(`${remoteURL}/news/${id}`)
            .then(response => response.json());
    },
    getAllNews(userId) {
        return fetch(`${remoteURL}/news?userId=${userId}`)
            .then(response => response.json());
    },
    getUserNews() {
        return fetch(`${remoteURL}/news?_embed=users`)
            .then(response => response.json());
    },
    postNewsItem(newsObject) {
        return fetch(`${remoteURL}/news`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newsObject)
        }).then(response => response.json())
    },
    deleteNewsItem(id) {
        return fetch(`${remoteURL}/news/${id}`,
        {method: "DELETE"
        }).then(response => response.json())
    },
    editNewsItem(editedNewsItem) {
        return fetch (`${remoteURL}/news/${editedNewsItem.id}`,  {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedNewsItem)
        }).then(response => response.json());
    }
}