import React, { useEffect, useState } from "react";
import "./App.css";

const general_subjects = {};
const specific_subjects = {};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [links, setLinks] = useState({
    qs: "",
    sh: "",
    th: "",
  });
  const [data, setData] = useState({
    grad_date: "",
    general_subject: "",
    specific_subject: "",
    university: "",
  });
  const [error, setError] = useState(null);

  const checkQualification = async () => {};

  return (
    <div className="qualification_widget__app">
      <h1 className="qualification_widget__header">
        Check whether you meet neccassary criteria
      </h1>
    </div>
  );
}

export default App;
