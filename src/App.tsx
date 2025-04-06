import "./App.css";
import { SignIn } from "./Components/SigIn/SigIn";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Post } from "./Components/Post/Post";
import { Layout } from "./Components/Home/Layout";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default App;
