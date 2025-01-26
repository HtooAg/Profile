import {
	Box,
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
	ListItemButton,
	ListItemIcon,
	Avatar,
	Divider,
} from "@mui/material";
import {
	Menu as MenuIcon,
	LightMode as LightModeIcon,
	DarkMode as DarkModeIcon,
	Home as HomeIcon,
	Info as AboutIcon,
	Work as WorkIcon,
	School as SchoolIcon,
	AccountTree as ProjectIcon,
} from "@mui/icons-material";
import { useState } from "react";
import ProfilePic from "../assets/profile.jpg";
import avatar from "../assets/avatar.jpg";
import { grey } from "@mui/material/colors";

export default function Navbar({ mode, toggleTheme }) {
	const [open, setOpen] = useState(false);
	const toggleDrawer = () => {
		setOpen(!open);
	};
	const scrollToSection = (id) => {
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<>
			<AppBar position="fixed">
				<Toolbar
					sx={{
						background:
							"linear-gradient(to right, #f472b6, #64748b, #a855f7)",
					}}
				>
					<IconButton
						edge="start"
						aria-label="menu"
						onClick={toggleDrawer}
						color="inherit"
					>
						<MenuIcon />
					</IconButton>

					<Typography
						variant="h6"
						sx={{ flexGrow: 1, ml: 2, textAlign: "center" }}
					>
						HtooAg
					</Typography>
					<Box sx={{ alignItems: "center", display: "flex", gap: 1 }}>
						<IconButton
							color="inherit"
							edge="end"
							onClick={toggleTheme}
						>
							{mode === "dark" ? (
								<LightModeIcon />
							) : (
								<DarkModeIcon />
							)}
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>

			<Drawer anchor="left" open={open} onClose={toggleDrawer} sx={{}}>
				<Box
					sx={{
						width: 250,
						background: (theme) => theme.palette.banner,
						height: 94,
					}}
					role="presentation"
					onClick={toggleDrawer}
					onKeyDown={toggleDrawer}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							paddingTop: 4,
						}}
					>
						<Avatar
							alt="HtooAg"
							src={avatar}
							sx={{
								width: 70,
								height: 70,
								marginTop: 1,
							}}
						/>
						<Typography
							variant="h6"
							sx={{
								textAlign: "center",
								paddingTop: 2,
								paddingLeft: 2,
							}}
						>
							Htoo Aung Wai
						</Typography>
					</Box>

					<List sx={{ padding: 2 }}>
						<ListItem disablePadding>
							<ListItemButton
								onClick={() => scrollToSection("home")}
							>
								{" "}
								<ListItemIcon>
									<HomeIcon sx={{ fontSize: "21px" }} />
								</ListItemIcon>
								<ListItemText primary="Home" />
							</ListItemButton>
						</ListItem>
						<Divider />
						<ListItem disablePadding>
							<ListItemButton
								onClick={() => scrollToSection("about")}
							>
								{" "}
								<ListItemIcon>
									<AboutIcon sx={{ fontSize: "21px" }} />
								</ListItemIcon>
								<ListItemText primary="About" />
							</ListItemButton>
						</ListItem>
						<Divider />

						<ListItem disablePadding>
							<ListItemButton
								onClick={() => scrollToSection("tech")}
							>
								{" "}
								<ListItemIcon>
									<WorkIcon sx={{ fontSize: "21px" }} />
								</ListItemIcon>
								<ListItemText primary="Technologies" />
							</ListItemButton>
						</ListItem>
						<Divider />

						<ListItem disablePadding>
							<ListItemButton
								onClick={() => scrollToSection("experience")}
							>
								<ListItemIcon>
									<WorkIcon sx={{ fontSize: "21px" }} />
								</ListItemIcon>
								<ListItemText primary="Experience" />
							</ListItemButton>
						</ListItem>
						<Divider />

						<ListItem disablePadding>
							<ListItemButton
								onClick={() => scrollToSection("education")}
							>
								<ListItemIcon>
									<SchoolIcon sx={{ fontSize: "21px" }} />
								</ListItemIcon>
								<ListItemText primary="Education" />
							</ListItemButton>
						</ListItem>
						<Divider />

						<ListItem disablePadding>
							<ListItemButton
								onClick={() => scrollToSection("project")}
							>
								<ListItemIcon>
									<ProjectIcon sx={{ fontSize: "21px" }} />
								</ListItemIcon>
								<ListItemText primary="Projects" />
							</ListItemButton>
						</ListItem>
					</List>
				</Box>
			</Drawer>
		</>
	);
}
