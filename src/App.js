import Home from "./components/Home/Home.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About/About.jsx";
import Order from "./routes/Order/Order.jsx";
import Flavors from "./routes/Flavors/Flavors.jsx";

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="order" element={<Order />} />
          <Route path="flavors" element={<Flavors />} />
        </Route>
      </Routes>
    </div>
  );
}
