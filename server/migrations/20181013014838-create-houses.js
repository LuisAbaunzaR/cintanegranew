'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Houses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL(10,2)
      },
      type: {
        type: Sequelize.ENUM,
        values:["R","A","H"] //RUN APARTMENT HOUSE 
      },
      rate: {
        type: Sequelize.DECIMAL(5,1)
      },
      description: {
        type: Sequelize.TEXT
      },
      photos: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      status: {
        type: Sequelize.ENUM,
        values:["B","A"] //BUSY AVAILABLE 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Houses');
  }
};