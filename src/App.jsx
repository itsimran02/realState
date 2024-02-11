import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Contact from "./Pages/Contact";
import AppLayout from "./Components/AppLayout";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
