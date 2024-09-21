import { useState } from "react";

import "../styles/App.css";
import BasicInfo from "./BasicInfo";
import Summary from "./Summary";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    summary: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <BasicInfo handleChange={handleChange} formData={formData} />
      <Summary handleChange={handleChange} formData={formData} />
    </>
  );
}

export default App;
