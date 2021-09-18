const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const PORT = config.get('port') || 5000;

app.use(cors());
app.use(express.json({ extended: true }));
app.use('/api/auth', require('./routes/auth.router'));
app.use('/api/links', require('./routes/link.router'));

const start = async () => {
    try{
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            // useCreateIndex: true,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
    }catch(e){
        console.log(`Ooops, some error ---> ${e.message}`);
        process.exit(1);
    }
}

start();