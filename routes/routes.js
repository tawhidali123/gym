const express = require('express');
const router = express.Router();

const logger = (request, respond, next) => {
    let date = new Date().toLocaleDateString();

    console.log(date);

    next();
}

router.get('/', logger, (request, respond, next) =>{
    respond.render('index.ejs', {
        title: 'do you eben lift bro'
    });
});

module.exports = router;