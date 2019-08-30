const remoteURL = "http://localhost:5002"

export default {
    getEvent(id) {
        return fetch(`${remoteURL}/events/${id}`)
            .then(response => response.json());
    },  
    getAllEvents() {
        return fetch(`${remoteURL}/events`)
            .then(response => response.json());
    },
    postEvent(eventObject) {
        return fetch(`${remoteURL}/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObject)
        }).then(response => response.json())
    },
    deleteEvent(id) {
        return fetch(`${remoteURL}/events/${id}`,
        {method: "DELETE"
        }).then(response => response.json())
    },
    editEvent(editedEvent) {
        return fetch (`${remoteURL}/events/${editedEvent.id}`,  {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedEvent)
        }).then(response => response.json());
    }
}