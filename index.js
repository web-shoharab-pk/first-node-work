const express = require('express')
const app = express()


function rootCall(req, res) {
   res.send("thanks") 
}

app.get('./', (req, res) =>{
    res.send("thanks for calling me")
} )

app.listen(4000, () => console.log("listening port 4000"))