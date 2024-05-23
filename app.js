const express = require('express')
var bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/api/users/register',(req,res)=>{
    console.log(req.body);
    res.send("success")
})

app.listen(3000, () => console.log('Example app is listening on port 3000.'));


