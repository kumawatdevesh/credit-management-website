const express = require('express');

const router = express.Router();

const user = require('../contollers/users');

router.get('/', user.homePage);

router.get('/users', user.getUsers);

router.post('/users', user.postUsers);

router.get('/details/:id', user.getDetails);

router.post('/details/:id', user.updateData);

module.exports = router;