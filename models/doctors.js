// strict mode enable
"use strict";
// exports Doctor object for use in global scope
module.exports = function(sequelize, DataTypes) {
  // def Doctor object using sequelize
    var Doctor = sequelize.define("doctors", {
      // def field names and attributes and associated validations
      doctor_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
        }
      } ,
      doctor_type: {
        type: DataTypes.STRING(10),
        allowNull: true
      } ,
      doctor_specialization: {
        type: DataTypes.STRING,
        allowNull: true
      } ,
      doctor_primary_address1: {
        type: DataTypes.STRING,
        allowNull: true
      } ,
      doctor_primary_address2: {
        type: DataTypes.STRING,
        allowNull: true
      } ,
      doctor_city: {
        type: DataTypes.STRING,
        allowNull: true
      } ,
      doctor_state: {
        type: DataTypes.STRING,
        allowNull: true
      } ,
      doctor_zip: {
        type: DataTypes.INTEGER,
        allowNull: true
      } ,
      doctor_login_name: {
        type: DataTypes.STRING,
        allowNull: true
      } ,
      doctor_login_password: {
        type: DataTypes.STRING,
        allowNull: true
      } ,
      doctor_insurance_accepted: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
     }
    });

    // def associations for relations within RDBMS
    Doctor.associate = function(models) {
     Doctor.belongsToMany(models.patients, { through: models.patient_doctors});
     Doctor.belongsToMany(models.insurance_providers, { through: models.doctor_insurances});

       };
    // returns Doctor object for export
    return Doctor;
  };