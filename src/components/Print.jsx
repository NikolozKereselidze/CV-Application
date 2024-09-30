import "../styles/Print.css";

function printHandler() {
  window.print();
}

function Print() {
  return (
    <div className="print-button--container">
      <button onClick={printHandler}>
        <i className="fa-solid fa-print"></i>
      </button>
    </div>
  );
}

export default Print;
