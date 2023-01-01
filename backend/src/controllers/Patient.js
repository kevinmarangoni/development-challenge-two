import PatientService from '../service/Patient'


export class PatientController{
    async index(req, res){ //GET
        const patientList = await PatientService.findAll()
        res.json(patientList==null ? [] : patientList)
    }

    async getPatientById(req, res){ //GET
        const id = req.params.id;
        if (id != null && id != "" && id != undefined && isNaN(id) && id > 0){ 
            return res.status(400).json({error: "Id is required"});
        }
        const patient = await PatientService.findById(req.params.id)
        res.json(patient==null ? [] : patient)
    }
    async getPatientByEmail(req, res){ //GET
        const patient = await PatientService.findByEmail(req.params.email);
        if (patient == null){
            return res.status(200).json([]);
        }
        res.json(patient);
    }

    async getByBirthDate(req, res){ //GET
        const patient = await PatientService.findByBirthDate(req.params.birthDate);
        if (patient == null){
            return res.status(200).json([]);
        }
        res.json(patient);
    } 

    async getByFirstName(req, res){ //GET
        const patient = await PatientService.findByFirstName(req.params.firstName);
        if (patient == null){
            return res.status(200).json([]);
        }
        res.json(patient);
    } 
    async getByLastName(req, res){ //GET
        const patient = await PatientService.findByLastName(req.params.lastName);
        if (patient == null){
            return res.status(200).json([]);
        }
        res.json(patient);
    }
    async getByAddress(req, res){ //GET
        const patient = await PatientService.findByAddress(req.params.address);
        if (patient == null){
            return res.status(200).json([]);
        }
        res.json(patient);
    }

    async createPatient(req, res){ //POST
        const {firstName, lastName, email, address, birthDate} = req.body;
        if (firstName == null || lastName == null || email == null || address == null || birthDate == null){
            return res.status(400).json({error: "Missing parameters"});
        }
        let exists = await PatientService.hasPatient();
        if (exists === true){
            return res.status(400).json({error: "Patient already exists"});
        }
        const patient = await PatientService.createPatient(firstName, lastName, email, address, birthDate);
        res.status(201).json(patient);
    }


}

export default new PatientController