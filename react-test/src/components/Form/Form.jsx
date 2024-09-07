import React from "react";

const Form = () => {
  return (
    <section className="flex justify-center align-middle mt-32">
      <form className="w-1/4 px-5 py-6 bg-blue-500 rounded-sm">
        <div className="my-3">
          <input type="text" placeholder="Enter Your User Name" className="w-full py-2 px-3"/>
        </div>
        <div className="my-4">
          <input type="text" placeholder="Enter Your Password" className="w-full py-2 px-3"/>
        </div>
        <div className="my-3 flex justify-center gap-6">
          <button type="submit" className="bg-indigo-900 px-4 py-2 text-white">Login</button>
          <button type="submit" className="bg-green-600 px-4 py-2 text-white">New User</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
