import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { NavHeader } from "./Components/NavHeader";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Flavors } from "./Pages/Flavors";
import { Order } from "./Pages/Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavHeader />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="flavors" element={<Flavors />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
