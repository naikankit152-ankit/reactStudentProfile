function Student({ name, course, college }) {
  return (
    <article className="student-card">
      <div className="avatar">{name.charAt(0)}</div>
      <div className="student-info">
        <span className="badge">Student</span>
        <h2>{name}</h2>
        <p><strong>Course:</strong> {course}</p>
        <p><strong>College:</strong> {college}</p>
      </div>
    </article>
  );
}

export default Student;
