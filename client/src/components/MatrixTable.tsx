type Row = {
    month: string;
    actual: number;
    forecast: number;
    difference: number;
    avgDiff3: number | null;
    product: number;
};

export default function MatrixTable({ rows }: { rows: Row[] }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Average Rate</th>
                    <th>Forecast</th>
                    <th>Difference</th>
                    <th>Avg Diff (3M)</th>
                    <th>Product</th>
                </tr>
            </thead>
            <tbody>
                {rows.map(r => (
                    <tr key={r.month}>
                        <td>{r.month}</td>
                        <td>{r.actual.toFixed(4)}</td>
                        <td>{r.forecast.toFixed(4)}</td>
                        <td className={r.difference >= 0 ? "high" : "low"}>
                            {r.difference.toFixed(4)}
                        </td>
                        <td>
                            {r.avgDiff3 === null ? "-" : r.avgDiff3.toFixed(4)}
                        </td>
                        <td>{r.product.toFixed(4)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
