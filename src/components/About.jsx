import { Typography, Box } from "@mui/material";
import { ABOUT_CONTENT } from "../constants";
import ProfilePic from "../assets/profile.jpg";
import { motion } from "motion/react";
export default function About() {
	return (
		<Box
			id="about"
			sx={{
				display: "flex",
				flexDirection: { xs: "column", lg: "row" },
				justifyContent: "center",
				alignItems: "center",
				padding: 2,
				flexWrap: "wrap",
			}}
		>
			<Box
				sx={{
					paddingTop: 10,
					textAlign: { xs: "center", md: "center" },
				}}
			>
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, y: -10 }}
					transition={{ duration: 1 }}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Typography
							component="h6"
							sx={{
								fontSize: { xs: 24, sm: 30, md: 30 },
								textAlign: "center",
							}}
						>
							About
						</Typography>
						<Typography
							component="h6"
							sx={{
								fontSize: { xs: 24, sm: 30, md: 30 },
								color: "gray",
								textAlign: "center",
								marginLeft: 1,
							}}
						>
							Me
						</Typography>
					</Box>
				</motion.div>
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, y: -10 }}
					transition={{ duration: 1 }}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "column", lg: "row" },
							paddingTop: 7,
							justifyContent: "center",
							}}
					>
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.9 }}
						>
							<Box
								sx={{
									marginTop: { md: 0 },
									marginRight: { xs: 0, md: 5 },
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: { xs: "100%", lg: "auto" },
									cursor: "pointer",
									}}
							>
								<img
									src={ProfilePic}
									alt="Profile"
									style={{
										borderRadius: "10%",
										width: "100%",
										maxWidth: "400px",
										height: "auto",
										objectFit: "cover",
									}}
								/>
							</Box>
						</motion.div>

						<Box
							sx={{
								marginLeft: { xs: 0, md: 5 },
								textAlign: {
									lg: "justify",
									xs: "center",
									md: "center",
								},
								paddingTop: {lg: 0,md: 5, xs: 5 },
								alignItems: { xs: "center", md: "flex-start" },
								width: { xs: "100%", md: "600px" },
							}}
						>
							<motion.div
								initial={{ x: 100, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5 }}
							>
								<Typography
									component="h6"
									sx={{
										padding: {lg: 0, xs: 5 },
										paddingBottom: { xs: 0 },
										paddingTop: { xs: 2 },
										fontSize: {
											xs: "14px",
											sm: "16px",
										},
										lineHeight: {
											xs: "1.4",
											sm: "1.6",
											md: "1.6",
										},
									}}
								>
									{ABOUT_CONTENT}
								</Typography>
							</motion.div>
						</Box>
					</Box>
				</motion.div>
			</Box>
		</Box>
	);
}
