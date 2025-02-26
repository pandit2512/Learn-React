import React, { useState } from "react";

function FormHandler() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const [errors, setErrors] = useState({
  //   password: "",
  // });

  //You can directly use it in onChange Attribute.
  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    // // Password validation logic
    // if (inputName === "password" && inputValue.length < 6) {
    //   setErrors({ ...errors, password: "Password is too short" });
    // } else {
    //   setErrors({ ...errors, password: "" });
    // }

    //Before this our form was called uncontrolled component form and after this it is
    //called React Controlled form
    setFormData({ ...formData, [inputName]: inputValue });
    //console.log(formData);
  };

  const handleSubmit = (e) => {
    //to prevent reload of page
    e.preventDefault();
    console.log("form submitted", formData);
    // Clear the form after submitting
    setFormData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="container border border-dark border-3 p-3 mt-3">
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={formData.password} // using value, input field state are handle by React
            onChange={handleChange}
            name="password"
          />
          <div id="emailHelp" class="form-text text-danger">
            {formData.password.length < 6 && formData.password.length != 0
              ? "Password is Too short"
              : ""}
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormHandler;
