
exports.up = function(knex) {
  return knex.schema.createTable('person', table=> {
      table.increments('id');
      table.string('email').notNullable().unique();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('person');
};
