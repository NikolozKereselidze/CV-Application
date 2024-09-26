/* eslint-disable react/prop-types */
function Education({ formData, handleChange }) {
  return (
    <div className="education">
      <h2>Education</h2>
      <form>
        <input
          type="text"
          name="university"
          placeholder="University"
          value={formData.university}
          onChange={handleChange}
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={formData.degree}
          onChange={handleChange}
        />

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
