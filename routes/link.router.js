const { Router } = require('express');
const Link = require('../models/Link');
const auth = require('../middlewares/auth.middleware');
const config = require('config');
const shortid = require('shortid');

const router = Router();

router.post('/generate', auth, async (req, res) => {
    try{
        const baseUrl = config.get('baseUrl');
        const { from } = req.body;

        const code = shortid.generate();

        const to = baseUrl + '/t/' + code;

        const exist = await Link.findOne({ from });

        if(exist){
            return res.json({ link: exist });
        }

        const link = new Link({
            from, to, code, owner: req.user.userId
        });

        await link.save();

        res.status(201).json({ link });

    }catch(e){
        res.status(500).json({ message: 'Unknown error' });
    }
});

router.get('/', auth, async (req, res) => {
    try{
        const links = await Link.find({ owner: req.user.userId });
        res.json(links);
    }catch(e){
        res.status(500).json({ message: 'Unknown error' });
    }
});

router.get('/:id', auth, async (req, res) => {
    try{
        const link = await Link.findById(req.params.id);
        res.json(link);
    }catch(e){
        res.status(500).json({ message: 'Unknown error' });
    }
});

module.exports = router;