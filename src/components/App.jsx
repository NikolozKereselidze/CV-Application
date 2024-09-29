import { useState } from "react";

import "../styles/App.css";
import BasicInfo from "./BasicInfo";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import CvPaper from "./CvPaper";
import Skills from "./Skills";

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
    jobTitle: "Web Developer",
    workplace: "Own Company",
    jobStartYear: "2020-04",
    jobEndYear: "2024-04",
    role: "Lorem ipsum dolor sit amet consectetur adipisicing elit. quos natus consectetur sint",
    university: "Tbilisi State University",
    degree: "Computer Science",
    uniStartYear: "2020-04",
    uniEndYear: "2024-04",
    skills: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="cv-form">
        <BasicInfo handleChange={handleChange} formData={formData} />
        <Summary handleChange={handleChange} formData={formData} />
        <Education handleChange={handleChange} formData={formData} />
        <Experience handleChange={handleChange} formData={formData} />
        <Skills handleChange={handleChange} formData={formData} />
      </section>
      <section className="cv-container">
        <CvPaper formData={formData} />
      </section>
    </>
  );
}

export default App;
