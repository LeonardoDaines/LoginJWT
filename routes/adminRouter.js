const express = require('express');
const router = express.Router();

const auth = require('../controllers/authControll')

router.get('/', auth, (req, res) => {

    if(req.user.admin)
    {
        res.send('Esse dado so deve ser visto pelo admin')
    }else{
        res.status(401).send('Not admin: Acess Denied');
    }
})

module.exports = router;