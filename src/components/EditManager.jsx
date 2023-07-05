import React from "react";
import Form from "./Form";
import { useParams } from "react-router-dom";
import axios from "axios";
const BASE_URL = "http://localhost:8080/managers";

const EditManager = ({ managers, setManagers }) => {
  const { id } = useParams();
  const editingManager = managers.find((manager) => manager.id == id);
  const handleEdit = async (inputValue) => {
    await axios.patch(`${BASE_URL}/${id}`, inputValue);
    const index = managers.findIndex((manager) => manager.id === id);
    const copyManagers = [...managers];
    copyManagers.splice(index, 1, { ...inputValue, id });
    setManagers(copyManagers);
  };

  return (
    <div>
      <Form
        editingManager={editingManager}
        managers={managers}
        setManagers={setManagers}
        handleInput={handleEdit}
      />
    </div>
  );
};

export default EditManager;
