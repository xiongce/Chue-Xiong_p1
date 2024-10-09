import express from 'express';
import serveIndex from 'serve-index';

const app = express();

app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

app.use('/request-type', (req, res, next) => {
    console.log('Request type: ', req.method);
    next();
});

app.use('/public', express.static('public'));
app.use('/public', serveIndex('public'));

app.get('/', (req, res) => 
    res.send('Successful Response.')
);

app.listen(3000, () => console.log('Express server running on port 3000'));