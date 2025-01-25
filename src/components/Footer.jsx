import React from "react";
import { Box, Divider, Typography, IconButton } from "@mui/material";
import {
	Phone as PhoneIcon,
	Email as EmailIcon,
	LocationOn as LocationIcon,
	LinkedIn as LinkedInIcon,
	GitHub as GitHubIcon,
	Facebook as FacebookIcon,
} from "@mui/icons-material";

export default function Footer() {
	return (
		<Box sx={{ padding: 3, width: "90%", margin: "auto" }}>
			{/* Main Content Section */}
			<Divider />
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					alignItems: { xs: "center", md: "flex-start" },
					textAlign: { xs: "center", md: "left" },
					justifyContent: { xs: "center", md: "space-evenly" },
					gap: { xs: 3, md: 5 },
					padding: { xs: 2, md: 4 },
				}}
			>
				<Box sx={{ flex: "1/4", maxWidth: { xs: "100%", md: "30%" } }}>
					<Typography variant="h6" sx={{ marginBottom: 2 }}>
						Portfolio
					</Typography>
					<Box>
						<Typography sx={{ cursor: "pointer", marginBottom: 1 }}>
							My focus on detail, passion for innovation, and
							ability to adapt to emerging technologies drive me
							to continuously push boundaries in software
							development.
						</Typography>
					</Box>
				</Box>
				<Divider
					orientation="vertical"
					flexItem
					sx={{
						display: { xs: "block", md: "block" },
						backgroundColor: "gray",
						marginBottom: { xs: 2, md: 0 },
						marginX: { xs: 0, md: 2 },
						height: { xs: "1px", md: "auto" },
						width: { xs: "100%", md: "auto" },
					}}
				/>
				{/* Quick Links Section */}
				{/* Get In Touch Section */}
				<Box sx={{ flex: "1/4", maxWidth: { xs: "100%", md: "30%" } }}>
					<Typography variant="h6" sx={{ marginBottom: 2 }}>
						Get In Touch
					</Typography>
					<Box>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 2,
								justifyContent: {
									xs: "center",
									md: "flex-start",
								},
							}}
						>
							<PhoneIcon />
							<Typography>+971 522 116 024</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 2,
								py: 1,
								justifyContent: {
									xs: "center",
									md: "flex-start",
								},
							}}
						>
							<EmailIcon />
							<Typography>htoow243@gmail.com</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								gap: 2,
								justifyContent: {
									xs: "center",
									md: "flex-start",
								},
							}}
						>
							<LocationIcon />
							<Typography>
								Al Rigga, Dubai,
								<br /> United Arab Emirates
							</Typography>
						</Box>
					</Box>
				</Box>
				<Divider
					orientation="vertical"
					flexItem
					sx={{
						display: { xs: "block", md: "block" },
						backgroundColor: "gray",
						marginBottom: { xs: 2, md: 0 },
						marginX: { xs: 0, md: 2 },
						height: { xs: "1px", md: "auto" },
						width: { xs: "100%", md: "auto" },
					}}
				/>

				{/* Follow Us Section */}
				<Box sx={{ flex: "1/4", maxWidth: { xs: "100%", md: "30%" } }}>
					<Typography variant="h6" sx={{ marginBottom: 2 }}>
						Follow Us
					</Typography>
					<Box
						sx={{
							display: "flex",
							justifyContent: { xs: "center", md: "flex-start" },
							gap: 1,
						}}
					>
						<IconButton color="inherit" href="https://www.linkedin.com/in/htoo-aung-123405275">
							<LinkedInIcon />
						</IconButton>
						<IconButton color="inherit" href="https://github.com/HtooAg">
							<GitHubIcon />
						</IconButton>
						<IconButton color="inherit" href="https://www.facebook.com/profile.php?id=100091996466753">
							<FacebookIcon />
						</IconButton>
					</Box>
				</Box>
			</Box>

			{/* Footer Bottom Section */}
			<Box sx={{ paddingTop: 3, textAlign: "center" }}>
				<Divider />
				<Typography variant="body2" sx={{ marginTop: 2 }}>
					&copy; {new Date().getFullYear()} Htoo Aung Wai. All rights
					reserved.
				</Typography>
			</Box>
		</Box>
	);
}
