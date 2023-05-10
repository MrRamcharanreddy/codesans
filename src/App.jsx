import { useState, useEffect } from "react";
import "./styles.css";
import Layout from "./components/Layout/Layout";
import InputContainer from "./components/InputContainer/InputContainer";

export default function App() {
  const [rows, setRows] = useState(4);
  const [columns, setColumns] = useState(3);
  const [data, setData] = useState([]);

  const generateLayout = () => {
    const housingLayout = Array.from({ length: rows }, (_, i) =>
      Array.from({ length: columns }, (_, j) => ({
        plotNumber: `${i}${j}`,
        gymDistance: 100000,
        hospitalDistance: 100000,
        restaurantDistance: 100000,
        plotType: "plot",
        servicesName: null,
        row: i,
        column: j
      }))
    );

    setData([...housingLayout]);
  };

  useEffect(() => {
    generateLayout();
  }, []);

  return (
    <div className="App">
      <h1>House Recommendation System</h1>
      <InputContainer
        rows={rows}
        columns={columns}
        setRows={setRows}
        setColumns={setColumns}
        generateLayout={generateLayout}
      />
      <Layout
        columns={columns}
        data={data}
        setData={setData}
        generateLayout={generateLayout}
      />
    </div>
  );
}
