import { Route, Routes } from "react-router-dom";
import "./App.css";
import { adminNav } from "./Components/Admin/Header/adminNav";
import Login from "./Components/Atoms/Body/Login";
import Navbar from "./Components/Atoms/Header/Navbar";
import { userNav } from "./Components/User/Header/userNav";
import Home from "./Components/Admin/Pages/Home";
import UserHome from "./Components/User/Pages/Home";
import List from "./Components/Admin/Pages/List";
import Product from "./Components/User/Pages/Product";
import Not from "./Components/Atoms/Not";
import { useEffect, useState } from "react";

function App() {
  const role = "user";

  const [data, setdata] = useState();

  console.log(localStorage);

  const arr = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  // arr.push(6);
  localStorage.setItem("data", JSON.stringify(arr));

  useEffect(() => {
    setdata(arr);
  }, []);

  console.log(arr);

  console.log(data, "data");
  // console.log(data, "data");

  if (role === "admin") {
    return (
      <>
        <Navbar data={adminNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </>
    );
  } else if (role === "user") {
    return (
      <>
        <Navbar data={userNav} />
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </>
    );
  } else {
    return <Login />;
  }
}
export default App;