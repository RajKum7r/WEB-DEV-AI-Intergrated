import express from 'express';


const app = express();

const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.get('/ice-tea', (req, res) => {
    res.send('Ice tea called!');
})

app.listen(port, () => {
    console.log(`server is running on port:${port}`);
  
})