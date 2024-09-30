/* eslint-disable react/prop-types */
import "../styles/Experience.css";
import { useState } from "react";

function Experience({ addExperience }) {
  const [jobTitle, setJobTitle] = useState("");
  const [workplace, setworkplace] = useState("");
  const [jobStartYear, setjobStartYear] = useState("");
  const [jobEndYear, setjobEndYear] = useState("");
  const [role, setJobRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addExperience({ jobTitle, workplace, jobStartYear, jobEndYear, role });
    setJobTitle("");
    setworkplace("");
    setjobStartYear("");
    setjobEndYear("");
    setJobRole("");
  };
  return (
    <>
      <div className="experience">
        <h2>Experience</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={jobTitle}
            required
            onChange={(e) => setJobTitle(e.target.value)}
          />

          <input
            type="text"
            name="workplace"
            placeholder="Workplace"
            value={workplace}
            required
            onChange={(e) => setworkplace(e.target.value)}
          />

          <label className="experience-label">
            <span>Start Year: </span>
            <input
              type="month"
              name="jobStartYear"
              value={jobStartYear}
              onChange={(e) => setjobStartYear(e.target.value)}
              required
            />
          </label>

          <label className="experience-label">
            <span>End Year: </span>
            <input
              type="month"
              name="jobEndYear"
              value={jobEndYear}
              min={jobStartYear}
              onChange={(e) => setjobEndYear(e.target.value)}
              required
            />
          </label>

          <textarea
            name="role"
            placeholder="Your role at that position"
            rows="8"
            value={role}
            onChange={(e) => setJobRole(e.target.value)}
            required
          ></textarea>

          <div className="add-experience">
            <button type="submit">Add Experience</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Experience;
