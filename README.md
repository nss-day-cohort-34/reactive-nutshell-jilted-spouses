# Nutshell: The Information Dashboard
### Creators (aka Jilted Spouses)
1. Joe Snyder
1. Curtis Crutchfield
1. Bennett Foster
1. Ellie Ash

Nutshell is a dashboard for people to organize their daily tasks, events, news articles, friends, and chat messages.

These are all of the skills and concepts that Energetic Beefcake used to create Nutshell.

1. Functions
1. Databases/API
1. Github
1. Objects
1. CSS
1. React
1. Reactstrap/Bootstrap
1. Modals
1. Data entry/editing
1. Relational data
1. Session Storage

## How to Launch Nutshell

1. Clone the repository from Github
1. Open your terminal and type the command "npm install" to install React
1. In the main project directory, create a new directory called "API"
1. In the API directory, create a file called "database.json"
1. Copy the sample data below into database.json
1. Run json-server in port 5002 with database.json
1. In the terminal, type the command "npm start". You are now ready to use Nutshell!

## Sample Data
```json
{
  "users": [
    {
      "email": "joe@email.com",
      "username": "joe",
      "password": "1234",
      "id": 1
    },
    {
      "email": "ellie@email.com",
      "username": "ellie",
      "password": "1234",
      "id": 2
    },
    {
      "email": "bennett@email.com",
      "username": "bennett",
      "password": "1234",
      "id": 3
    },
    {
      "email": "curtis@email.com",
      "username": "curtis",
      "password": "1234",
      "id": 4
    }
  ],
  "chat": [
    {
      "userId": 4,
      "message": "Welcome to the chat!",
      "id": 1
    }
  ],
  "news": [
    {
      "title": "Matrix 4 Coming Soon",
      "userId": 3,
      "synopsis": "We are living in the Keanussance",
      "url": "https://www.yahoo.com/entertainment/fans-are-pumped-to-see-keanu-reeves-in-matrix-4-we-are-living-in-the-keanussance-234851660.html",
      "timestamp": "9/5/2019, 10:16:09 AM",
      "id": 1
    }
   ],
  "events": [
    {
      "eventName": "Present Nutshell",
      "date": "2019-09-05",
      "userId": 2,
      "eventLocation": "NSS",
      "id": 1
    }
  ],
  "tasks": [
    {
      "id": 1,
      "userId": 2,
      "taskName": "Push to Github",
      "date": "2019-09-05",
      "isCompleted": false
    },
    {
      "id": 3,
      "userId": 2,
      "taskName": "Do the dishes",
      "date": "2019-09-01",
      "isCompleted": false
    }
  ],
  "connections": [
    {
      "id": 1,
      "userId": 1,
      "friendId": 2
    }
  ]
}
```
