import { Route, Routes } from "react-router-dom";
import { Repo } from "./pages/Repo";
import Repos from "./pages/Repos";

type Repository = {
  full_name: string;
  description: string;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Repos />} />
      <Route path="/repo/*" element={<Repo />} />
    </Routes>
  );
}

export default App;
