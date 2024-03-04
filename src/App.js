import "./App.css";
import Header from "./Components/Header";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Work from "./Pages/Work";

function App() {
  return (
    <main className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Router>

      <Footer />
    </main>
  );
}

export default App;
