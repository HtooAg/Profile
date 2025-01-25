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
} from "@mui/material";
import {
	Menu as MenuIcon,
	LightMode as LightModeIcon,
	DarkMode as DarkModeIcon,
	LinkedIn as LinkedInIcon,
	GitHub as GitHubIcon,
	Facebook as FacebookIcon,
	Home as HomeIcon,
	Info as AboutIcon,
	Work as WorkIcon,
	School as SchoolIcon,
	AccountTree as ProjectIcon,
} from "@mui/icons-material";
import { useState } from "react";
export default function Navbar({ mode, toggleTheme }) {
	const [open, setOpen] = useState(false);
	const toggleDrawer = () => {
		setOpen(!open);
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

					<Typography variant="h6" sx={{ flexGrow: 1, ml: 2 }}>
						HtooAg
					</Typography>
					<Box
						sx={{
							alignItems: "center",
							display: "flex",
							gap: 1,
						}}
					>
						
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
			<Drawer anchor="left" open={open} onClose={toggleDrawer}>
				<Box
					sx={{ width: 250 }}
					role="presentation"
					onClick={toggleDrawer}
					onKeyDown={toggleDrawer}
				>
					<List sx={{ padding: 2 }}>
						<ListItem disablePadding>
							<ListItemButton onClick={toggleDrawer}>
								<ListItemIcon>
									<HomeIcon sx={{ fontSize: "21px" }} />
								</ListItemIcon>
								<ListItemText primary="Home" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton onClick={toggleDrawer}>
								<ListItemIcon>
									<AboutIcon sx={{ fontSize: "21px" }} />
								</ListItemIcon>
								<ListItemText primary="About" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton onClick={toggleDrawer}>
								<ListItemIcon>
									<WorkIcon sx={{ fontSize: "21px" }} />
								</ListItemIcon>
								<ListItemText primary="Experience" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton onClick={toggleDrawer}>
								<ListItemIcon>
									<SchoolIcon sx={{ fontSize: "21px" }} />
								</ListItemIcon>
								<ListItemText primary="Education" />
							</ListItemButton>{" "}
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton onClick={toggleDrawer}>
								<ListItemIcon>
									<ProjectIcon sx={{ fontSize: "21px" }} />
								</ListItemIcon>
								<ListItemText primary="Project" />
							</ListItemButton>{" "}
						</ListItem>
					</List>
				</Box>
			</Drawer>
		</>
	);
}
