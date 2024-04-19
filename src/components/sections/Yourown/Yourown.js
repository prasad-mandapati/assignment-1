import React from "react";
import { IoAddCircle } from "react-icons/io5";
import styles from "./Yourown.module.css";

const Yourown = () => {
  return (
    <div className="bg-info py-5">
      <div className="container py-5">
        <div className="bg-white d-flex flex-column gap-3 border rounded-3 p-4 px-xl-5">
          <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 ">
            <IoAddCircle size={38} color="#0096C8" />
            <span className="fs-5 fw-bold">Add your own</span>
          </div>
          <p className="para text-md-start">
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </p>
          <div className="d-grid d-md-block">
            <button className="btn border para border-primary text-primary">
              {" "}
              Add new
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yourown;
