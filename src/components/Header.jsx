import { Typography, Box } from "@mui/material";
import { HEADER_CONTENT } from "../constants";
import ProfilePic from "../assets/profile.jpg";
import { motion } from "motion/react";

export default function Header() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: { xs: "column", lg: "row" },
				justifyContent: { lg: "space-between", md: "center" },
				alignItems: "center",
				padding: 2,
				flexWrap: "wrap",
				width: { xl:"95%"},
				margin: "auto",
              
			}}
		>
			<Box
				sx={{
					paddingTop: 15,
					textAlign: { xl: "left", xs: "center", md: "center" },
					width: { xs: "100%", md: "auto" },
					marginBottom: { xs: 3, lg: 0 },
				}}
			>
				<motion.div
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Typography
						component="h1"
						sx={{
							fontSize: { lg: 50, xs: 40 }, // Adjust font size for small screens
							marginLeft: { lg: 2.5, xs: 0, md: 5 },
						}}
					>
						Htoo Aung Wai
					</Typography>
				</motion.div>
				<Box
					sx={{
						marginLeft: { xs: 0, md: 2.5 },
						paddingTop: 5,
						flexDirection: { xs: "column", md: "row" },
						alignItems: { xs: "center", md: "flex-start" },
						width: "100%", // Ensures proper wrapping
					}}
				>
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8 }}
					>
						<Typography
							component="h2"
							variant="h4"
							sx={{
								background:
									"linear-gradient(to right, #f472b6, #64748b, #a855f7)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								display: "inline-block",
								fontSize: { xs: "1.5rem", md: "2.25rem" },
								fontWeight: "500",
								letterSpacing: "-0.05em",
							}}
						>
							Full Stack Developer
						</Typography>
					</motion.div>
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1 }}
					>
						<Typography
							component="div"
							sx={{
								textAlign: {
									lg: "justify",
									xs: "center",
									md: "center",
								},
								paddingTop: 5,
								width: { xs: "100%", md: 500 }, // Makes text take full width on small screens
								paddingBottom: { xs: 0 },
							}}
						>
							{HEADER_CONTENT}
						</Typography>
					</motion.div>
				</Box>
			</Box>
			<Box
				sx={{
					marginTop: { md: 0 },
					marginRight: { xs: 0 },
					paddingTop: { lg: 15, xs: 6 },
					width: { xs: "100%", md: "auto" },
					display: "flex",
					justifyContent: "center",
				}}
			>
				<motion.button
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.3 }}
					whileHover={{ scale: 1.03 }}
					whileTap={{ scale: 0.9 }}
				>
					<img
						src={ProfilePic}
						alt="Profile"
						style={{
							borderRadius: "10%",
							width: "100%",
							width: "400px", // Ensures the profile image doesn't overflow
							height: "auto",
							objectFit: "cover",
						}}
					/>
				</motion.button>
			</Box>
		</Box>
	);
}
