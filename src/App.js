import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayOut from "./layouts/HomeLayOut.jsx";
import Details from "./pages/Details.jsx";
import Home from "./pages/Home.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayOut/>}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/watch/:id" element={<Details />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
