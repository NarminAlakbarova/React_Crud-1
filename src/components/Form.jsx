import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ handleInput, editingManager }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name: editingManager ? editingManager.name : "",
    surname: editingManager ? editingManager.surname : "",
    email: editingManager ? editingManager.email : "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue({
      name: "",
      surname: "",
      email: "",
    });
    handleInput(inputValue);
    navigate("/");
  };
  const handleInputChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Name..."
          onChange={handleInputChange}
          value={inputValue["name"]}
          name={"name"}
        />
        <label htmlFor="">Surname</label>
        <input
          type="text"
          placeholder="Surname..."
          onChange={handleInputChange}
          value={inputValue["surname"]}
          name={"surname"}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="email..."
          onChange={handleInputChange}
          value={inputValue["email"]}
          name={"email"}
        />

        <button type="submit" className="submit-btn btn btn-success my-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
