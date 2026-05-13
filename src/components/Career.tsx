import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Certifications</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Google Developer Certification</h4>
                <h5>AI & Machine Learning Data</h5>
              </div>
            </div>
            <p>
              Google Developer Certification in AI & Machine Learning Data.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Engineering Master Certification</h4>
                <h5>Professional Certification</h5>
              </div>
            </div>
            <p>
              Master level certification in Engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Professional Certificate</h4>
                <h5>IBM/Coursera</h5>
              </div>
            </div>
            <p>
              Professional Certificate in Data Science by IBM on Coursera.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>iOS App Development</h4>
                <h5>Swift Specialization (In Progress)</h5>
              </div>
            </div>
            <p>
              Specialization in iOS App Development with Swift.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Design Thinking Certification</h4>
                <h5>Professional Certification</h5>
              </div>
            </div>
            <p>
              Certification in Design Thinking principles and methodologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
