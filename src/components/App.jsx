import { useState } from "react";

import "../styles/App.css";
import BasicInfo from "./BasicInfo";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    summary: "",
    jobTitle: "",
    workplace: "",
    jobStartYear: "",
    jobEndYear: "",
    role: "",
    university: "",
    degree: "",
    uniStartYear: "",
    uniEndYear: "",
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
    <section className="cv-form">
      <BasicInfo handleChange={handleChange} formData={formData} />
      <Summary handleChange={handleChange} formData={formData} />
      <Experience handleChange={handleChange} formData={formData} />
      <Education handleChange={handleChange} formData={formData} />
    </section>
  );
}

export default App;
