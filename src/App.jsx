import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Project from "./components/Project";
import { useState, useMemo } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import { grey } from "@mui/material/colors";

export default function App() {
	const [mode, setMode] = useState("dark");
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					banner: mode === "dark" ? grey[800] : grey[200]
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
