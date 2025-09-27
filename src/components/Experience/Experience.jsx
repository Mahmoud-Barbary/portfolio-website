// Experience component for the portfolio website
// Simple, working timeline

import React, { useState } from 'react';
import './Experience.css';
import imgHighSchool from '../../assets/experience/High School Graduation.jpg';
import imgConference from '../../assets/experience/Conference Speaker.jpg';
import imgVideoEditor from '../../assets/experience/Video Editor.jpg';
import imgAIIntern from '../../assets/experience/AI Engineering Intern.png';
import imgInternationalUMN from '../../assets/experience/International Year at UMN.jpg';
import imgCommunication from '../../assets/experience/Communication Liaison.png';
import imgUMNGraduation from '../../assets/experience/UMN Graduation.jpg';
import imgEUGraduation from '../../assets/experience/EUI Graduation.jpg';

// Experience data — chronological order from 2021 to present
// Supports multiple items per year via month labels
const experienceData = [
  {
    id: 1,
    date: '2021',
    month: 'Oct',
    title: 'High School Graduation',
    company: 'Egypt (National Rank 132)',
    description: 'Graduated high school ranked 132nd nationally; earned a full scholarship to study at Egypt University of Informatics (EUI).',
    shortDescription: 'Ranked 132nd nationally and earned a full scholarship to study at Egypt University of Informatics.',
    image: imgHighSchool
  },
  {
    id: 2,
    date: '2022',
    month: 'Jul',
    title: 'Conference Speaker',
    company: 'Digital Egypt Initiative',
    description: 'Represented EUI as a speaker at the Digital Egypt initiative & conference before the President of Egypt.',
    shortDescription: 'Represented my university and presented in front of Egypt\'s president at a national conference.',
    image: imgConference
  },
  {
    id: 3,
    date: '2022',
    month: 'Oct',
    title: 'Video Editor',
    company: 'Medical Startup & Real Estate Ads',
    description: 'Produced promotional videos and ads for a medical startup introducing a new medicine locally, as well as real estate campaigns. Engagement-focused content. (Oct 2022 – Mar 2023)',
    shortDescription: 'Created promotional videos for medical startups and real estate, developing my creative and editing skills.',
    image: imgVideoEditor
  },
  {
    id: 4,
    date: '2023',
    month: 'May',
    title: 'AI Engineering Intern',
    company: 'Premio.AI',
    description: 'Contributed to Arabic LLM development; researched, evaluated and processed diverse datasets; published a 900M-row dataset on Hugging Face; laid groundwork for a research paper. (May – Sep 2023)',
    shortDescription: 'Published a 900M+ row dataset on Hugging Face and contributed to Arabic language model development.',
    image: imgAIIntern
  },
  {
    id: 5,
    date: '2024',
    month: 'Aug',
    title: 'Abroad Year at UMN',
    company: 'University of Minnesota',
    description: 'Awarded a merit-based full scholarship to complete final year at UMN; began taking UMN courses online alongside EUI coursework, then travelled to Minnesota for the international year abroad.',
    shortDescription: 'Earned a full merit scholarship and travelled to Minnesota to complete my final year abroad as an international student.',
    image: imgInternationalUMN
  },
  {
    id: 6,
    date: '2024',
    month: 'Oct',
    title: 'Communication Liaison',
    company: 'UMN Off-Campus Living',
    description: 'Produced promotional content and videos; led outreach campaigns; assisted students; handled calls and emails; represented the office at fairs and events; increased social engagement by 175%. (Oct 2024 – May 2025)',
    shortDescription: 'Produced promotional content and videos while leading outreach campaigns and assisting students with housing needs.',
    image: imgCommunication
  },
  {
    id: 7,
    date: '2025',
    month: 'May',
    title: 'UMN Graduation',
    company: 'University of Minnesota',
    description: 'Completed my senior year at the University of Minnesota and graduated with a B.S. in Computer Science following my international year abroad.',
    shortDescription: 'Graduated from UMN after completing my international year abroad.',
    image: imgUMNGraduation
  },
  {
    id: 8,
    date: '2025',
    month: 'Sep',
    title: 'EUI Graduation',
    company: 'Egypt University of Informatics (EUI)',
    description: 'Awarded a B.Sc. in Computer Science from EUI, ranking first in the CS faculty. Delivered the commencement speech on behalf of EUI’s first graduating cohort before national and university leaders.',
    shortDescription: 'Ranked first in CS and delivered the commencement speech for EUI’s first cohort.',
    image: imgEUGraduation
  }
];

// Main Experience component function
function Experience() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="experience">
      {/* Section title */}
      <div className="experience-header">
        <h2 className="experience-title">Experience</h2>
        <p className="experience-subtitle">My academic and professional path through the years</p>
        <p className="experience-instruction">(Hover over a circle for more details)</p>
      </div>

      {/* Timeline container */}
      <div className="timeline-container">
        {/* Main timeline line */}
        <div className="timeline-line"></div>

        {/* Experience items */}
        <div className="experience-items">
          {experienceData.map((item, index) => (
            <div key={item.id} className="experience-item">
                             {/* Timeline marker */}
               <div className="timeline-marker">
                 {/* Extending line */}
                 <div className={`marker-line ${index % 2 === 0 ? 'left' : 'right'}`}></div>
                 
                 {/* Single element that changes from circle to square */}
                 <div 
                   className={`marker-element ${hoveredId === item.id ? 'expanded' : ''}`}
                   onMouseEnter={() => setHoveredId(item.id)}
                   onMouseLeave={() => setHoveredId(null)}
                 >
                   {/* Content that shows when expanded */}
                   <div className={`marker-content ${hoveredId === item.id ? 'visible' : ''}`}>
                     <div className="content-image">
                       <img src={item.image} alt={item.title} />
                     </div>
                     <div className="content-text">
                       <h3>{item.title}</h3>
                       <p className="company">{item.company}</p>
                       <p className="short-description">{item.shortDescription}</p>
                     </div>
                   </div>
                 </div>
                 
                 {/* Date */}
                 <div className="marker-date">{item.month} {item.date}</div>
                 
                 {/* Event title */}
                 <div className="marker-title">{item.title}</div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
