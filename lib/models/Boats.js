// const boats = require('../controllers/boats');
const pool = require('../utils/pool');
module.exports = class Boat {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from boats');
    return rows.map((newRow) => new Boat(newRow));
  }

  static async getByID(id) {
    const { rows } = await pool.query('SELECT * from boats where id = $1', [id]);
    return new Boat(rows[0]);
  }

  static async getType(type) {
    const { rows } = await pool.query('SELECT * from boats WHERE type = $1', [type]);
    return rows.map((newRow) => new Boat(newRow));
  }
};

