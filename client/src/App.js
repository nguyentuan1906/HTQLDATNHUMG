
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./page/Home"
import Login from "./page/Login"
import Contact from "./page/Contact"
import About from "./page/About"
import Layout from "./layout"
import FormatPassword from "./page/FormatPassword"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='format-password' element={<FormatPassword/>} />
      </Route>
    </Routes>
  );
}

export default App;
