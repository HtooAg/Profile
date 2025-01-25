import React from "react";
import {
	Box,
	Typography,
	Grid,
	Card,
	CardActionArea,
	CardContent,
} from "@mui/material";
import { EDUCATION_CONTENT } from "../constants";
import { motion } from "framer-motion";
export default function Education() {
	return (
		<Box sx={{ padding: 2 }}>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, y: -10 }}
				transition={{ duration: 4 }}
			>
				<Typography variant="h4" sx={{ textAlign: "center" }}>
					Education
				</Typography>
			</motion.div>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, y: -10 }}
				transition={{ duration: 1.2 }}
			>
				<Grid
					container
					spacing={2}
					sx={{
						paddingTop: 5,
						margin: "auto",
						width: { lg: "60%", md: "80%", xs: "90%" },
					}}
				>
					{EDUCATION_CONTENT.map((education, index) => (
						<Grid item xs={12} lg={11.8} key={index}>
							<motion.div
								whileHover={{ scale: 1.05 }}
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3 }}
							>
								<Card
									sx={{
										mb: 2,
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<CardActionArea
										sx={{
											display: "flex",
											justifyContent: "space-between",
											padding: 2,
										}}
									>
										<CardContent>
											<Typography
												component="h6"
												variant="h6"
												sx={{ fontWeight: "bold" }}
											>
												{education.degree}
											</Typography>
											<Typography
												variant="body2"
												sx={{
													color: "gray",
													fontWeight: "bold",
												}}
											>
												{education.institution}
											</Typography>
										</CardContent>
										<CardContent>
											<Typography
												component="h6"
												variant="body2"
												sx={{
													marginTop: 1,
													color: "gray",
												}}
											>
												{education.year}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</motion.div>
						</Grid>
					))}
				</Grid>
			</motion.div>
		</Box>
	);
}
