import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/DexSearch";
import NotFound from "./pages/NotFound";

// Components
import Nav from "./components/Nav/Nav";

function App() {
  
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
