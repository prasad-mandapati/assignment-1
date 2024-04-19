"use client";
import { useEffect } from "react";

const Bootstrapjs = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js");
    console.log("hello");
  },[]);
  return null;
};

export default Bootstrapjs;
