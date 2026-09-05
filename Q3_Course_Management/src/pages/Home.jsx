import { Link } from "react-router-dom";
import { useStudent } from "../context/StudentContext";

function Home() {
  const student = useStudent();

  return (
    <section className="hero-page">
      <div className="hero-copy">
        <p className="eyebrow">Student Course Management</p>
        <h1>Welcome, {student.name}</h1>
        <p className="lead">
          Manage and explore your academic courses from one clean React application.
        </p>
        <div className="student-summary">
          <span>{student.course}</span>
          <span>{student.semester}</span>
        </div>
        <Link to="/courses" className="primary-btn">Browse Courses</Link>
      </div>
    </section>
  );
}

export default Home;
