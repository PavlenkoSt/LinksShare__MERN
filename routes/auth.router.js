const { Router } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { validationResult, check } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('../config/default.json');

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

router.post(
    '/login', 
    [
        check('email', 'Please enter correct email').normalizeEmail().isEmail(),
        check('password', 'Email or password uncorrect entered').exists()
    ],
    async (req, res) => {
    try{
        const { email, password } = req.body;

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array(), message: "Uncorrect login data" });
        }

        const user = User.findOne({ email });

        if(!user){
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({ message: "Email or password entered uncorrect" });
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1h' }
        );

        return res.status(200).json({ token, userId: user.id });

    }catch(e){
        res.status(500).json({ message: `Oooops, some error ----> ${e.message}` });
    }
});

module.exports = router;