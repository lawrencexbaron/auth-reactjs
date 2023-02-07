import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="m-10 sm:w-1/2 sm:mx-auto gap-5 flex flex-col border-2 rounded-md border-gray-100 shadow-md px-5 py-6">
        <div className="mx-auto">
          <h1 className="text-2xl font-bold">Authentication</h1>
        </div>
        <div className="mx-auto flex flex-col space-y-1">
          <label htmlFor="username" className="text-base font-semibold">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="border-2 border-gray-100 rounded-md px-2 py-1"
          />
          <label htmlFor="email" className="text-base font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-2 border-gray-100 rounded-md px-2 py-1"
          />
          <label htmlFor="contact" className="text-base font-semibold">
            Contact
          </label>
          <input
            type="text"
            name="contact"
            id="contact"
            className="border-2 border-gray-100 rounded-md px-2 py-1"
          />

          <label htmlFor="password" className="text-base font-semibold">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-2 border-gray-100 rounded-md px-2 py-1"
          />
          <label htmlFor="confirmPassword" className="text-base font-semibold">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="border-2 border-gray-100 rounded-md px-2 py-1"
          />
          <button className="bg-blue-500 text-white rounded-md px-2 py-1">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
