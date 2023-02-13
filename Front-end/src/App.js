import Notes from "./Pages/Notes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addnotes from "./Pages/Addnotes";
import Update from "./Pages/Update";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/addnotes" element={<Addnotes />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
