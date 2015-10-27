"use strict";

module.exports = function(sequelize, DataTypes) {
  var Masjid = sequelize.define("Masjid", {
    name: DataTypes.STRING
  });

  return Masjid;
};