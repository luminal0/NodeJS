'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('blogs', [{
      title: "Hello World",
      content: "Test BAANGGGGGGGGGGGGGG",
      image: "img.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }],{});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
