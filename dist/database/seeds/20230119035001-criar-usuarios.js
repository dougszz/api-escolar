"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Doug',
        email: 'dougtest1@gmal.com',
        password_hash: await bcryptjs.hash('1234566', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Doug test',
        email: 'dougtest2@gmal.com',
        password_hash: await bcryptjs.hash('6654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
