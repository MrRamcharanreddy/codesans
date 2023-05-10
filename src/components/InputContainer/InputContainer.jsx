import "./InputContainer.css";

export default function InputContainer({
  rows,
  setRows,
  columns,
  setColumns,
  generateLayout
}) {
  return (
    <div className="InputContainer">
      <div className="InnerWrapper">
        <div className="InputWrapper">
          Rows: <input value={rows} onChange={(e) => setRows(e.target.value)} />
        </div>
        <div className="InputWrapper">
          Columns:
          <input value={columns} onChange={(e) => setColumns(e.target.value)} />
        </div>
        <button onClick={generateLayout} className="generateButton">
          Generate Layout
        </button>
      </div>
    </div>
  );
}
