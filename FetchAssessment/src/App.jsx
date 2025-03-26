import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";

function App() {

  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
