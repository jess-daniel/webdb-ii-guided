// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3", // DB driver
    useNullAsDefault: true, // only needed for sqlite3
    connection: {
      filename: "./data/products.db3" // where is the database file is located
    },
    migrations: {
      directory: "./data/migrations" // will be created automatically
    },
    seeds: {
      directory: "./data/seeds" // will be created automatically
    }
  }
};
