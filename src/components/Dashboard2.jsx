import "../css/Dashboard2.css";

export default function Dashboard2() {
  return (
    <div className="outer-container">
      <div className="header">Header</div>
      <div className="main">
        <div className="left-section">Sidebar</div>
        <div className="right-section">
          <div className="column">Col1</div>
          <div className="column">Col2</div>
          <div className="column">Col3</div>
        </div>
      </div>
    </div>
  );
}
