# finalGameDesign Repository Overview

## Introduction

The `finalGameDesign` repository is a web application that employs React for the frontend, Node.js for the backend, and MongoDB as the database. This document aims to elucidate the repository's structure and functionality, targeting those unfamiliar with these technologies.

## Setting Up the Repository Locally

To get the application up and running on your local machine, follow these steps:

### Clone the Repository

```bash
git clone https://github.com/lpanavas/finalGameDesign.git
```

### Navigate to the Project Directory

```bash
cd finalGameDesign
```

### Install Frontend Dependencies

```bash
npm install
```

### Navigate to the Server Directory

 ```bash
cd server
 ```

### Install Backend Dependencies

 ```bash
npm install
```

### Create Environment File

Create a new file named `.env` in the `server` directory using your preferred text editor. Paste your MongoDB URI string and save the file. Look at the AWS documentation doc to find the string. Search for ATLAS_URI

### Run the Backend

 ```bash
npm run dev
 ```

### Run the Frontend

Open up a new terminal. 

Navigate back to the `finalGameDesign` directory and run:

 ```bash
npm start
 ```

## Frontend: React

### Entry Point

- `src/App.js`: Sets up routing to different pages.

### Pages

- Various pages like `LandingPage.js`, `GamePage.js`, etc., handle different aspects of the user interface.

### Components

- Reusable UI elements like `Button.js` and `Choices.js`.

### Data

- JSON files such as `cards.json` and `comparisons.json` store game data.

## Backend: Node.js

### Server Setup

- `server/server.js`: Initializes the server and MongoDB connection.

### Routes

- `server/routes/index.js`: Defines API routes for data retrieval and manipulation.

### Controllers

- `server/controllers/dataController.js`: Implements the logic for API routes.

## Frontend-Backend Communication

The frontend and backend communicate via HTTP requests, often using the `fetch` API in React. The backend exposes several API endpoints defined in `server/routes/index.js`. When the frontend needs data or wants to send data, it makes a request to these endpoints. The backend then processes the request and sends back a response, which the frontend uses to update the UI.

## Database: MongoDB

- MongoDB is used for data storage, with the schema defined in `server/models/data.model.js`.


# finalGameDesign Communication Explanation

## Overview

This repository is a full-stack game project using React for the frontend and Node.js with Express for the backend. MongoDB is used as the database. Below is a detailed explanation of how the frontend communicates with the backend and MongoDB.

## Frontend to Backend Communication

### HTTP Requests
The frontend uses Axios to make HTTP requests. In \`src/App.js\`, the \`saveGameData\` function sends a POST request to \`localhost:5000/data/add\`.

```javascript
axios.post(\`localhost:5000/data/add\`, {
  userID,
  outputData,
});
```

### User Actions
The frontend uses React and has different pages (\`LandingPage\`, \`GamePage\`, etc.). User actions on these pages can trigger these HTTP requests.

## Backend to MongoDB Communication

### Server Setup
The backend uses Express and is set up in \`server/server.js\`. It listens on port 5000 and uses CORS and JSON middleware.

```javascript
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
```

### Database Connection
The backend connects to MongoDB using Mongoose. The connection string is stored in an environment variable.

```javascript
mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

### API Endpoints
The backend has a \`/data\` route, which is likely where the frontend's HTTP requests are directed.

```javascript
const dataRouter = require("./routes");
app.use("/data", dataRouter);
```

## Response

After the backend has processed the HTTP request and interacted with MongoDB to fetch or update data, it sends a response back to the frontend. This response usually contains the data requested or a confirmation that the operation was successful. In the context of this repository, the backend likely sends JSON-formatted data back to the frontend.

### Handling Response in Frontend

In the frontend, the Axios promise is resolved, and the `.then()` or `.catch()` methods are invoked based on the success or failure of the HTTP request. For example:

```javascript
axios.post(\`localhost:5000/data/add\`, {
  userID,
  outputData,
})
.then((response) => {
  console.log("Data added!", response.data);
})
.catch((error) => {
  console.log("Error:", error);
});
```

Upon receiving the data, the frontend updates its state, which in turn triggers a re-render of the relevant UI components. In React, this is typically done using `setState` or the `useState` hook.

```javascript
.then((response) => {
  this.setState({ gameData: response.data });
})
```

Or, using the `useState` hook:

```javascript
.then((response) => {
  setGameData(response.data);
})
```

This update in state will automatically reflect in the UI, thanks to React's reactivity model.


## Full Cycle

1. **User Action**: A user action in the frontend triggers an HTTP request to the backend (e.g., saving game data).
2. **Backend Logic**: The backend receives the request, processes it, and interacts with MongoDB to fetch or update data.
3. **Response**: The backend sends the data back to the frontend, which then updates the UI accordingly.

