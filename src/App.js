import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import TopNavbar from "./components/navbar/topNavbar";
import DiscoverHome from "./components/discoverHome";
import { ColorModeContext } from "./context/context";

const App = () => {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <TopNavbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/discover" element={<DiscoverHome />} />
            </Routes>
          </BrowserRouter>
        </StyledEngineProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
