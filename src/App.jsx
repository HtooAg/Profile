import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Project from "./components/Project";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export default function App() {
	const [mode, setMode] = useState("dark");

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	const toggleTheme = () => {
		setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navbar mode={mode} toggleTheme={toggleTheme} />
			<Header />
			<About />
			<Tech />
			<Experience />
			<Education />
			<Project />
			<Footer />
		</ThemeProvider>
	);
}
