"use client";

import React, { useState } from "react";
import styles from "./hero.module.css";
import Group27 from "../../../../public/assets/images/Group27.png";
import Image from "next/image";
import SignIn from "@/components/signup/SignIn";
import JoinIn from "@/components/JoinIn/JoinIn";

const HeroSection = () => {
  const [singIn, setSignIn] = useState(true);

  const hadleClick = (action) => {
    if (action === "signIn") {
      setSignIn(true);
    } else {
      setSignIn(false);
    }
  };

  return (
    <div className="bg-warning pt-5">
      <div className="container">
        <div className="row gap-lg-5 justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-7">
            <h1 className={`fst-italic ${styles.h1_lineheight} heading`}>
              Explore your <span style={{ color: "#0096C8" }}>hobby</span> or
              <span className="text-primary"> passion</span>
            </h1>
            <p className={`${styles.para_line_height} para text-start`}>
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>
            <p className={`${styles.para_line_height} para text-start`}>
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
            <div className="mt-5 d-none d-lg-block">
              <Image src={Group27} alt="group image" className="w-100 h-100" />
            </div>
          </div>
          <div className="col-md-7 col-lg-5 col-xl-4 pt-4">
            <div className="container-fluide">
              <div className="d-flex gap-5">
                <span
                  className={`${
                    singIn
                      ? `text-primary border-primary`
                      : `text-secondary border-white`
                  } fw-bold py-0  border-bottom border-3 ${styles.cursor}`}
                  onClick={() => hadleClick("signIn")}
                >
                  Sign In
                </span>
                <span
                  className={`${
                    !singIn
                      ? `text-primary border-primary`
                      : `text-secondary border-white`
                  } fw-bold py-0  border-bottom border-3  ${styles.cursor}`}
                  onClick={() => hadleClick("joinin")}
                >
                  Join In
                </span>
              </div>
              <div className="d-flex w-full">
                {singIn ? <SignIn /> : <JoinIn />}
              </div>
            </div>
          </div>
          <div className="col-md-7 d-lg-none">
            <Image src={Group27} alt="group image" className="w-100 h-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
