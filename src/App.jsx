import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Layout from "./pages/layout/Layout";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Layout />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
