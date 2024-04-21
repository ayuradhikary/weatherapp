import React from "react";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeButton from "./components/ThemeButton";
import Header from "./components/Header";
import Body from "./components/Body";
import City from "./components/City";
import Search from "./components/Search";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet } from "react-router-dom";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  useEffect(() => {
    if (themeMode === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="dark:bg-black h-[100vh]">
        <Header />
        <ThemeButton />
        <Search />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",

        element: <Body />,
      },
      {
        path: "/:cityName",
        element: <City />,
      },
    ],
  },
]);

export default App;
