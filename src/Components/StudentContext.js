import React, { createContext, useState } from "react";

//! This Component Contatins Student Data

export const StudentContext = createContext();

export const StudentProvider = (props) => {
  const [students, setStudents] = useState([
    {
      name: "Natasha",
      birthdate: "9 - 27 - 1990",
      grade: "A",
      mentor: "Pooja",
      id: "ST001",
    },
    {
      name: "Nimisha",
      birthdate: "8 - 20 - 1990",
      grade: "A",
      mentor: "Pooja",
      id: "ST002",
    },
    {
      name: "Nisha",
      birthdate: "9 - 21 - 1990",
      grade: "A",
      mentor: "Lavanya",
      id: "ST003",
    },
    {
      name: "Saira",
      birthdate: "7 - 03 - 1990",
      grade: "A",
      mentor: "Lavanya",
      id: "ST004",
    },
    {
      name: "Mala",
      birthdate: "9 - 05 - 1990",
      grade: "B",
      mentor: "Pooja",
      id: "ST005",
    },
    {
      name: "Mimi",
      birthdate: "9 - 27 - 1990",
      grade: "B",
      mentor: "Pooja",
      id: "ST006",
    },
    {
      name: "Kaira",
      birthdate: "10 - 02 - 1990",
      grade: "B",
      mentor: "Priya",
      id: "ST007",
    },
  ]);

  return (
    <StudentContext.Provider value={[students, setStudents]}>
      {props.children}
    </StudentContext.Provider>
  );
};
