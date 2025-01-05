import React from 'react';
import "../style/credit.css";
const developers = [
  {
    name: 'Sumit Kumar',
    linkedin: 'https://www.linkedin.com/in/sumit-kumar-example', // Replace with actual LinkedIn URL
  },
  {
    name: 'John Doe',
    linkedin: 'https://www.linkedin.com/in/john-doe', // Replace with actual LinkedIn URL
  },
];

const contributors = [
  {
    name: 'Jane Smith',
    linkedin: 'https://www.linkedin.com/in/jane-smith', // Replace with actual LinkedIn URL
  },
  {
    name: 'Alice Johnson',
    linkedin: 'https://www.linkedin.com/in/alice-johnson', // Replace with actual LinkedIn URL
  },
];

const CreditsPage = () => {
  return (
    <div className="credits-page">
      <h1>Credits & Attributions</h1>
      
      {/* Developed By Section */}
      <section>
        <h2>Developed By</h2>
        <ul>
          {developers.map((developer, index) => (
            <li key={index}>
              <a href={developer.linkedin} target="_blank" rel="noopener noreferrer">
                {developer.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
      
      {/* Contributors Section */}
      <section>
        <h2>Contributors</h2>
        <ul>
          {contributors.map((contributor, index) => (
            <li key={index}>
              <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer">
                {contributor.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
      
      {/* Libraries & Tools Section */}
      <section>
        <h2>Libraries & Tools</h2>
        <ul>
          <li>ReactJS - A JavaScript library for building user interfaces</li>
          <li>Bootstrap - CSS Framework for responsive design</li>
          <li>FontAwesome - Icon library used for various icons</li>
        </ul>
      </section>
      
      {/* Licenses Section */}
      <section>
        <h2>Licenses</h2>
        <ul>
          <li>This project is licensed under the MIT License</li>
        </ul>
      </section>
    </div>
  );
};

export default CreditsPage;
