import { createContext, useContext } from "react";

const StudentContext = createContext(null);

export function StudentProvider({ children }) {
  const student = {
    name: "Ankit Naik",
    course: "B.Tech CSE (AI & ML)",
    semester: "Current Semester",
  };

  return (
    <StudentContext.Provider value={student}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  return useContext(StudentContext);
}
