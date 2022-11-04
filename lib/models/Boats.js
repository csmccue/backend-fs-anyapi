const pool = require('../utils/pool');
module.exports = class Boat {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from boats');
    return rows.map((newRow) => new Boat(newRow));
  }
};

