import { useState } from "react";

function BasicInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="basicInfo">
      <form>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          placeholder="Position"
        />
      </form>
    </div>
  );
}

export default BasicInfo;
