import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import StatsCard from '../../components/dashboard/StatsCard';
import CourseCarousel from '../../components/courses/CourseCarousel';
import RecentActivity from '../../components/dashboard/RecentActivity';
import AssignmentCard from '../../components/dashboard/AssignmentCard';
import CourseCard from '../../components/courses/CourseCard';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();
  const [dashboardData, setDashboardData] = useState({
    activeCourses: 4,
    hoursLearned: 28,
    assignmentsDue: 2,
    certificates: 3,
    currentCourses: [
      {
        id: 1,
        title: "Advanced React Patterns",
        description: "Master advanced React concepts and patterns",
        progress: 65,
        lessonsCompleted: 12,
        totalLessons: 18,
        image: "/assets/images/courseImg1.png"
      },
      {
        id: 2,
        title: "Node.js Fundamentals",
        description: "Learn backend development with Node.js",
        progress: 40,
        lessonsCompleted: 8,
        totalLessons: 20,
        image: "/assets/images/courseImg2.png"
      }
    ],
    upcomingAssignments: [
      {
        id: 1,
        title: "React Component Library",
        course: "Advanced React Patterns",
        dueDate: "Tomorrow, 11:59 PM",
        status: "Due Soon"
      },
      {
        id: 2,
        title: "REST API Implementation",
        course: "Node.js Fundamentals",
        dueDate: "Friday, 11:59 PM",
        status: "Urgent"
      }
    ],
    recommendedCourses: [
      {
        id: 3,
        title: "JavaScript Mastery",
        description: "Beginner to Advanced",
        category: "Popular",
        image: "/assets/images/courseImg3.png"
      },
      {
        id: 4,
        title: "Database Design",
        description: "SQL & NoSQL",
        category: "New",
        image: "/assets/images/courseImg4.png"
      }
    ],
    recentActivities: [
      {
        id: 1,
        type: "Course Completion",
        title: "Completed 'Advanced React Patterns' course",
        time: "Today, 10:45 AM"
      },
      {
        id: 2,
        type: "Assignment",
        title: "Submitted assignment for 'Node.js Fundamentals'",
        time: "Yesterday, 3:30 PM"
      }
    ]
  });

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome Back, {user?.firstName || 'Student'}!</h1>
      <p className="dashboard-subtitle">Here's what's happening with your learning today</p>
      
      <div className="stats-grid">
        <StatsCard 
          title="Active Courses" 
          value={dashboardData.activeCourses} 
          icon="book" 
          color="primary" 
        />
        <StatsCard 
          title="Hours Learned" 
          value={dashboardData.hoursLearned} 
          icon="clock" 
          color="success" 
        />
        <StatsCard 
          title="Assignments Due" 
          value={dashboardData.assignmentsDue} 
          icon="assignment" 
          color="warning" 
        />
        <StatsCard 
          title="Certificates" 
          value={dashboardData.certificates} 
          icon="award" 
          color="danger" 
        />
      </div>
      
      <div className="dashboard-section">
        <h2 className="section-title">Continue Learning</h2>
        <CourseCarousel courses={dashboardData.currentCourses} />
      </div>
      
      <div className="dashboard-row">
        <div className="dashboard-col">
          <h2 className="section-title">Upcoming Assignments</h2>
          <div className="assignments-list">
            {dashboardData.upcomingAssignments.map(assignment => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </div>
        
        <div className="dashboard-col">
          <h2 className="section-title">Recommended Courses</h2>
          <div className="recommended-courses">
            {dashboardData.recommendedCourses.map(course => (
              <CourseCard key={course.id} course={course} compact />
            ))}
          </div>
          
          <h2 className="section-title">Recent Activity</h2>
          <RecentActivity activities={dashboardData.recentActivities} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
