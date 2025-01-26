import React from "react";
import {
	Box,
	Typography,
	Grid,
	Card,
	CardActionArea,
	ButtonBase,
} from "@mui/material";
import { WORK_EXPERIENCE_CONTENT } from "../constants";
import { purple } from "@mui/material/colors";
import { motion } from "motion/react";

export default function Experience() {
	return (
		<Box id="experience" sx={{ padding: 2 }}>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, y: -10 }}
				transition={{ duration: 4 }}
			>
				<Typography
					variant="h4"
					sx={{ textAlign: "center", paddingTop: 10 }}
				>
					Experience
				</Typography>
			</motion.div>

			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, y: -10 }}
				transition={{ duration: 2 }}
			>
				<Box
					sx={{
						paddingTop: 5,
						margin: "auto",
						width: { lg: "60%", md: "80%", xs: "90%" },
					}}
				>
					{WORK_EXPERIENCE_CONTENT.map((experience, index) => (
						<Grid item xs={12} md={6} key={index} sx={{}}>
							<Box
								sx={{
									mb: 3,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Card
									sx={{
										justifyContent: "space-between",
										flexDirection: "row",
										margin: 0.7,
									}}
								>
									<CardActionArea sx={{ padding: 2 }}>
										<Box
											sx={{
												display: "flex",
												justifyContent: "space-between",
												flexDirection: {
													xs: "column",
													lg: "row",
													md: "row",
												},
											}}
										>
											<Typography
												component="h6"
												variant="body3"
												sx={{
													fontWeight: "bold",
												}}
											>
												{experience.role}
											</Typography>

											<Typography
												component="h6"
												variant="body2"
												sx={{
													color: "gray",
													alignItems: "center",
												}}
											>
												{experience.year}
											</Typography>
										</Box>
										<Box>
											<Typography
												component="h6"
												variant="body2"
												sx={{
													fontWeight: "bold",
													color: "gray",
													paddingTop: { xs: 1 },
												}}
											>
												{experience.company}
											</Typography>
										</Box>
										<Box>
											<Box>
												<Typography
													component="h6"
													variant="body2"
													sx={{
														textAlign: "justify",
														marginTop: 1,
														lineHeight: 1.8,
													}}
												>
													{experience.description}
												</Typography>
											</Box>
											<Box
												sx={{
													display: "flex",
													flexWrap: "wrap",
													marginTop: 2,
												}}
											>
												{experience.technologies.map(
													(tech, index) => (
														<Box
															variant="contained"
															color="inherit"
															key={index}
															sx={{
																display:
																	"inline-block",
																borderRadius: 1,
																padding:
																	"8px 16px",
																border: "1px solid #64748b",
																margin: 0.5,
																fontSize:
																	"0.875rem",
																background:
																	"linear-gradient(to right, #f472b6, #64748b, #a855f7)",
																WebkitBackgroundClip:
																	"text",
																WebkitTextFillColor:
																	"transparent",
																textTransform:
																	"none",
																cursor: "pointer",
																boxShadow:
																	"none",
																"&:hover": {
																	opacity: 0.8,
																	transition:
																		"all 0.3s ease-in-out",
																},
																"&:focus": {
																	outline:
																		"none",
																},
															}}
														>
															{tech}
														</Box>
													)
												)}
											</Box>
										</Box>
									</CardActionArea>
								</Card>
							</Box>
						</Grid>
					))}
				</Box>
			</motion.div>
		</Box>
	);
}
