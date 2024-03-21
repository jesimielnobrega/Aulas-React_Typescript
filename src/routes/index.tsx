import { Navigate, Route, Routes } from "react-router-dom";
import { UseDrawerContext } from "../shared/hooks";
import { useEffect } from "react";
import { Dashboard } from "../shared/components";

export const AppRoutes = () => {
  const { handleSetDrawerOptions } =
    UseDrawerContext();

  useEffect(() => {
    handleSetDrawerOptions([
      {
        icon: "home",
        label: "Página Inicial",
        path: "/pagina-inicial"
      },
      {
        icon: "star",
        label: "Página secundária",
        path: "Página-Inicial2"
      },
    ]);
  },[]);

  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Dashboard/>
        }
      />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
