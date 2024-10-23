import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { NavHeader } from "./Components/NavHeader";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { FlavorsPage } from "./Pages/Flavors";
import { Order } from "./Pages/Order";
import { Other } from "./Pages/Other";
import { useState } from "react";
import { flavors, Flavors } from "./data";
import { FlavorProvider } from "./Components/FlavorContext";

function App() {
  const [selectedFlavor, setFlavor] = useState<Flavors>();
  function handleSetFlavor(flavorId: number) {
    let flav = flavors.foreverFlavors.find((val) => val.id === flavorId);
    if (!flav) {
      flav = flavors.sidePieces.find((val) => val.id === flavorId);
    }
    if (!flav) {
      throw new Error("cannot find flavor");
    }
    setFlavor(flav);
  }

  const contextValue = { selectedFlavor, handleSetFlavor };

  return (
    <BrowserRouter>
      <FlavorProvider value={contextValue}>
        <Routes>
          <Route path="/" element={<NavHeader />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="flavors" element={<FlavorsPage />} />
            <Route path="order" element={<Order />} />
            <Route path="*" element={<Other />} />
          </Route>
        </Routes>
      </FlavorProvider>
    </BrowserRouter>
  );
}

export default App;
