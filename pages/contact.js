import emailjs from "emailjs-com";
import React, { useRef, useState } from "react";

export default function Contact() {
  const id = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID;
  const template = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID;
  const user = process.env.NEXT_PUBLIC_YOUR_USER_ID;
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const handleChange = (e) => {
    e.preventDefault();

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    emailjs.sendForm(id, template, form.current, user);
    setState({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full p-5 my-4 rounded h-fit lg:p-10 shadow-base-300 lg:shadow-lg xl:w-1/2 lg:w-4-5 md:w-5/6 card bg-base-100">
        <h1 className="card-title text-base-content">Lets Talk</h1>
        <form ref={form} onSubmit={sendEmail} className="card-content">
          <div className="form-control">
            <label className="label">
              <span className="label-text">name</span>
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              value={state.name}
              placeholder="Json Borne"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">email</span>
            </label>
            <input
              onChange={handleChange}
              name="email"
              value={state.email}
              type="email"
              placeholder="json_borne@email.com"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Lets Talk</span>
            </label>
            <textarea
              onChange={handleChange}
              name="message"
              value={state.message}
              className="h-24 textarea textarea-bordered textarea-success"
              placeholder="Hi I would like to talk about ...."
            ></textarea>
          </div>
          <input type="submit" value="Send" className="w-full my-3 btn btn-success" />
        </form>
      </div>
    </div>
  );
}
