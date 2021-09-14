const { Router } = require('express');

const router = Router();

router.post('/register', async (req, res) => {
    try{
        const { email, password } = req.body;
        
    }catch(e){
        res.status(500).json({ "error": `Oooops, some error ----> ${e.message}` });
    }
});

router.post('/login', async (req, res) => {
    try{

    }catch(e){
        res.status(500).json({ "error": `Oooops, some error ----> ${e.message}` });
    }
});

module.exports = router;