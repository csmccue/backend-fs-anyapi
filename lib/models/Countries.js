const pool = require('../utils/pool');
module.exports = class Country {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.size = row.size;
  }

  static async getAllCountries() {
    const { rows } = await pool.query('SELECT * from countries');
    return rows.map((newRow) => new Country(newRow));
  }
};
