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
      // FOREIGN KEY
      tbl
        .integer("species_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("species")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      // CASCADE, RESTRICT, NO ACTION, SET DEFAULT
    })
    .createTable("zoo_animals", tbl => {
      tbl.increments();
      tbl
        .integer("zoo_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("zoos")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("animal_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("animals")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("zoo_animals")
    .dropTableIfExists("species_id")
    .dropTableIfExists("animals")
    .dropTableIfExists("zoos");
};
