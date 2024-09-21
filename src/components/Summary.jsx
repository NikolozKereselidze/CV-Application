/* eslint-disable react/prop-types */

function Summary({ formData, handleChange }) {
  return (
    <div className="sumamry">
      <form>
        <textarea
          name="summary"
          placeholder="Summary"
          value={formData.summary}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Summary;
