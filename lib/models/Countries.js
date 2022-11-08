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

  static async getCountryByID(id) {
    const { rows } = await pool.query('SELECT * from countries where id = $1', [id]);
    return new Country(rows[0]);
  }

};
