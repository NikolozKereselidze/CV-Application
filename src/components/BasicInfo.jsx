/* eslint-disable react/prop-types */

function BasicInfo({ formData, handleChange }) {
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
