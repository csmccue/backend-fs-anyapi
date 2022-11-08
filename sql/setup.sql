-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS boats;

CREATE TABLE boats (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  type VARCHAR NOT NULL
);

INSERT INTO boats (name, type)
VALUES
('USS Atlanta', 'Light Cruiser'),
('USS Indianapolis', 'Heavy Cruiser'),
('USS Yorktown', 'Carrier'),
('USS Iowa', 'Battleship');

DROP TABLE IF EXISTS countries;

CREATE TABLE countries (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  size VARCHAR NOT NULL
);

INSERT INTO countries (name, size)
VALUES
('United States', '300 million'),
('Canada', '38 million'),
('Mexico', '130 million'),
('Guatemala', '17 million');