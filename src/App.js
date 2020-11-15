import React from "react";
import "./App.css";
import "./index.css";
import { Home } from "./Components/Home";
import { AddUser } from "./Components/AddUser";
import { EditUser } from "./Components/EditUser";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./Components/Context/GlobalContext";

function App() {
  return (
    <div className="App" style={{ maxWidth: "30rem", margin: "4rem auto " }}>
      <GlobalProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </GlobalProvider>
    </div>
  );
}
export default App;
