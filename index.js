const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()


//cors
app.use(cors())

//body_parser
app.use(bodyParser.json())

 
// get method
app.get('/', (req, res) =>{
    res.send("thanks for calling me")
} )
 
const users = ['shoharab', 'shohan', 'shohel', 'alamin', 'nirob', 'rabby', 'roky']
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
     const name = users[userId]
     console.log(name);
     res.send({userId, name})
})

// post method
app.post('/addUser', (req, res) => {
    const user = req.body;
    user.id = 21
    // save to database
    res.send(user )
    console.log('data recive', user);
})

app.listen(4000, () => console.log("listening port 4000"))