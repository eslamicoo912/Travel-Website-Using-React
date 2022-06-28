import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [passwordFlag, setPasswordFlag] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);

    if (
      formData.name == "" ||
      formData.email == "" ||
      formData.password == ""
    ) {
      alert("Please enter full data");
      return;
    }

    if (formData.password.length < 8) {
      setPasswordFlag(true);
      return;
    }

    setPasswordFlag(false);
    setFormData({ name: "", email: "", password: "" });
    setSubmitted(true);
  }

  return (
    <div className="contact w-50 m-auto row pt-5">
      <form onSubmit={handleSubmit} className="col-8 ">
        <div className="field my-4">
          <label className="my-3">Full Name</label>
          <input
            name="name"
            className="form-control w-50 p-2"
            placeholder="type full name here "
            value={formData.name}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="field my-4">
          <label className="my-3">Email</label>
          <input
            name="email"
            className="form-control w-50 p-2"
            placeholder="your email here"
            value={formData.email}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="field my-4">
          <label className="my-3">Password</label>
          <input
            name="password"
            className="form-control w-50 p-2"
            placeholder="type a strong password"
            value={formData.password}
            onChange={handleChange}
            type="password"
          />
          {passwordFlag ? (
            <p>The password must contain at least 8 characters or numbers</p>
          ) : (
            ""
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      {!submitted ? (
        <div className="form-data col-4">
          <span className="my-5">{formData.name}</span>
          <span className="my-5">{formData.email}</span>
        </div>
      ) : (
        <div className="form-data col-4">
          <span className="done">Submitted Successfully!</span>
        </div>
      )}
    </div>
  );
};

export default Contact;
