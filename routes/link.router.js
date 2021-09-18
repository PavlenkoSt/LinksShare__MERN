const { Router } = require('express');
const config = require('config');

const router = Router();

router.post('/generate', async (req, res) => {
    try{

    }catch(e){
        res.status(500).json({ message: 'Unknown error' })
    }
});

router.get('/', async (req, res) => {
    try{

    }catch(e){
        res.status(500).json({ message: 'Unknown error' })
    }
});

router.get('/:id', async (req, res) => {
    try{

    }catch(e){
        res.status(500).json({ message: 'Unknown error' })
    }
});

module.exports = router;