import React from 'react'
import { BarChart , Bar , XAxis , Tooltip , ResponsiveContainer } from "recharts";
import { FaListUl , FaChartLine , FaLightbulb , FaProjectDiagram , FaMapSigns , FaBook , FaUserCircle , FaSignOutAlt ,FaTrophy , FaMedal } from 'react-icons/fa';
import "../style/profile.css";

 
const Profile = () => {
  const submissions = [
    { id: 1, title: "Two Sum", status: "Accepted", time: "1 hour ago" },
    { id: 2, title: "Binary Search", status: "Wrong Answer", time: "3 hours ago" },
    { id: 3, title: "Linked List Cycle", status: "Accepted", time: "Yesterday" },
  ];

  const contributionData = [
    { day: "Mon", submissions: 2 },
    { day: "Tue", submissions: 4 },
    { day: "Wed", submissions: 3 },
    { day: "Thu", submissions: 5 },
    { day: "Fri", submissions: 7 },
    { day: "Sat", submissions: 8 },
    { day: "Sun", submissions: 6 },
  ];


  return (
    <>
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Code Assist</h2>
        <ul>
          <li>
            <a href="/problems" className="sidebar-link">
              <FaListUl className='icon'/> Problems
            </a>
          </li>
          <li>
            <a href="/events" className="sidebar-link">
              <FaChartLine className='icon'/> Events
            </a>
          </li>
          <li>
            <a href="idea-pitch" className="sidebar-link">
              <FaLightbulb className='icon'/> Idea-Pitching
            </a>
          </li>
          <li>
            <a href="/projects" className="sidebar-link">
              <FaProjectDiagram className='icon'/> Projects
            </a>
          </li>
          <li>
            <a href="/roadmaps" className="sidebar-link">
              <FaMapSigns className='icon'/> Roadmaps
            </a>
          </li>
          <li>
            <a href="/notes" className="sidebar-link">
              <FaBook className='icon'/> Notes
            </a>
          </li>
          <li>
            <a href="/leaderboard" className="sidebar-link">
              <FaUserCircle className='icon'/> Leaderboard
            </a>
          </li>
          <li>
            <a href="#" className="sidebar-link">
              <FaSignOutAlt className='icon'/> Logout
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="profile-main-content">
        {/* Profile Section */}
        <div className="profile-section">
          <img src="https://via.placeholder.com/100" alt="Profile" className="profile-img" />
          <div className='profile-detail'>
            <h1 className="profile-name">Dhruv Bansal</h1>
            <p className="profile-desc">Competitive Programmer | Web Developer</p>
          </div>
        </div>

        {/* Achievements */}
        <div className="achievements">
          <div className="achievement-item gold">
            <FaTrophy /> 5-Star Coder
          </div>
          <div className="achievement-item silver">
            <FaMedal /> 500+ Problems Solved
          </div>
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="stat-item">
            <h2 className="stat-number">1,200</h2>
            <p className='stat-text'>Total Submissions</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">450</h2>
            <p className='stat-text'>Accepted Solutions</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">50</h2>
            <p className='stat-text'>Wrong Answers</p>
          </div>
        </div>


        {/* Recent Submissions */}
        <div className="submissions">
          <h2 style={{backgroundColor : "transparent" , color : "#333333"}}>Recent Submissions</h2>
          {submissions.map((submission) => (
            <div key={submission.id} className="submission-item">
              <span style={{backgroundColor : "transparent" , color : "#000"}}>{submission.title}</span>
              <span className={`status ${submission.status === "Accepted" ? "accepted" : "wrong"}`}>
                {submission.status}
              </span>
              <span style={{backgroundColor : "transparent" , color : "#000"}} className="submission-time">{submission.time}</span>
            </div>
          ))}
        </div>


        {/* Contribution Graph */} 
        <div className="contribution-graph">
          <h2 style={{backgroundColor : "transparent" , color : "#333333"}}>Weekly Contribution Graph</h2>
          <ResponsiveContainer width="100%" height={200} className="chartContainer">
            <BarChart data={contributionData} className="chartContainer">
              <XAxis dataKey="day" />
              <Tooltip />
              <Bar dataKey="submissions" fill="#4caf50" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>

    </div>
    </>
  );
};

export default Profile;