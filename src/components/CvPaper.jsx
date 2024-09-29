/* eslint-disable react/prop-types */
import "../styles/CvPaper.css";

function CvPaper({ formData }) {
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
      <div className="job-education--wrapper">
        <div className="job-print">
          <h1>Work Experience</h1>
          <div className="job-print--details">
            <div className="job-print--wrapper">
              <div className="job-print--title">
                <h2>{formData.jobTitle}</h2>
              </div>
              <div className="job-print--years">
                <span>{formData.jobStartYear}-</span>
                <span>{formData.jobEndYear}</span>
              </div>
            </div>
            <h3 className="print-workplace">{formData.workplace}</h3>

            <p>{formData.role}</p>
          </div>
        </div>

        <div className="education-print">
          <h1>Educational background</h1>
          <div className="education-print--details">
            <div className="education-print--wrapper">
              <div className="education-print--title">
                <h2>{formData.university}</h2>
              </div>
              <div className="education-print--years">
                <span>{formData.uniStartYear}-</span>
                <span>{formData.uniEndYear}</span>
              </div>
            </div>
            <h3 className="education-degree">{formData.degree}</h3>
          </div>
        </div>
      </div>
      <div className="skills-print">
        <h1>Technikal Skills</h1>
        <div className="skills-wrapper">
          {formData.skills ? <i className="fa-regular fa-circle"></i> : ""}
          <h2>{formData.skills}</h2>
        </div>
      </div>
    </div>
  );
}

export default CvPaper;
