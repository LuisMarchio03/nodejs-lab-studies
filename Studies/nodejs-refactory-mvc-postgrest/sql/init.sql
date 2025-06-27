CREATE EXTENSION IF NOT EXISTS "uuid/ossp";

CREATE TABLE IF NOT EXISTS products(
  id uuid DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  price VARCHAR NOT NULL,
  stock VARCHAR NOT NULL,
  PRIMARY KEY (id)
);
