import React from 'react';
import './TeamSection.css'; // Importing CSS for styling

const TeamSection: React.FC = () => {
    const teamMembers = [
        { name: 'Sophia Lee', role: 'Founder & CEO', image: '/images/sophia.jpg' },
        { name: 'Liam Chen', role: 'Creative Director', image: '/images/liam.jpg' },
        { name: 'Olivia Kim', role: 'Marketing Manager', image: '/images/olivia.jpg' },
        { name: 'Noah Smith', role: 'Lead Designer', image: '/images/noah.jpg' },
    ];

    return (
        <section className="team-section">
            <h2 className="team-title">Meet Our Team</h2>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={member.image} alt={member.name} className="member-image" />
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-role">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;