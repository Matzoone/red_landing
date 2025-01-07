import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./output.css";
import CompanyRed from "./components/CompanyRed";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CompanyRed />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
