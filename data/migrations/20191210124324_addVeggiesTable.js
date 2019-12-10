// descibes the changes to apply to the database
exports.up = function(knex) {
  // describes what will be done
  //always return the call to knex.schema
  return knex.schema.createTable("veggies", tbl => {
    // primary key, called "id", an interger, auto-increment
    tbl.increments();
    tbl
      .string("name", 255)
      .unique()
      .notNullable()
      .index(); // makes searching for vegatbles using this col faster
    tbl.boolean("like_it").defaultTo(false);
  });
};

exports.down = function(knex) {
  // describes how to revert changes
  return knex.schema.dropTableIfExists("veggies");
};
