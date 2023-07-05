import React from "react";
import Form from "./Form";
import { v4 as uuid } from "uuid";
import axios from "axios";
const BASE_URL = "http://localhost:8080/managers";

const AddManager = ({ managers, setManagers }) => {
  const handlePost = async (inputValue) => {
    const obj = {
      id: uuid(),
      ...inputValue,
    };
    await axios.post(BASE_URL, obj);
    setManagers([...managers, obj]);
  };
  return (
    <div>
      <Form
        managers={managers}
        setManagers={setManagers}
        handleInput={handlePost}
      />
    </div>
  );
};

export default AddManager;
