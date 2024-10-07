import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { NavHeader } from "./Components/NavHeader";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { FlavorsPage } from "./Pages/Flavors";
import { Order } from "./Pages/Order";
import { Other } from "./Pages/Other";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavHeader />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="flavors" element={<FlavorsPage />} />
          <Route path="order" element={<Order />} />
          <Route path="*" element={<Other />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
