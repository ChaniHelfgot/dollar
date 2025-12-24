DROP TABLE IF EXISTS monthly_rates;
DROP TABLE IF EXISTS rates;

CREATE TABLE rates (
  date DATE PRIMARY KEY,
  rate NUMERIC NOT NULL
);

CREATE TABLE monthly_rates (
  month DATE PRIMARY KEY,
  avg_rate NUMERIC(10,4) NOT NULL
);