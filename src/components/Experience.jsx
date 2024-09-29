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
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="workplace"
            placeholder="Workplace"
            value={formData.workplace}
            required
            onChange={handleChange}
          />

          <label className="experience-label">
            <span>Start Year: </span>
            <input
              type="month"
              name="jobStartYear"
              value={formData.jobStartYear}
              onChange={handleChange}
              required
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
              required
            />
          </label>

          <textarea
            name="role"
            placeholder="Your role at that position"
            rows="8"
            value={formData.role}
            onChange={handleChange}
            required
          ></textarea>

          <div className="add-experience">
            <button>Add Experience</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Experience;
