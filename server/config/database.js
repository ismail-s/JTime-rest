exports.DBConfig = {

  development: {
    dbName:   "jtime-dev",
    user:     "jtimedev",
    password: "jtimedev",
    options: {
      dialect: "postgres",
      port:    5432
    }
  },

  test: {
    dbName:   "my_app_test",
    user:     "postgres",
    password: "password",
    options: {
      dialect: "postgres",
      port:    5432
    }
  }

};