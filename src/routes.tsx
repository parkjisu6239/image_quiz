import React from "react";
import { Routes, Route } from "react-router-dom";
import menu from "src/constants/menu";
import App from "./App";

const RootRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<App />}>
      {menu.map((item) => (
        <Route
          key={item.id}
          path={item.path}
          element={<item.component />}
        />
      ))}
      <Route path="*" element={<div>404</div>} />
    </Route>
  </Routes>
);

export default RootRoutes;
