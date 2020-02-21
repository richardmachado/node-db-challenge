exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, 
          projects_id: 1, 
          notes: 'Clean up', 
          description: 'Clean up debris and make flat surface', 
          completed: "true" 
        },
        {id: 2, projects_id: 2, notes: 'Close Bridge', description: 'Close bridge to stop traffic', completed: "false" },
        {id: 3, projects_id: 3, notes: 'Purchase asphalt', description: 'need 1000 cubic yards', completed: "false" },
        
      ]);
    });
};