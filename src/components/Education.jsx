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
		<Box id="education" sx={{ padding: 2, paddingTop: 10 }}>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, y: -10 }}
				transition={{ duration: 4 }}
			>
				<Typography variant="h4" sx={{ textAlign: "center",  paddingBottom: 4  }}>
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
											padding: 2,
											display: "flex",
											justifyContent: "space-between",
											alignItems: "flex-start",
											flexDirection: {
												lg: "row",
												md: "row",
												xs: "column",
											},
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
										<Box>
											<Typography
												component="h6"
												variant="body2"
												sx={{
													color: "gray",
													paddingTop: {
														lg: 2.5,
														md: 2.5,
													},
													paddingLeft: {
														xs: 1.8,
													},
												}}
											>
												{education.year}
											</Typography>
										</Box>
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
