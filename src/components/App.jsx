import { useState } from "react";

import "../styles/App.css";
import BasicInfo from "./BasicInfo";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import CvPaper from "./CvPaper";
import Skills from "./Skills";
import Print from "./Print";

function App() {
  const [formData, setFormData] = useState({
    name: "Nikoloz Kereselidze",
    position: "Front End Developer",
    email: "test@gmail.com",
    phone: "597-35-35-77",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corporis eligendi quos natus consectetur sint eum nobis dolore neque error reiciendis explicabo ex minima",
    location: "Tbilisi, Georgia",
    website: "linkedin.com/nikoloz-kereselidze",
    experiences: [],
    university: "Tbilisi State University",
    degree: "Computer Science",
    uniStartYear: "2020-04",
    uniEndYear: "2024-04",
    skills: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addSkill = (skill) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, skill],
    }));
  };

  const addExperience = (experience) => {
    setFormData((prevData) => ({
      ...prevData,
      experiences: [...prevData.experiences, experience],
    }));
  };

  return (
    <>
      <section className="cv-form">
        <BasicInfo handleChange={handleChange} formData={formData} />
        <Summary handleChange={handleChange} formData={formData} />
        <Education handleChange={handleChange} formData={formData} />
        <Experience addExperience={addExperience} />
        <Skills addSkill={addSkill} />
      </section>
      <section className="cv-container">
        <CvPaper formData={formData} />
      </section>
      <Print />
    </>
  );
}

export default App;
