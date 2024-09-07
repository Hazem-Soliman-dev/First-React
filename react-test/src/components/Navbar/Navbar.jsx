import React from "react";

const Navbar = () => {
  return (
    <nav className="w-4/5 m-auto py-6 flex justify-between align-middle">
      <h1 className="text-3xl font-bold text-indigo-900">Navbar</h1>
      <ul className="flex justify-between w-2/6 text-lg font-semibold text-blue-800">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
