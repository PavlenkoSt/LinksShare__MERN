const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

const PORT = config.get('port') || 5000;


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