import Image from "next/image";
import React from "react";
import { facebooksvg, googlesvg } from "../../../public/assets/images";
import { MdLock } from "react-icons/md";

const SignIn = () => {
  return (
    <form action="" className="d-flex w-100 flex-column gap-3 py-5">
      <button className="btn d-flex px-4 align-items-center text-center rounded-3 border border-primary w-100">
        <Image src={googlesvg} alt="google" />
        <div className="fw-bold w-100">Continue with Google</div>
      </button>

      <button className="d-flex btn px-4 align-items-center rounded-3 border border-primary w-100">
        <Image src={facebooksvg} alt="google" />
        <div className=" fw-bold text-center w-100 btn-outline-0">
          Continue with Facebook
        </div>
      </button>

      <div className="d-flex justify-content-center gap-2 align-items-center py-2">
        <span className="border border-dark w-100"></span>
        <span className="w-100 fw-normal"> Or connect with</span>
        <span className="border border-dark w-100"></span>
      </div>

      <input type="email" className="form-control" placeholder="Email" />

      <input type="password" className="form-control" placeholder="Password" />

      <div className="d-flex justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          <input type="checkbox" aria-label="Remember me" />
          <span className="option">Remember Me</span>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <MdLock />
          <span className="option">Forgot password?</span>
        </div>
      </div>

      <button className="btn fw-bold border-2 border-dark text-center w-100">
        Continue
      </button>
    </form>
  );
};

export default SignIn;
