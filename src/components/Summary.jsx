/* eslint-disable react/prop-types */
import "../styles/Summary.css";

function Summary({ formData, handleChange }) {
  return (
    <div className="summary">
      <h2>Summary</h2>
      <form>
        <textarea
          name="summary"
          placeholder="Summary"
          value={formData.summary}
          onChange={handleChange}
          rows="8"
        />
      </form>
    </div>
  );
}

export default Summary;
