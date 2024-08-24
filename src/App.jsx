import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import DrawerAppBar from './Component/NavBar/Navbars';
import MyForm from "./Component/Form/MyForm";
import SignUp from "./Component/Form/SignUp";

function App() {
  const [mode, setMode] = useState(() => localStorage.getItem("mode") || "light");

  useEffect(() => {
    localStorage.setItem("mode", mode);
    // Optional: Toggle body class if you still want to handle body class separately
    document.body.classList.toggle("dark-mode", mode === "dark");
  }, [mode]);

  const toggleMode = () => {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <DrawerAppBar toggleMode={toggleMode} />
        <Routes>
          <Route
            path="/"
            element={<SignUp mode={mode} screenWidth={screenWidth} />}
          />
          <Route
            path="/:id"
            element={<SignUp mode={mode} screenWidth={screenWidth} />}
          />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
