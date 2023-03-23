import { useState } from "react";
import { Title } from "./Title";

export const Contact = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <form
      action="https://getform.io/f/213c393d-1fd7-415c-97a7-f400281a3318"
      method="POST"
      className="pt-20 pb-12 mb-6 w-full flex justify-center"
    >
      <div className="flex flex-col items-center text-zinc-200" id="contact">
        <Title>Contact</Title>
        <div className="relative mb-4 mt-4">
          <input
            type="text"
            className="w-80 p-2 bg-transparent border-2 rounded-md outline-none peer"
            onChange={(event) => setEmail(event.target.value)}
            name="name"
          />
          <label
            className={`${
              email ? "-top-6 left-1" : "top-2 left-4"
            } absolute  peer-focus:-top-6 peer-focus:left-1 transition-all duration-300`}
          >
            Email:
          </label>
        </div>
        <div className="relative mb-4 mt-4">
          <textarea
            className="w-80 h-64 p-2 bg-transparent border-2 rounded-md outline-none peer"
            onChange={(event) => setMessage(event.target.value)}
            name="message"
          />
          <label
            className={`${
              message ? "-top-6 left-1" : "top-2 left-4"
            } absolute  peer-focus:-top-6 peer-focus:left-1 transition-all duration-300`}
          >
            Message:
          </label>
        </div>
        <button className="bg-gradient-to-l from-gray-900 via-purple-900 to-violet-600 w-full p-2 rounded-md">
          Send
        </button>
      </div>
    </form>
  );
};
