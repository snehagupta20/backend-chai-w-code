# How to Deploy Backend Code in Production

In this guide, we'll be creating our own server using **Express.js** and deploying it to production. The server will listen for a `GET` request and respond accordingly.

### Step 1: Set Up an Express.js Server

1. **Create an Empty Node.js Application**
- we create an empty node.js application to set up the project env before adding any dependencies or code. 
- how to create an empty node.js application? lets see
  - open terminal
  - npm init -> initialise npm in ur terminal
  - after that, terminal will ask some questions 
  - after answering questions, u can notice that aapke folder mei package.json file add ho chuki hai

- fun fact:
if u want to run a file, u can also go to terminal, type ls and type node index.js and ur file index.js will run. 

2. how to run ur file through package json file?
- we can make script commands
   "scripts": {
    "start": "node index.js"
  },

look maine ye banaya, maine ek script mei ek command banai "start" which will run this node index.js 
so, if i write npm run start,
then npm run ho jayega aur
index.js file bhi run ho jayegi


------------13:22------------