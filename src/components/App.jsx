import { useState } from "react";

import "../styles/App.css";
import BasicInfo from "./BasicInfo";

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

  return <BasicInfo handleChange={handleChange} formData={formData} />;
}

export default App;
