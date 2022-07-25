import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
//import About from "./components/About";
function App() {
  return (
    <>
      <Navbar title="TextUtilsBlog" />
      <div className="container my-3">
        <TextForm heading="Enter your text to analyze below"/>
        {/*<About />*/}
      </div>
    </>
  );
}

export default App;
