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

