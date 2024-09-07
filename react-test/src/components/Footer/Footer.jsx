import React from "react";

const Footer = () => {
  return (
    <footer className="w-4/5 m-auto py-6 flex flex-col mt-36">
      <h1 className="text-3xl font-bold text-indigo-900 pb-3">Footer</h1>
      <div className="font-semibold flex justify-evenly text-blue-800 text-center">
        <a href="#">
          Home
        </a>
        <a href="#">
          About
        </a>
        <a href="#">
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
