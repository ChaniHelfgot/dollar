import { useEffect, useState } from "react";

type Rate = {
  month: string;
  average: number;
};

function App() {
  const [data, setData] = useState<Rate[]>([]);

 useEffect(() => {
  fetch("http://localhost:3000/rates")
    .then(r => r.json())
    .then(setData)
    .catch(console.error);
}, []);

  return (
    <div>
      <h1>Rates</h1>
      <ul>
        {data.map(d => (
          <li key={d.month}>
            {d.month} - {d.average}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
