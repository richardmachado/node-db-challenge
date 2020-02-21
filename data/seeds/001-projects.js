
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, 
          "name": "New Highway extension",
          "description": "Highway 1 30 mile extension into a new city",
          "completed": "false"
        },
        {id: 2,
          "name": "Fix collapsing bridge",
          "description": "Broadway Bridge needs to be retrofitted to avoid collapsing",
          "completed": "false"
          },
        {id: 3, 
          "name": "Repave Road",
          "description": "Main St in Downtown needs to be repaved",
          "completed": "false"
        }
      ]);
    });
};
