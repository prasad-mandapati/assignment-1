import Image from "next/image";
import React from "react";
import {
  basket,
  calender,
  location,
  people,
} from "../../../../public/assets/images/index";
import styles from "./Features.module.css";

const Features = () => {
  return (
    <div className="py-5">
      <div className="container d-flex flex-column py-md-3 py-lg-5">
        <div className="d-flex flex-column flex-md-row justify-content-between gap-5 px-2 px-md-0 pt-xl-5">
          <div
            className={`${styles.card} ${styles.card1} w-100 rounded-3 p-4  px-xl-5`}
          >
            <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3 py-2">
              <Image
                src={people}
                alt="people icons"
                className={`${styles.image}`}
              />
              <span className="fw-bold fs-5">People</span>
            </div>
            <p className={`text-center para text-lg-start`}>
              An Individual or Organization. Teacher, Coach, Professional or
              Online Seller. Company, Business
            </p>
            <div className="d-grid d-lg-block">
              <button className={`${styles.btn_custome} btn para`}>
                Connect
              </button>
            </div>
          </div>

          <div
            className={`${styles.card} ${styles.card2} w-100 rounded-3 p-4  px-xl-5`}
          >
            <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3 py-2">
              <Image
                src={location}
                alt="people icons"
                className={`${styles.image}`}
              />
              <span className="fw-bold fs-5">Place</span>
            </div>
            <p className={`text-center para text-lg-start`}>
              An Address. Classroom, Shop, Performance or Event Venue, Sports
              Arena, Play Area, Studio, School or Campus.
            </p>
            <div className="d-grid d-lg-block">
              <button className={`${styles.btn_custome} btn  para`}>
                Meet up
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between gap-5 px-2 px-md-0 pt-5 py-xl-5">
          <div
            className={`${styles.card} ${styles.card3} w-100 rounded-3 p-4  px-xl-5`}
          >
            <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3 py-2">
              <Image
                src={basket}
                alt="people icons"
                className={`${styles.image}`}
              />
              <span className="fw-bold fs-5">Product</span>
            </div>
            <p className={`text-center para text-lg-start`}>
              An Item that you can Book, Buy or Rent. Appointment, Ticket, or
              Voucher. Equipment, Instrument or Activity Kit.
            </p>
            <div className="d-grid d-lg-block">
              <button className={`${styles.btn_custome} btn  para`}>
                Get it
              </button>
            </div>
          </div>

          <div
            className={`${styles.card} ${styles.card4} w-100 rounded-3 p-4  px-xl-5`}
          >
            <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3 py-2">
              <Image
                src={calender}
                alt="people icons"
                className={`${styles.image}`}
              />
              <span className="fw-bold fs-5">Program</span>
            </div>
            <p className={`text-center para text-lg-start`}>
              An Event with Venue and Date. Meetup, Workshop or Webinar.
              Exhibition, Performance or Competition.
            </p>
            <div className="d-grid d-lg-block">
              <button className={`${styles.btn_custome} btn  para`}>
                Attend
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
