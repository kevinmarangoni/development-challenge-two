const PatientModel = require('../models/Patient')

class PatientService{
    async findAll() {
        try {
            const patient = await PatientModel.findAll();
            return patient;
        } catch (error) {
            console.log(`error at retrieving list of all patients. ERR: ${error}`);
            return error;
        }
    }

    async hasPatient(fistName, lastName, birthDate, address){
        
    }

    async findById(id){

    }
    
    async findByFullName(fistName, lastName){
        
    }
    
    async findByLastName(lastName){
        
    }
    
    async findByFirstName(fistName){
        
    }
    
    async findByBirthDate(birthDate){
        
    }
    
    async findByEmail(email){
        
    }
    

    async createPatient(fistName, lastName, email, birthDate, address){
            
    }
    
    async updateUser(id, fistName, lastName, email, birthDate, address) { //PATCH
        try {
            await PatientModel.update({ fistName, lastName, email, birthDate, address }, {
                where: {
                    id: id
                }
            });
            const patient = await PatientModel.findByPk(id);
            return patient;
        } catch (error) {
            console.log(`error at updating patient ${id}. ERR: ${error}`);
            return error;
        }
    }

    async deleteUser(id) { //DELETE
        try {
            const patient = await PatientModel.findByPk(id);
            await patient.destroy();
            return patient;
        } catch (error) {
            console.log(`error at deleting patient  ${id}. ERR: ${error}`);
            return error;
        }
    }

}

module.exports = PatientService