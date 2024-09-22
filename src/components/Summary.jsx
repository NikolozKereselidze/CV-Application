/* eslint-disable react/prop-types */
import "../styles/Summary.css";

function Summary({ formData, handleChange }) {
  return (
    <div className="summary">
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
