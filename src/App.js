import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [btnColor, setBtnColor] = useState("primary");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0a2650";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode Disabled", "success");
    }
  };

  const toggleGreenMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#09482b";
      showAlert("Green Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Green Mode Disabled", "success");
    }
    setBtnColor("success");
  };

  const togglePinkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#500b2d";
      showAlert("Pink Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Pink Mode Disabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtilsBlog"
          mode={mode}
          toggleDarkMode={toggleDarkMode}
          toggleGreenMode={toggleGreenMode}
          togglePinkMode={togglePinkMode}
          btnColor={btnColor}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>

            <Route exact path="/" element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your text to analyze below"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
