import React, { useState } from "react";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    description: "",
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    //react controlled form
    setFormData({ ...formData, [inputName]: inputValue });
  };

  const handleSubmit = (e) => {
    //to prevent reload of page
    e.preventDefault();

    console.log("form submitted", formData);
    // Clear the form after submitting
    setFormData({
      description: "",
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>FeedBack Form</h2>

        <button type="submit" class="btn btn-primary">
          Add Feedback
        </button>

        <button type="submit" class="btn btn-primary ms-2">
          Edit Feedback
        </button>
        <br />
        <br />

        <p>Your FeedBack:</p>
        <div class="form-floating">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={formData.description}
            onChange={handleChange}
            name="description"
            required
          />
          <label for="floatingTextarea2"></label>
          <br />
          <button type="submit" class="btn btn-success ms-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FeedbackForm;
