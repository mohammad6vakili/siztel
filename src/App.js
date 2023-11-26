import React, { useState, useEffect, Suspense } from "react";

// ** Router Import
import Router from "./router/Router";

// ** Routes & Default Routes
import { getRoutes } from "./router/routes";

// ** Hooks Imports
import { useLayout } from "@hooks/useLayout";
import { createTheme } from "react-data-table-component";

import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";

const App = () => {
  const [allRoutes, setAllRoutes] = useState([]);

  // ** Hooks
  const { layout } = useLayout();

  useEffect(() => {
    setAllRoutes(getRoutes(layout));
  }, [layout]);

  // ** Datatable Themes
  createTheme(
    "darkTheme",
    {
      text: {
        primary: "#ffffff",
        secondary: "#ffffffb8",
      },
      background: {
        default: "#2B323A",
      },
      context: {
        background: "#3E454D",
        text: "#FFFFFF",
      },
      divider: {
        default: "#ffffff28",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );

  return (
    <Suspense fallback={null}>
      <Router allRoutes={allRoutes} />
    </Suspense>
  );
};

export default App;
