const Sequelize = require('sequelize');
const database = require('../connection/database');
const PatientSeed = require('../../database/seeds/PatientSeeder')

export const Patients = database.define(`patients`, {
    id :{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true 
    },
    firstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    birthDate:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    address:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    deletedAt:{
        type: Sequelize.DATE,
        allowNull: true
    }
})
Patients.paranoid = true
Patients.timestamps = true
Patients.sync({force:false});
    Patients.afterSync(async () => {
        Patients.findAll().then( async (patient) => {
            if (patient.length === 0) {
                console.log('Patients table empty');
                
                try{
                    Patients.bulkCreate(PatientSeed);
                }
                catch(err){
                    console.log(err)
                }
                
                console.log('Patients table seeded');
            }
        });
    })

export default Patients