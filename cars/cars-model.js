const db = require("../data/db-config");

function find() {
  return db("cars");
}

function findById(id) {
  return db("cars")
    .where({ id })
    .first();
}

async function add(car) {
  const [id] = await db("cars").insert(car);

  return findById(id);
}

module.exports = {
  find,
  add
};
