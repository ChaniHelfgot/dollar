import { MonthlyRate } from "../types";

const BASE_URL = "http://localhost:3001/api/rates";

export async function getMonthlyRates(): Promise<MonthlyRate[]> {
  const res = await fetch(`${BASE_URL}/monthly`);
  if (!res.ok) throw new Error("API error");
  const data=await res.json();
  return data;
}
