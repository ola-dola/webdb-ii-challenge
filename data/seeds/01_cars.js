
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 'rowValue1', Mileage: 3, Make: 'tr', Model: 'dr', TransmissionType: 're', StatusOfTItle: 'rew'},
      ]);
    });
};
