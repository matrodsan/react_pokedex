import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
