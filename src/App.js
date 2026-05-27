import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";

import Home from "./pages/Home";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />

      <Routes>
        {/* Trang mặc định là Register */}
        <Route path="/" element={<RegistrationForm />} />

        {/* Home sau khi đăng ký */}
        <Route path="/home" element={<Home />} />

        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;