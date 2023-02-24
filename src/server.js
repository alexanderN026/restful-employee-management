import dotenv from 'dotenv';
import express from 'express';
import contactDetailsRoutes from './routes/contactDetailsRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/contacts', contactDetailsRoutes);

app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: 'an error has occurred'
    });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));