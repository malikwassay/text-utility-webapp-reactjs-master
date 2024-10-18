import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const setAlertMessage = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      setAlertMessage("Dark Mode Enabled!", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

      setAlertMessage("Light Mode Enabled!", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={darkMode}
        toggleMode={toggleMode}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              alert={alert}
              setAlertMessage={setAlertMessage}
              mode={darkMode}
            />
          }
        ></Route>
        <Route path="/about" element={<About mode={darkMode} />}></Route>
      </Routes>
    </>
  );
}

export default App;
