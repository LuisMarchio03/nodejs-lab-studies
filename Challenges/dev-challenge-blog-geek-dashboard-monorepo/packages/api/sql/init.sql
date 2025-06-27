CREATE EXTENSION IF NOT EXISTS "uuid/ossp";

CREATE TABLE IF NOT EXISTS category(
  id uuid DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  createdAt DATE,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS posts(
  id uuid DEFAULT uuid_generate_v4(),
  category_id VARCHAR NOT NULL,
  title VARCHAR NOT NULL,
  content TEXT,
  createdAt DATE,
  PRIMARY KEY (id)
);
