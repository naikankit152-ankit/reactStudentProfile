import { Link } from "react-router-dom";
import { courses } from "../data/courses";

function Courses() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">Course Catalogue</p>
        <h1>Available Courses</h1>
        <p>Select a course to open its dynamic course page.</p>
      </div>

      <div className="course-grid">
        {courses.map((course) => (
          <article className="course-card" key={course.id}>
            <span className="course-code">{course.code}</span>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <Link to={`/course/${course.id}`} className="text-link">
              View Course →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Courses;
