import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/modules/global/Layout";
import { Home } from "./components/pages";

import "./styles/global/global.scss";

function App() {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
