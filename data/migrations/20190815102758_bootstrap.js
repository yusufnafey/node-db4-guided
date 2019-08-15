exports.up = function(knex) {
  return knex.schema
    .createTable("zoos", tbl => {
      tbl.increments();
      tbl
        .string("zoo_name", 255)
        .notNullable()
        .unique();
      tbl.string("address", 4000);
    })
    .createTable("species", tbl => {
      tbl.increments();
      tbl
        .string("species_name", 255)
        .notNullable()
        .unique();
    })
    .createTable("animals", tbl => {
      tbl.increments();
      tbl.string("animal_name", 255).notNullable();
    });
};

exports.down = function(knex) {};
