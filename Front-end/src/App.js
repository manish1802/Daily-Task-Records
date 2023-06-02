import Notes from "./Pages/Notes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addnotes from "./Pages/Addnotes";
import Update from "./Pages/Update";
import News from "./Pages/News";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./Pages/Navbar";
import Protected from "./Pages/Protected";
import Location from "./Pages/Location";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/addnotes" element={<Addnotes />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/news" element={<Protected Component={News} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/location" element={<Location />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
