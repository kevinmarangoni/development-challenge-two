const express = require('express')

//const PatientController = require('../controllers/Patient')

import PatientController from '../controllers/Patient'


const router = express.Router()

router.get(`/alive`, (req, res)=>{res.json(`yes`)})

router.get('/patients', PatientController.index);
router.get('/patients/id/:id',PatientController.getPatientById);
router.get('/patients/email/:email', PatientController.getPatientByEmail);
router.get('/patients/birthDate/:birthDate', PatientController.getByBirthDate);
router.get('/patients/firstName/:firstName', PatientController.getByFirstName);
router.get('/patients/lastName/:lastName', PatientController.getByLastName);
router.get('/patients/address/:address', PatientController.getByAddress);

router.post('/patients', PatientController.createPatient);

// router.patch('/patients/:id',PatientController.updateUser);

// router.delete('/patients/:id',PatientController.deleteUser);



module.exports = router