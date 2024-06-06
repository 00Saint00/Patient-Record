import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar";
import Body from "./Components/Body";

function App() {
  const [patients, setPatients] = useState([]);

  let username = "coalition";
  let password = "skills-test";
  const auth = btoa(`${username}:${password}`);

  useEffect(() => {
    fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPatients(data);
      });
  }, []);

  const Patient = patients.map((patient) => ({ ...patient }));

  return (
    <div className="App p-5">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<SideBar Patient={Patient} />} />`
          <Route path="/sidebar/:name" element={<Body />} />`
        </Routes>
      </Router>
    </div>
  );
}

export default App;
