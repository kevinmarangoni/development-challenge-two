import PatientModel from "../models/Patient";

export class PatientService {
  async findAll() {
    try {
      const patient = await PatientModel.findAll();
      return patient;
    } catch (error) {
      console.log(`error at retrieving list of all patients. ERR: ${error}`);
      return error;
    }
  }

  async findById(id) {
    try {
      const patient = await PatientModel.findByPk(id);
      return patient;
    } catch (error) {
      console.log(`error at retrieving patient by id. ERR: ${error}`);
      return error;
    }
  }

  async findByLastName(lastName) {
    try {
      const patient = await PatientModel.findAll({
        where: {
          lastName: lastName,
        },
      });
      return patient;
    } catch (error) {
      console.log(`error at retrieving patient by first name. ERR: ${error}`);
      return error;
    }
  }

  async findByFirstName(firstName) {
    try {
      const patient = await PatientModel.findAll({
        where: {
          firstName: firstName,
        },
      });
      return patient;
    } catch (error) {
      console.log(`error at retrieving patient by last name. ERR: ${error}`);
      return error;
    }
  }

  async findByBirthDate(birthDate) {
    try {
      const patient = await PatientModel.findAll({
        where: {
          birthDate: birthDate,
        },
      });
      return patient;
    } catch (error) {
      console.log(`error at retrieving patient by birthdate. ERR: ${error}`);
      return error;
    }
  }

  async findByEmail(email) {
    try {
      const patient = await PatientModel.findOne({
        where: {
          email: email,
        },
      });
      return patient;
    } catch (error) {
      console.log(`error at retrieving patient by email. ERR: ${error}`);
      return error;
    }
  }

  async createPatient(fistName, lastName, email, birthDate, address) {
    try {
      const patient = await PatientModel.create({
        fistName,
        lastName,
        email,
        birthDate,
        address,
      });
      return patient;
    } catch (error) {
      console.log(`error at creating patient. ERR: ${error}`);
      return error;
    }
  }

  async updateUser(id, fistName, lastName, email, birthDate, address) {
    try {
      await PatientModel.update(
        { fistName, lastName, email, birthDate, address },
        {
          where: {
            id: id,
          },
        }
      );
      const patient = await PatientModel.findByPk(id);
      return patient;
    } catch (error) {
      console.log(`error at updating patient ${id}. ERR: ${error}`);
      return error;
    }
  }

  async deleteUser(id) {
    try {
      const patient = await PatientModel.findByPk(id);
      await patient.destroy();
      return patient;
    } catch (error) {
      console.log(`error at deleting patient ${id}. ERR: ${error}`);
      return error;
    }
  }
}

export default new PatientService;
