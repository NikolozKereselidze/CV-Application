/* eslint-disable react/prop-types */
import "../styles/Skills.css";

function Skills({ formData, handleChange }) {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <form>
        <input
          type="text"
          name="skills"
          placeholder="Skill"
          value={formData.skills}
          onChange={handleChange}
          required
        />
        <div className="add-skill">
          <button>Add Skill</button>
        </div>
      </form>
    </div>
  );
}

export default Skills;
