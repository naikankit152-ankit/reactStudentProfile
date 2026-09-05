import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [submittedStudent, setSubmittedStudent] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedStudent(formData);
    setFormData({ name: "", email: "", course: "" });
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>React Practical 02</p>
          <h1>Student Registration</h1>
          <p>Enter student information to create a registration record.</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Student Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />
          </label>

          <label>
            Email Address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="student@example.com"
              required
            />
          </label>

          <label>
            Course
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select a course</option>
              <option value="B.Tech CSE (AI & ML)">B.Tech CSE (AI & ML)</option>
              <option value="B.Tech Computer Science">B.Tech Computer Science</option>
              <option value="B.Tech Information Technology">B.Tech Information Technology</option>
            </select>
          </label>

          <button type="submit">Register Student</button>
        </form>
      </section>

      {submittedStudent && (
        <section className={styles.result}>
          <div className={styles.successIcon}>✓</div>
          <div>
            <p className={styles.eyebrow}>Registration Successful</p>
            <h2>{submittedStudent.name}</h2>
            <p><strong>Email:</strong> {submittedStudent.email}</p>
            <p><strong>Course:</strong> {submittedStudent.course}</p>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
