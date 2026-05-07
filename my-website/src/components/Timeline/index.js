import Heading from '@theme/Heading';

const experience = [
  {
    role: 'Consultant — Solution Architect',
    company: 'Reply',
    duration: '2 years',
    current: true,
    description: 'Designing Azure cloud architectures for enterprise clients with an IaC-first approach.',
  },
  {
    role: 'Junior Consultant — Data Engineer',
    company: 'Reply',
    duration: '1 year',
    current: false,
    description: 'Building ETL pipelines and data integration solutions on Azure.',
  },
];

const education = [
  {
    degree: "Bachelor's in Computer Science",
    school: 'University of Genoa',
    year: '2021',
  },
];

export default function Timeline() {
  return (
    <section className="section">
      <div className="container">
        <div className="timelineGrid">
          <div>
            <Heading as="h2" className="sectionTitle">Experience</Heading>
            <div className="timeline">
              {experience.map(({role, company, duration, current, description}, idx) => (
                <div className={`timelineItem${current ? ' timelineItem--current' : ''}`} key={idx}>
                  <div className="timelineRole">
                    {role}
                    {current && <span className="timelineBadge">Current</span>}
                  </div>
                  <div className="timelineCompany">{company}</div>
                  <div className="timelineDuration">{duration}</div>
                  <div className="timelineDesc">{description}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Heading as="h2" className="sectionTitle">Education</Heading>
            <div className="timeline">
              {education.map(({degree, school, year}, idx) => (
                <div className="timelineItem" key={idx}>
                  <div className="timelineRole">{degree}</div>
                  <div className="timelineCompany">{school}</div>
                  <div className="timelineDuration">{year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
