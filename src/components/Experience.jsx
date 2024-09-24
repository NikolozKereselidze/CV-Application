/* eslint-disable react/prop-types */
import "../styles/Experience.css";

function Experience({ formData, handleChange }) {
  return (
    <>
      <div className="experience">
        <h2>Experience</h2>
        <form>
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleChange}
          />

          <input
            type="text"
            name="workplace"
            placeholder="Workplace"
            value={formData.workplace}
            onChange={handleChange}
          />

          <label className="experience-label">
            <span>Start Year: </span>
            <input
              type="month"
              name="jobStartYear"
              value={formData.jobStartYear}
              onChange={handleChange}
            />
          </label>

          <label className="experience-label">
            <span>End Year: </span>
            <input
              type="month"
              name="jobEndYear"
              value={formData.jobEndYear}
              min={formData.jobStartYear}
              onChange={handleChange}
            />
          </label>

          <textarea
            name="jobRole"
            placeholder="Your role at that position"
            rows="8"
            value={formData.role}
            onChange={handleChange}
          ></textarea>
        </form>

        <div className="add-experience">
          <button>Add Experience</button>
        </div>
      </div>
    </>
  );
}

export default Experience;
