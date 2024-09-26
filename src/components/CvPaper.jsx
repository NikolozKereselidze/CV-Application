/* eslint-disable react/prop-types */
import "../styles/CvPaper.css";

function CvPaper({ formData }) {
  console.log(formData);
  return (
    <div className="cv-paper">
      <div className="basics-print">
        <h1>{formData.name}</h1>
        <h2>{formData.position}</h2>
        <p>{formData.summary}</p>
      </div>

      <div className="contact-print">
        <i className="fa-solid fa-envelope">
          <span>{formData.email}</span>
        </i>

        <i className="fa-solid fa-phone">
          <span>{formData.phone}</span>
        </i>

        <i className="fa-solid fa-location">
          <span>{formData.location}</span>
        </i>

        <i className="fa-solid fa-link">
          <a href={formData.website}>{formData.website}</a>
        </i>
      </div>

      <div className="job-print">
        <h1>Work Experience</h1>
        <div className="job-print--details">
          <div className="job-print--wrapper">
            <div className="job-print--title">
              <h2>{formData.jobTitle}</h2>
              <h2>{formData.workplace}</h2>
            </div>
            <div className="job-print--years">
              <span>{formData.jobStartYear}-</span>
              <span>{formData.jobEndYear}</span>
            </div>
          </div>

          <h2>{formData.role}</h2>
        </div>
      </div>

      <div className="university-print">
        <h2>{formData.university}</h2>
        <h2>{formData.degree}</h2>
        <h2>{formData.uniStartYear}</h2>
        <h2>{formData.uniEndYear}</h2>
      </div>
    </div>
  );
}

export default CvPaper;
