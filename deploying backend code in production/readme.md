# How to Deploy Backend Code in Production

In this guide, we'll be creating our own server using **Express.js** and deploying it to production. The server will listen for a `GET` request and respond accordingly.

## Step 1: Set Up an Express.js Server

### 1. Create an Empty Node.js Application

We need to set up the project environment before adding any dependencies or code.

#### How to Create an Empty Node.js Application:

- Open the terminal.
- Run `npm init` to initialize npm in your terminal.
- The terminal will ask some questions. Answer them accordingly.
- After answering the questions, you'll notice that a `package.json` file has been added to your project folder.

**Fun Fact**:  
If you want to run a file, you can open the terminal, type `ls` to list files, and then type `node index.js` to run your `index.js` file.

### 2. How to Run Your File Through the `package.json` File?

We can create script commands inside the `package.json` file.

For example:
```json
"scripts": {
  "start": "node index.js"
}
```

In this example, we've created a script command named `start` that will run `node index.js`.  
To run this script, simply type `npm run start` in the terminal.  
This will run both `npm` and your `index.js` file.

### 3. Starting with Backend Code

First, install **Express.js** in your project directory:
```bash
npm install express
```

Refer to the [Express.js documentation](https://expressjs.com/) for more information.

---

## About the `.env` File

The `.env` file is where you store sensitive variables and other configuration values that may differ across environments.

- Most people write variables in uppercase in the `.env` file.
- Make sure to check out the [dotenv documentation](https://github.com/motdotla/dotenv) for more details.

```bash
npm install dotenv
```

Happy coding!
```
