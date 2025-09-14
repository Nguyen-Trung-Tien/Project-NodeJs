"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com",
        firstName: "Admin",
        lastName: "Tien",
        roleId: "R1",
        gender: "M",
        password:
          "$2a$10$/KRHY.3RXrOz6h7PlWCgU.roQuqUhbAYnfMB5k4/XY9Kq0ZJ3qIey",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "leho@gmail.com",
        firstName: "Hồ",
        lastName: "Lê",
        address: "HCM",
        roleId: "R2",
        gender: "M",
        positionId: "P1",
        gender: "F",
        password:
          "$2a$10$/KRHY.3RXrOz6h7PlWCgU.roQuqUhbAYnfMB5k4/XY9Kq0ZJ3qIey",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "mynguyen@gmail.com",
        firstName: "Nguyễn Thị",
        lastName: "Ngọc My",
        address: "HCM",
        roleId: "R2",
        gender: "F",
        positionId: "P1",
        password:
          "$2a$10$/KRHY.3RXrOz6h7PlWCgU.roQuqUhbAYnfMB5k4/XY9Kq0ZJ3qIey",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "maithao@gmail.com",
        firstName: "Nguyễn",
        lastName: "Mai Thảo",
        gender: "F",
        address: "HCM",
        password:
          "$2a$10$/KRHY.3RXrOz6h7PlWCgU.roQuqUhbAYnfMB5k4/XY9Kq0ZJ3qIey",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "hoangle@gmail.com",
        firstName: "Lê Trần",
        lastName: "Hoàng",
        address: "HCM",
        gender: "O",
        password:
          "$2a$10$/KRHY.3RXrOz6h7PlWCgU.roQuqUhbAYnfMB5k4/XY9Kq0ZJ3qIey",
        roleId: "R2",
        positionId: "P1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "truongdang@gmail.com",
        firstName: "Đặng",
        lastName: "Thanh Trường",
        address: "HCM",
        password:
          "$2a$10$/KRHY.3RXrOz6h7PlWCgU.roQuqUhbAYnfMB5k4/XY9Kq0ZJ3qIey",
        roleId: "R2",
        positionId: "P1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "phamthang@gmail.com",
        firstName: "Phạm",
        lastName: "Hoàng Thắng",
        address: "HCM",
        password:
          "$2a$10$/KRHY.3RXrOz6h7PlWCgU.roQuqUhbAYnfMB5k4/XY9Kq0ZJ3qIey",
        roleId: "R2",
        positionId: "P1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "huanle@gmail.com",
        firstName: "Đỗ",
        lastName: "Lê Huân",
        address: "HCM",
        password:
          "$2a$10$/KRHY.3RXrOz6h7PlWCgU.roQuqUhbAYnfMB5k4/XY9Kq0ZJ3qIey",
        roleId: "R2",
        positionId: "P1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
