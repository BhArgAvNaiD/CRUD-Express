const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const userRoutes = require('./Routes/users.js');

const PORT = process.env.PORT || 3000;
app.use(bodyparser.json());

app.get('/',(req,res)=>{
    console.log('testing..');
    res.send('Hello from Homepage');
});

app.use('/users',userRoutes);

app.listen(PORT,()=>console.log(`server running on port: http://localhost:${PORT}`));