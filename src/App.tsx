import "./App.css";
import { SignIn } from "./Components/SigIn/SigIn";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Post } from "./Components/Post/Post";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  );
}

export default App;
