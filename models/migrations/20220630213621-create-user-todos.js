'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER, 
        references: { 
          model: 'users', 
          key: 'id', 
        }, 
        allowNull: false, 
      },
      todo_id: {
        type: Sequelize.DataTypes.INTEGER, 
        references: { 
          model: 'todos', 
          key: 'id', 
        }, 
        allowNull: false, 
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_todos');
  }
};