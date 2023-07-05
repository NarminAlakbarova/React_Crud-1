import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";
import Navigate from "./components/Navigate";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import AddManager from "./components/AddManager";
import EditManager from "./components/EditManager";

const BASE_URL = "http://localhost:8080/managers";
const App = () => {
  const [managers, setManagers] = useState([]);
  const getAllData = async () => {
    const resp = await axios(BASE_URL);
    const data = resp.data;
    setManagers(data);
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div>
      <Header />
      <Navigate />
      <Routes>
        <Route
          path="/"
          element={<Table managers={managers} setManagers={setManagers} />}
        />
        <Route
          path="/addManager"
          element={<AddManager managers={managers} setManagers={setManagers} />}
        />
        <Route
          path="/editManager/:id"
          element={
            <EditManager managers={managers} setManagers={setManagers} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
