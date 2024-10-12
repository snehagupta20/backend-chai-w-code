# MongoDB
MongoDB is a NoSQL database that stores data in a document-oriented format. Unlike traditional relational databases (SQL), MongoDB is highly scalable and can handle large volumes of unstructured data.

- **Database**: It stores data in collections (like tables in SQL) but instead of rows and columns, MongoDB uses documents (like JSON objects).
- **Document-Oriented**: It stores data in BSON (Binary JSON) format, which allows flexibility in storing various types of data structures without strict schemas.

### How to Connect MongoDB to Your Project
1. **MongoDB Atlas**: A cloud-based solution for MongoDB. It's easy to set up and manage clusters (databases hosted in the cloud).
   - **Steps**:
     - Sign up for MongoDB Atlas.
     - Create a cluster (a place to store your databases).
     - Get the **connection string** (the URL needed to connect your project to MongoDB).
   - **In your project**:
     - Install dependencies: `npm install mongoose dotenv`
     - Add the MongoDB URI (Uniform Resource Identifier) to your `.env` file like this:
       ```
       MONGO_URI=your_connection_string
       ```

### Mongoose
Mongoose is a popular Node.js library that provides a schema-based solution for managing MongoDB data.

---

# Nodemon
Nodemon is a development tool for Node.js that automatically restarts your server when you save files. This improves productivity by avoiding manual restarts.

- **Installation**: `npm install --save-dev nodemon`
- **Usage**: Run the server using `nodemon` instead of `node`, and it will monitor your project files for changes.

---

# Prettier Ignore
`.prettierignore` is a file where you list the files or directories that Prettier (a code formatting tool) should ignore. For example:
```
node_modules
build
```
This ensures that unnecessary files (e.g., compiled code or third-party libraries) don't get formatted.

---

# Database Connection
There are multiple ways to set up a database connection in a Node.js project. The two common approaches are:

1. **In the `index.js` File**:
   - This method involves writing the connection logic directly inside the `index.js` file.
   - The connection function runs immediately when `index.js` is loaded.

2. **Separate `db` Directory**:
   - Create a separate folder (e.g., `db`) to organize all database-related code.
   - Use `require` or `import` to bring in the database connection logic into the `index.js` file.

### Important Tips:
- **Error Handling**: Always wrap database connections in `try-catch` blocks to handle errors gracefully.
- **Async/Await**: Since databases are often located in different regions, asynchronous code ensures the application waits for the response without blocking other tasks.

### Why Not Use One-Line `mongoose.connect`?
While the Mongoose documentation shows that you can connect using one line (`mongoose.connect(url)`), it's better to handle the connection in a more robust way with error handling (i.e., using `try-catch` blocks).

---

# DB Directory
This folder holds all the database-related logic and configurations. It helps separate concerns and keeps your project organized. 

- **Example Files**:
  - `db.js`: Code to connect to the MongoDB database.
  - `models/`: Directory for defining your Mongoose schemas and models.

---

# Constants.js
A file where you define and store constant values used throughout your project. This is useful for avoiding "magic numbers" or repeated strings in your code.

### Difference from `.env`:
- **`constants.js`**: Store project-specific constants (e.g., port numbers, limits, statuses).
- **`.env`**: Store sensitive or environment-specific information (e.g., API keys, database credentials).

---

# Async & Await
JavaScript's `async` and `await` features simplify working with asynchronous code (like network requests or database queries).

### Asynchronous Code
- **Synchronous Code**: Runs operations one after the other. If an operation takes a long time (like fetching data), it blocks the rest of the code from running.
- **Asynchronous Code**: Allows other operations to continue running while waiting for a slow task (like network requests or reading from a database).

### Async Function
- Declaring a function as `async` makes it asynchronous, meaning it returns a `Promise`.
- A `Promise` represents an eventual completion (or failure) of an asynchronous operation.

### Await
- Inside `async` functions, `await` pauses the execution until the `Promise` is resolved or rejected. This makes it easier to work with asynchronous code without chaining `.then()`.

### Why Use Async/Await for DB Functions?
- Async/await avoids the "callback hell" that occurs when many nested callbacks are used.
- It also makes code more readable and easier to handle errors using `try-catch`.

---

# Process.exit()
- **Purpose**: Terminates the Node.js process immediately.
- **Usage**: 
  - `process.exit(0)` for successful termination.
  - Any non-zero code (e.g., `process.exit(1)`) indicates an error.
- **When to Use**: You might use this when a critical error occurs, and you want to stop the application.

---

# Cookie-Parser
A middleware for parsing cookies from incoming HTTP requests. It simplifies reading and managing cookies sent by the client to the server.

### Example:
```js
const cookieParser = require('cookie-parser');
app.use(cookieParser());
```

---

# CORS
CORS stands for Cross-Origin Resource Sharing, a browser-based mechanism that restricts how resources on a web page can be requested from another domain. 

- **Why Use CORS Middleware?**: To allow your API to be accessed from different domains.

### Example:
```js
const cors = require('cors');
app.use(cors());
```

---

# Bcrypt vs Bcrypt.js
- **Bcrypt** and **Bcrypt.js** are both used for hashing passwords.
- **Difference**: `bcrypt` is a native Node.js library, while `bcrypt.js` is the JavaScript implementation.
- **Use Case**: Hashing passwords before storing them in the database for security.

### Installation:
```bash
npm install bcrypt
```

---

# JWT (JSON Web Token)
JWT is a method for securely transmitting information between parties as a JSON object. It is commonly used for authentication.

- **Bearer Token**: A type of token sent with the `Authorization` header in HTTP requests.
- **Use Case**: Verify users and authorize access to protected routes.

---

# Cloudinary
Cloudinary is a cloud-based service that handles image and video management. It is commonly used for storing and manipulating images.

---

# Multer
Multer is a Node.js middleware used for handling file uploads. It works with `multipart/form-data` forms to handle file input fields.

---

# FS (File System)
The `fs` module in Node.js provides an API for interacting with the file system. You can use it to read, write, delete, and manipulate files.

### Example:
```js
const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

