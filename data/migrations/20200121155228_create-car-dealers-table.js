
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments()
      table.string('VIN', 50).unique().notNullable()
      table.string('Make', 25).notNullable()
      table.string('Model', 25).notNullable()
      table.integer('Mileage').notNullable()
      table.string('TransmissionType')
      table.string('StatusOfTitle')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
