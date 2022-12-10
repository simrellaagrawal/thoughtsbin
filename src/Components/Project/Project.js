import React from "react";
import Sidebar from "../Sidebar";
import Thoughtbin from "../Thoughtbin";
import "./project.css";
const Project = () => {
  return (
    <>
        <div className="flex">
          <div className="flex-none">
          <Sidebar />
          </div>
          <div className="flex-none">
            <Thoughtbin />
          </div>
        </div>
    </>
  );
};

export default Project;
