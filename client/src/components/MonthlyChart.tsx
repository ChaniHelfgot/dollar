import { MonthlyRate } from "../types";
import {
    LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function MonthlyChart({ data }: { data: MonthlyRate[] }) {
    const parsed = data.map(d => ({
        month: d.month,
        rate: Number(d.avg_rate),
    }));

    return (
        <div className="card">
            <h2>Monthly Graph</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={parsed}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line dataKey="rate" stroke="#22c55e" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
