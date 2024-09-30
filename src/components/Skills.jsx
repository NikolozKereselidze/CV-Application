/* eslint-disable react/prop-types */
import "../styles/Skills.css";
import { useState } from "react";

function Skills({ addSkill }) {
  const [skill, setSkill] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setSkill("");
    addSkill(skill);
  };

  return (
    <div className="skills">
      <h2>Skills</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="skills"
          placeholder="Skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          required
        />
        <div className="add-skill">
          <button type="submit">Add Skill</button>
        </div>
      </form>
    </div>
  );
}

export default Skills;
