import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./output.css";
import CompanyRed from "./components/CompanyRed";
import ProductPage from "./components/PDP";
import SuccessPage from "./components/success";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CompanyRed />} />
          <Route path="/PDP" element={<ProductPage />} />
          <Route path="/Success" element={<SuccessPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
