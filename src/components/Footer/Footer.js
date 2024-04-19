import { footer_cols, socialMedia } from "@/app/data";
import Image from "next/image";
import React from "react";
import { FaAngleUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="container-md pb-4 py-md-5">
        <div className="row">
          {footer_cols.map((item, i) => {
            return (
              <div className="col-md-6 col-lg-3 gap-5 mt-4 mt-lg-0" key={i}>
                <div className="d-flex flex-column">
                  <p className="fw-bold d-flex justify-content-between lh-base">
                    {item.head}{" "}
                    <span className="d-md-none">
                      <FaAngleUp />
                    </span>
                  </p>
                  {item.pages.map((page, i) => {
                    return (
                      <span className="lh-lg" key={i}>
                        {page}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="col-md-6 col-lg-3 mt-4 mt-lg-0">
            <div className="d-flex flex-column gap-5">
              <div className="d-flex flex-column gap-2">
                {socialMedia.map((item, i) => {
                  return (
                    <>
                      <p className="fw-bold lh-base" key={i}>
                        {item.head}
                      </p>
                      <div className="d-flex w-100 justify-content-between">
                        {item.icons.map((icon, i) => {
                          return (
                            <span key={i}>
                              <Image src={icon} alt="icons" />
                            </span>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="d-flex flex-column gap-2">
                <p className="fw-bold lh-base">Invite Friends</p>
                <form className={`d-flex`}>
                  <input
                    className="form-control border-end-0 rounded-0 rounded-start-3 shadow-none bg-light"
                    type="search"
                    placeholder="Email ID"
                    aria-label="Search"
                  />
                  <button
                    className={`btn rounded-0 rounded-end-3 bg-primary text-white`}
                    type="submit"
                  >
                    Invite
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-warning py-3 text-center">
        <span>© Purple Cues Private Limited</span>
      </div>
    </div>
  );
};

export default Footer;
