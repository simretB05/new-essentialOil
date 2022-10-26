import Header from "./components/navbar/navbar";
import Home from "./pages/Home";
import About from "./pages/about-page";
import Collection from "./pages/collection-page";
import LogIn from "./pages/log-in";
import ContactUs from "./pages/contact-us";
import ErrorPage from "./pages/ErrorPage";
import SharedLayout from "./pages/shearedLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles/styles.scss"
import { OpenMenuProvider } from "./components/menuOpen";

function App() {
  return (
    <OpenMenuProvider>
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/collection" exact element={<Collection />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" exact element={<ContactUs />} />
          <Route path="/log-in" exact element={<LogIn />} />
          <Route path="*" exact element={<ErrorPage />} />
       
        </Route>
      </Routes>
      </Router>
      </OpenMenuProvider>

  );
}

export default App;
