import { Route, BrowserRouter as Router, Routes } from "react-router";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </Router> */}
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
