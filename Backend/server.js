import "./config/env.js";//env loaded globally
import cors from 'cors';
import express from 'express';
import router from './routes/routes.js';
import DbConnect from "./database/db.js";



const app = express();
const PORT = process.env.PORT || 5000;



app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.get('/', (req, res) => {

})



app.listen(PORT, () => {
    DbConnect()
    console.log(`Server is running on port ${PORT}`);
});
