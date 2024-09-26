/* eslint-disable react/prop-types */
import "../styles/BasicInfo.css";

function BasicInfo({ formData, handleChange }) {
  return (
    <div className="basicInfo">
      <form className="info">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          placeholder="Position"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
        />

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
        />
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="Website"
        />
      </form>
    </div>
  );
}

export default BasicInfo;
