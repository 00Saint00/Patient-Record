import React, { useState, useEffect } from "react";
import search from "./assets/search.png";
import more from "./assets/more.png";
import { Link } from "react-router-dom";

const SideBar = (Patient) => {
  //   const [patients, setPatients] = useState([]);

  //   let username = "coalition";
  //   let password = "skills-test";
  //   const auth = btoa(`${username}:${password}`);

  //   useEffect(() => {
  //     fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
  //       headers: {
  //         Authorization: `Basic ${auth}`,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setPatients(data);
  //       });
  //   }, []);

  return (
    <div className="w-85 fixed sidebar dark:bg-secondary-dark-bg bg-white mt-5 rounded-lg">
      <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 p-3">
        <div class="flex justify-between items-center">
          <h2 class="text-2xl font-extrabold">Patients</h2>

          <img src={search} alt="search" class="h-4" />
        </div>

        <div className="mt-5">
          <Link key={Patient.name} to={`/SideBar/${Patient.name}`}>
            <div className="flex justify-between">
              <div className="flex align-center gap-2.5 py-4 px-6">
                <img
                  className="w-12 h-12"
                  src={Patient.profile_picture}
                  alt=""
                />
                <span className="p-2 text-start">
                  <p className="mb-0 text-sm font-bold">Dr. Jose Simmons</p>
                  <p className="mb-0 text-sm text-gray-600">
                    General Practitioner
                  </p>
                </span>
              </div>

              <img className="w-auto my-auto" src={more} alt="" />
            </div>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SideBar;
