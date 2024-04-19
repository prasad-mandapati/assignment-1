"use client"
import Image from "next/image";
import React from "react";
import group99 from "../../../../public/assets/images/Group99.png";
import { FaAngleUp } from "react-icons/fa6";

const Community = () => {
  return (
    <div className="bg-info py-md-5 position-relative">
      <div className="container py-5 d-flex flex-column gap-5">
        <div className="d-flex flex-column gap-4">
          <h1 className={`fst-italic heading`}>
            Your <span className="text-primary">Hobby </span>Your
            <span style={{ color: "#0096C8" }}> Community...</span>
          </h1>
          <div>
            <button className="bg-primary rounded-3 text-white btn">
              Get started
            </button>
          </div>
        </div>

        <div>
          <Image src={group99} alt="group image" className="w-100 h-100" />
        </div>

        <div className="d-none d-md-flex flex-column justify-content-center align-items-center gap-2 scroll_container">
          <div
            className="scroll_btn p-3 rounded-5"
            onClick={() => window.scrollTo(0, 0)}
          >
            <FaAngleUp size={24} />
          </div>
          <span className="text-primary">Go to top (Ctrl+Home)</span>
        </div>
      </div>
    </div>
  );
};

export default Community;
