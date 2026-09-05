import Student from "./components/Student";

function App() {
  return (
    <main className="app">
      <section className="hero">
        <p className="eyebrow">React Practical 01</p>
        <h1>Student Profile Directory</h1>
        <p className="subtitle">
          A simple demonstration of functional components, props and JSX.
        </p>
      </section>

      <section className="student-grid">
        <Student
          name="Ankit Naik"
          course="B.Tech CSE (AI & ML)"
          college="University Student"
        />
        <Student
          name="Aarav Sharma"
          course="B.Tech Computer Science"
          college="University Student"
        />
      </section>
    </main>
  );
}

export default App;
