import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import apiRoutes from "./routes/api.js";

const app = express();


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
dotenv.config();

app.get('/', (req, res) => res.send('working'));

app.use('/api', apiRoutes);


const DB_CONNECTION_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb-test.es2a7fp.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 9080;


mongoose.connect(DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`Server running on PORT ${PORT}`) }))
    .catch((err) => console.log(err))


export default app;
