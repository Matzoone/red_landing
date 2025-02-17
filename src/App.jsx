import { Route, BrowserRouter as Router, Routes } from "react-router";
import Header from "./components/Header";
import DedicatedPlan from "./components/DedicatedPlan";
import VolumePlan from "./components/VolumePlan";
import Feature from "./components/Feature";
function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </Router> */}
      <Header />
      <DedicatedPlan />
      <VolumePlan />
      <Feature />
    </>
  );
}

export default App;
