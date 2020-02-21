starting from scratch

npm init -y

git init 

npm i (install knex express, etc)


-npm i -g knex
- knex init (creates the knexfile.js)
- open knexfile.js and configure the connection
like this -- 
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db3'
    },
    useNullAsDefault: true;
  },

 - knex migrate:make create_xxx_table (xxx = name of table)

 got to seeds folder and add schema to table created

 knex seed:make 001-filename

 knex seed:run