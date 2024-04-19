import React from "react";
import "./Testimonial.module.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import AudioComponent from "@/components/AudioComponent/AudioComponent";
import dancer from "../../../../public/assets/images/dancer.png";
import dancer2 from "../../../../public/assets/images/dancer2.png";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="py-5">
      <div className="container py-5">
        <div className="bg-warning d-flex flex-column gap-3 border rounded-3 p-2 py-4 p-md-4 px-xl-5">
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 ">
            <div className="bg-primary p-1 rounded-5">
              <RiDoubleQuotesL size={24} className="text-white" />
            </div>
            <span className="fs-5 fw-bold">Testimonials</span>
          </div>
          <p className="para">
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
          <div className="d-flex flex-column-reverse gap-4 flex-lg-row justify-content-between">
            <div className="bg-success rounded-3 d-flex col-lg-7 align-items-center py-1 px-md-5 px-2">
              <div className="w-100">
                <AudioComponent />
              </div>
              <div className="py-2">
                <Image src={dancer} alt="dancer" />
              </div>
            </div>
            <div className="d-flex gap-4 justify-content-center justify-content-lg-end w-100 align-items-center px-3">
              <div>
                <Image src={dancer2} alt="dancer" />
              </div>
              <div className="d-flex flex-column">
                <span className="dancer-name text-primary fw-bold">
                  Shubha Nagarajan
                </span>
                <span
                  className="dancer-name fw-normal"
                  style={{ color: "#0096C8" }}
                >
                  Classical Dancer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
