import { Link, useParams } from "react-router-dom";
import { courses } from "../data/courses";
import { useStudent } from "../context/StudentContext";

function CourseDetails() {
  const { id } = useParams();
  const student = useStudent();
  const course = courses.find((item) => item.id === id);

  if (!course) {
    return (
      <section className="page-section">
        <div className="details-card">
          <h1>Course not found</h1>
          <p>The requested course does not exist.</p>
          <Link to="/courses" className="primary-btn">Back to Courses</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="details-card">
        <span className="course-code">{course.code}</span>
        <h1>{course.title}</h1>
        <p className="lead">{course.description}</p>

        <div className="details-grid">
          <div>
            <span className="label">Instructor</span>
            <strong>{course.instructor}</strong>
          </div>
          <div>
            <span className="label">Student</span>
            <strong>{student.name}</strong>
          </div>
          <div>
            <span className="label">Program</span>
            <strong>{student.course}</strong>
          </div>
        </div>

        <Link to="/courses" className="primary-btn">← Back to Courses</Link>
      </div>
    </section>
  );
}

export default CourseDetails;
