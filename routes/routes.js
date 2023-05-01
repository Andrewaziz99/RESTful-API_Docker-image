const express = require('express');
const router = express.Router();
const personController = require('../controllers/person.controller');

router.get('/Create', personController.create);

router.get('/persons', personController.show);

router.post('/persons', personController.addPerson);


router.post('/update', personController.update);

router.post('/deletePerson/:id', personController.deletePerson);

module.exports = router;