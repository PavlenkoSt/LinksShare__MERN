const { Router } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { validationResult, check } = require('express-validator');

const router = Router();

router.post(
    '/register',
    [ 
        check('email', 'Uncorrect email').isEmail(),
        check('password', 'Password length must be more then 6').isLength({ min: 6 })
    ],
    async (req, res) => {
    try{
        const { email, password } = req.body;

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array(), message: 'Uncorrect registration data' })
        }
        
        const emailCandidate = User.findOne({ email });

        if(emailCandidate){
            return res.status(400).json({ message: "A User with this email already exists in base!" })
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new User({ email, password: hashedPassword });
        await user.save();

        return res.status(201).json({ message: "New user successfully created" })

    }catch(e){
        res.status(500).json({ message: `Oooops, some error ----> ${e.message}` });
    }
});

router.post('/login', async (req, res) => {
    try{

    }catch(e){
        res.status(500).json({ message: `Oooops, some error ----> ${e.message}` });
    }
});

module.exports = router;