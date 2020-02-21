
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, 
          name: 'shovel', 
          description: 'metal tool to pickup dirt and other items'
        },
        {id: 2, 
          name: 'dumptruck', 
          description: 'large truck for carrying large loads'
        },
        {id: 3, 
          name: 'wheelbarrow', 
          description: 'wheeled receptable for transporting dirt, cement, etc'
        }
      ]);
    });
};
