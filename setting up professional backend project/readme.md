# what is mongo db
- database
- can handle large volumes of data (unlike traditional dbs)
- stores in document-oriented format using JSON like docs
- stores in similar to JSON objects, uses format called BSON (Binary JSON)

## how to connect mongoDB to ur project
- use mongoDB atlas
- sign up, create cluster
- get connection string 
- npm install mongoose dotenv
- add MONGO_URI (uniform resource identifier) to .env

# node mon 
automatically restartes the server as files are saved

# .prettierignore
tells kon konsi file mei prettier ko ignore karna hai

# data base connection
database connection 2-3 tareeke se ho sakta hai
1. sara code index.js file mei
so jab index.js file load ho, to jis function mei code likha hai (index mei) vo turant execute ho jaye

2. koi db naam ka folder, jo connection ka fucntion hai vo db mei, and usko import karu in index.js

- whenevr u talk to a database, to problems aa sakti hai, 
try catch mei rap karo
or promises

- database is always in another continent. async await ka dhayn rakho

- when u see mongoose ki documentation, it tells ki u can connect ur db iin one line
mongoose.connect(url)
but its bad approach
u should not connect db in 1 line

- whenever connecting to db, ya whenever talking to db, use try-catch 
- handles errors gracefully & helps in debugging


# about DB directory in our project
- used to organise db-related logic
- code to connect db & related code

# constants.js
- define & store constant values
- .env mei bhi we store constants but its for different purpose 
- .env is mainly for sensitive info - like api keys, db credentials, URLs

# async & await
- js features simplify working w/ asynchronous code
### asynchronous code
- programming concept - allow program to perform tasks w/out blocking execution of other tasks.
- synchronous code : ops are executed one after another. if an op takes long time, it blocks entire execution
_________________

- js is single threaded - it can execute 1 op at a time
- but, can also perform non-blocking ops using async code - allows other tasks to continue running while waiting for slow op (like n/w req)

## async
- async is used to define func as asynchronous
- implicitely returns a promise
### promise
- built in object
- reps completion/failure of async ops & resulting value
- 3 states: pending, fulfilled, rejected 
_______________________

- any func marked as async can use await keyword inside
ex:
async function fetchdata(){
    return "data rec";
}

## await
- pause execution of async func until promise is resolved/rejected
async function fetchdata(){
    let result = await fetch(<url>)
    let data = await result.json(); //pauses until fetch resolves
}
- await pauses func execution until fethc req is completed

## why need async & await for db functions?
- avoid callback - complex nesting. also known as "callback hell"
- try/catch block with async func


# process.exit()
- terminates node.js process immediately
- exit code : 0 means success & non zero code indicates program exited due to an error
- can be usefull in situations where critical err occurs


# cookie-parser
- parses cookies attached to client reqs
- easier to read & manipulate cookies

# cors
- cross origin resource sharing 
- implemented by browser - controls how resources (APIs) can be accessed from diff origins


# bcrypt vs bcrypt.js
- same
- difference?
- helps to hash ur pass
- npm i bcrypt jsonwebtoken

# jwt
- bearer token
- key

# cloudnary 
- what is cloudinary?

# multer
