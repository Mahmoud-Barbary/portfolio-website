// Education component for the portfolio website
// This section shows university education with graduation photo and university logos

import React from 'react';
import './Education.css';
import graduationPhoto from '../../assets/graduation.jpg';
import euiLogo from '../../assets/EUI.png';
import umnLogo from '../../assets/UMN.png';

// Main Education component function
function Education() {
  return (
    // Education section container
    <section className="education">
      <div className="education-content">
        {/* Header text */}
        <h2 className="education-title">Graduated in CS from:</h2>
        
        {/* Graduation Photo */}
        <div className="graduation-photo">
          <img 
            src={graduationPhoto} 
            alt="Mahmoud's Graduation Photo" 
            className="graduation-image"
          />
        </div>

        {/* Universities container */}
        <div className="universities-container">
          {/* EUI University */}
          <div className="university-card">
            <div className="university-logo">
              <img 
                src={euiLogo} 
                alt="EUI Logo" 
                className="logo-image"
              />
            </div>
                               <h3 className="university-name">Egypt University of Informatics</h3>
                   <p className="gpa">GPA: 3.98/4.0</p>
                 </div>

                 {/* UMN University */}
                 <div className="university-card">
                   <div className="university-logo">
                     <img 
                       src={umnLogo} 
                       alt="UMN Logo" 
                       className="logo-image"
                     />
                   </div>
                   <h3 className="university-name">University of Minnesota</h3>
                   <p className="gpa">GPA: 4.0/4.0</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export the component so it can be imported in other files
export default Education;
