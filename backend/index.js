// Import all necessary dependencies
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

dotenv.config();

// Import all routes
import getUsersRouter from './routes/getUsers.js';

// Express stuff
const app = express();
const PORT = process.env.PORT;

// Setup important plugins for express server
app.use(cors());
app.use(bodyParser({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// Setup routes
app.use('/get-users', getUsersRouter);

// Setup default route
app.get('/', (req, res) => {
    res.send('MERN-Auth Backend is running!');
})

mongoose.connect(process.env.MONGO_URI);

app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));