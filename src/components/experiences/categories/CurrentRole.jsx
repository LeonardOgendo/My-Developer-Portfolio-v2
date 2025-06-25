import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { calculateMonths } from '../../../shared/utils/dateUtils';

const CurrentRole = () => {
    
    const monthsDiff = calculateMonths('2022-02-03');

    return (
        <div className="current-role">
            <div className="role-header">
                <div className="role-info">
                    <h3 className="job-title">Freelance Software Developer</h3>
                    <div className="company-location">
                        <span><FaBuilding /> Online Platforms | Casual Contracts</span>
                        <span><FaMapMarkerAlt /> Remote</span>
                    </div>
                </div>
                <div className="role-duration">
                    <span><FaCalendarAlt /> February 2022 – Present</span>
                    <span className="role-months">{monthsDiff} {monthsDiff === 1 ? 'month' : 'months'}</span>
                </div>
            </div>

            <div className="role-timeline">
                <div className="timeline-marker"></div>
                <div className="timeline-activities">
                    <div className="activity-item">
                        <h4>Developed core features in MERN stack</h4>
                        <p>Collaborated with the engineering team to implement secure REST APIs and dynamic UIs using React and Express.js.</p>
                    </div>
                    <div className="activity-item">
                        <h4>Integrated DevOps tools</h4>
                        <p>Worked with GitHub Actions to automate deployment pipelines and linting processes.</p>
                    </div>
                    {/* Add more activities as needed */}
                </div>
            </div>
        </div>
    );
};

export default CurrentRole;
