import { MonthlyRate } from "../types";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;


export async function getMonthlyRates(): Promise<MonthlyRate[]> {
  const res = await fetch(`${BASE_URL}/rates/monthly`);
  if (!res.ok) throw new Error("API error");
  const data=await res.json();
  return data;
}
