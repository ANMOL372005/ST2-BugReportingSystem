const express = require('express');
const connectDB = require('./config/connectDB')
const port = 5000;
const bugRoute = require('./routes/bugRoute');
const app = express();
app.use(express.json());


app.get('/', (req,res) =>{
    res.send('Working!!!!');
})

app.use('/api',bugRoute);

connectDB();
app.listen(port, () =>{
    console.log(`Server running successfully ${port}`);
})