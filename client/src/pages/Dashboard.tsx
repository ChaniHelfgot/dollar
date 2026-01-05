import { useEffect, useState } from "react";
import { getMonthlyRates } from "../api/rates.api";
import { MonthlyRate } from "../types";

import MonthlyChart from "../components/MonthlyChart";
import RatesTable from "../components/RatesTable";
import Forecast from "../components/Forecast";
import MatrixTable from "../components/MatrixTable";

import {
  buildForecastMatrix,
  buildDifferenceMatrix,
  addRollingAvgDifference,
  buildProductMatrix
} from "../utils/matrix/index";

export default function Dashboard() {
  const [data, setData] = useState<MonthlyRate[]>([]);
  const [showMatrix, setShowMatrix] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<string>("");

  useEffect(() => {
    getMonthlyRates().then(setData);
  }, []);

  if (!data.length) return <div>Loading...</div>;

  const filteredData = selectedMonth
    ? data.filter(d => d.month === selectedMonth)
    : data;

  const disableColors = !!selectedMonth;

  const forecastMatrix = buildForecastMatrix(filteredData);
  const diffMatrix = buildDifferenceMatrix(forecastMatrix);
  const withAvgDiff = addRollingAvgDifference(diffMatrix);
  const products = buildProductMatrix(withAvgDiff);

  const matrixRows = withAvgDiff.map((row, i) => ({
    ...row,
    product: products[i]
  }));

  return (
    <div className="dashboard">
      <div className="left">
        <MonthlyChart data={filteredData} />
        <Forecast data={filteredData} />
      </div>

      <div className="right">
        <select
          value={selectedMonth}
          onChange={e => setSelectedMonth(e.target.value)}
        >
          <option value="">All months</option>
          {data.map(d => (
            <option key={d.month} value={d.month}>
              {d.month}
            </option>
          ))}
        </select>

        <button onClick={() => setShowMatrix(v => !v)}>
          {showMatrix ? "Show Rates Table" : "Show Matrix Table"}
        </button>

        {showMatrix ? (
          <MatrixTable
            rows={matrixRows}
            disableColors={disableColors}
          />
        ) : (
          <RatesTable
            data={filteredData}
            disableColors={disableColors}
          />
        )}
      </div>
    </div>
  );
}
