/* eslint-disable react/prop-types */
function Education({ formData, handleChange }) {
  return (
    <div className="education">
      <h2>Education</h2>
      <form>
        <input type="text" name="university" id="" placeholder="University" />
        <input type="text" name="degree" id="" placeholder="Degree" />

        <label>
          <span>Start Year: </span>
          <input
            type="month"
            name="uniStartYear"
            value={formData.uniStartYear}
            onChange={handleChange}
          />
        </label>

        <label>
          <span>End Year: </span>
          <input
            type="month"
            name="uniEndYear"
            value={formData.uniEndYear}
            min={formData.uniStartYear}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}

export default Education;
