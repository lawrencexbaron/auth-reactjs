import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, contact, password, confirmPassword);
    // clear the form
    setUsername("");
    setEmail("");
    setContact("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <div className="App">
      <div className="m-10 sm:w-1/2 sm:mx-auto gap-5 flex flex-col border-2 rounded-md border-gray-100 shadow-md px-5 py-6">
        <div className="mx-auto">
          <h1 className="text-2xl font-bold">Authentication</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mx-auto flex flex-col space-y-1">
            <label htmlFor="username" className="text-base font-semibold">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              id="username"
              className="border-2 border-gray-100 rounded-md px-2 py-1"
            />
            <label htmlFor="email" className="text-base font-semibold">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
              className="border-2 border-gray-100 rounded-md px-2 py-1"
            />
            <label htmlFor="contact" className="text-base font-semibold">
              Contact
            </label>
            <input
              type="text"
              value={contact}
              name="contact"
              onChange={(e) => setContact(e.target.value)}
              id="contact"
              className="border-2 border-gray-100 rounded-md px-2 py-1"
            />

            <label htmlFor="password" className="text-base font-semibold">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
              className="border-2 border-gray-100 rounded-md px-2 py-1"
            />
            <label
              htmlFor="confirmPassword"
              className="text-base font-semibold"
            >
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmPassword"
              id="confirmPassword"
              className="border-2 border-gray-100 rounded-md px-2 py-1"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-2 py-1"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
