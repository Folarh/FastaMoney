import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Layout from "./pages/layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Layout />
      </BrowserRouter>
    </>
  );
}

export default App;
