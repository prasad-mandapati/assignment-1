import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "./navbar.module.css";
import arrow from "../../../public/assets/images/arrow.svg";
import { dropdown, icons } from "@/app/data";
import { bell, bookmark, product } from "../../../public/assets/images";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light container-md bg-white py-2 ">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand " href="#">
          <Image
            src={"/assets/images/logo.png"}
            alt="logo"
            width={298}
            height={60}
            className="d-none d-md-block w-100 h-100"
          />
          <Image
            src={"/assets/images/logo.png"}
            alt="logo"
            width={188}
            height={40}
            className="d-md-none"
          />
        </a>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <MdMenu className="text-primary" size={32} />
        </button>

        <form
          className={`${styles.custome_form} d-flex ms-xxl-5 d-none d-lg-flex`}
        >
          <input
            className="form-control border-end-0 rounded-0 rounded-start-3 shadow-none bg-light"
            type="search"
            placeholder="Search here"
            aria-label="Search"
          />
          <button
            className={`btn ${styles.search_btn} rounded-0 rounded-end-3`}
            type="submit"
          >
            <IoSearch />
          </button>
        </form>

        <div
          className="collapse ms-xl-5 ps-md-3 ps-xl-0 navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {dropdown.map((item, i) => {
              return (
                <li className="nav-item dropdown" key={i}>
                  <a
                    className="nav-link d-flex align-items-center w-100 justify-content-md-between"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="me-1">
                      <Image src={item.icon} alt="icon" />
                    </span>
                    <span className="fw-normal para text-dark">{item.text}</span>
                    <span className="ms-2">
                      <Image src={arrow} alt="" />
                    </span>
                  </a>
                  <ul
                    className="dropdown-menu p-0"
                    aria-labelledby="navbarDropdown"
                  >
                    {item.dropData.map((text, i) => {
                      return (
                        <li key={"t" + i} className="py-2 pe-5 border">
                          <a className="dropdown-item" href="#">
                            {text}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="d-none w-25 justify-content-evenly d-md-flex">
          {icons.map((icon, i) => {
            return (
              <a href="" key={i} className="">
                <Image src={icon.icon} alt="bookmark_icon" />
              </a>
            );
          })}
        </div>

        <button
          className={`btn ${styles.custome_btn} border d-none d-md-flex border border-primary fw-bold text-primary justify-content-center`}
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
