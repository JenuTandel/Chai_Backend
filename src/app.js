import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// for json file limit
app.use(express.json({
    limit: '20kb'
}));

// For url config
app.use(express.urlencoded({
    extended: true,
    limit:'20kb'
}));

// For static files to store assets
app.use(express.static('public'));
export default app;