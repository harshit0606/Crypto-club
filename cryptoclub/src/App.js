import { Routes, Route, Link } from "react-router-dom";
import "./styles/app.css";  
import Header from "./components/header";
import Home from "./components/home";
import ContactUs from "./components/contactus";
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/contactus"  element={<ContactUs/>}/>
      <Route path="/"  element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
