# YoutubeSubscribers
Here’s a sample **README.md** file for your project, covering all the essential points based on the rubrics and requirements:

---

# Subscriber API

A simple RESTful API built using **Node.js**, **Express**, and **MongoDB** that allows you to manage subscribers. The API supports retrieving subscriber data by ID or fetching all subscribers and their details.

## Features
- **GET /subscribers**: Fetches an array of all subscribers.
- **GET /subscribers/names**: Fetches only the names and subscribed channels of all subscribers.
- **GET /subscribers/:id**: Fetches a subscriber by their ID.
- **Error Handling**: Returns meaningful error messages for invalid requests.

## Technologies Used
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing subscribers.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **dotenv**: Loads environment variables from a `.env` file.

## Project Structure

```bash
project-folder/
├── src/
│   ├── controllers/
│   │   └── subscriberController.js  # Contains logic for subscriber operations
│   ├── models/
│   │   └── subscribers.js           # Subscriber schema using Mongoose
│   ├── routes/
│   │   └── subscriberRoutes.js      # Defines subscriber-related routes
│   ├── createDatabase.js            # Script to create a local database
│   ├── app.js                       # Combines routes and middleware
│   └── index.js                     # Connects to the database and starts the server
├── package.json
├── .env
└── README.md
```

## Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/) installed.
- [MongoDB](https://www.mongodb.com/) installed locally or using MongoDB Atlas for a cloud database.
- **npm** (comes with Node.js).

### Steps to Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd your-repo-name
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**:
   - Create a `.env` file in the project root.
   - Add the following variables:
     ```
     MONGODB_URI=mongodb://localhost:27017/subscribersDB
     PORT=3000
     ```

5. **Create the Database**:
   - Ensure MongoDB is running on your machine.
   - Run the following command to create the database:
     ```bash
     node src/createDatabase.js
     ```

6. **Start the Server**:
   ```bash
   node src/index.js
   ```

7. **API Endpoints**:
   - Now the server should be running on [http://localhost:3000](http://localhost:3000).

## API Endpoints

### 1. **GET /subscribers**
- **Description**: Fetch all subscribers.
- **Response**: Returns an array of subscribers.
- **Example**:
  ```json
  [
    {
      "_id": "613a3d2d46e2402f54a85a5f",
      "name": "John Doe",
      "subscribedChannel": "Tech World",
      "subscribedDate": "2024-01-01T00:00:00.000Z"
    }
  ]
  ```

### 2. **GET /subscribers/names**
- **Description**: Fetch only the name and subscribedChannel fields for all subscribers.
- **Response**: Returns an array of objects with name and subscribedChannel.
- **Example**:
  ```json
  [
    {
      "name": "John Doe",
      "subscribedChannel": "Tech World"
    }
  ]
  ```

### 3. **GET /subscribers/:id**
- **Description**: Fetch a specific subscriber by their ID.
- **Response**: Returns the subscriber object with the given ID.
- **Error**: Returns a 400 error if the ID is invalid or not found.
- **Example**:
  ```json
  {
    "_id": "613a3d2d46e2402f54a85a5f",
    "name": "John Doe",
    "subscribedChannel": "Tech World",
    "subscribedDate": "2024-01-01T00:00:00.000Z"
  }
  ```

  If ID not found:
  ```json
  {
    "message": "Subscriber not found"
  }
  ```


## Validation
Validation is implemented for:
- **ID format**: Requests with an invalid MongoDB ObjectId return a `400 Bad Request` response.

## Testing
Use **Postman** or **cURL** to test the API endpoints. Automated tests can be added using frameworks like **Mocha** and **Chai**.

## Deployment
- You can deploy the app using services like **Heroku**, **Render**, or **Vercel**.
- Ensure you set up your environment variables on the server.

### Example Heroku Deployment Steps:
1. Push your code to GitHub.
2. Create a Heroku app and link your GitHub repository.
3. Add environment variables (e.g., MongoDB URI) in the Heroku dashboard.
4. Deploy the app and test your endpoints.

## Future Enhancements
- Add more features like updating and deleting subscribers.
- Implement search functionality for subscribers.
- Add authentication and authorization.

---

## License
This project is licensed under the MIT License.

---

## Video Demo
For a complete demonstration, check out this [video](#) explaining the API, its usage, and its codebase.

---

This README is designed to be comprehensive, explaining all the core functionalities, instructions for setup, and deployment details. Make sure to update the links (e.g., GitHub repo, demo video) based on your actual project deployment and repository.