import React from "react";
import {
	Box,
	Typography,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	Button,
} from "@mui/material";
import { PROJECT_CONTENT } from "../constants";
import { purple } from "@mui/material/colors";
import { motion } from "motion/react";

export default function Project() {
	return (
		<Box id="project" sx={{ padding: 2, paddingTop: 10 }}>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, y: -5 }}
				transition={{ duration: 4 }}
			>
				<Typography
					variant="h4"
					sx={{
						textAlign: "center",
					}}
				>
					Projects
				</Typography>
			</motion.div>
			<motion.div
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1 }}
			>
				<Grid
					container
					spacing={2}
					sx={{
						paddingTop: 2,
						alignItems: "center",
						justifyContent: "center",
						width: { lg: "100%", md: "80%", xs: "100%" },
						margin: "auto",
					}}
				>
					{PROJECT_CONTENT.map((project, index) => (
						<Grid item xs={12} lg={7} key={index}>
							<Card
								sx={{
									display: "flex",
									flexDirection: "column",
									height: "100%",
									marginTop: 1,
									marginBottom: 1,
								}}
							>
								<CardActionArea
									sx={{
										padding: 2,
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
										textAlign: "center",
									}}
								>
									<CardMedia
										component="img"
										image={project.image}
										alt={project.title}
										sx={{
											width: 150,
											height: 170,
											objectFit: "cover",
											backgroundSize: "cover",
											borderRadius: "10%",
											border: "1px solid #ddd",
											boxShadow:
												"0 4px 8px rgba(0, 0, 0, 0.1)",
										}}
									/>
									<CardContent sx={{ padding: 1, paddingTop: 3 }}>
										<Typography
											variant="h6"
											sx={{ fontWeight: "bold" }}
										>
											{project.title}
										</Typography>
										<Typography
											variant="body2"
											sx={{
												marginTop: 1,
												lineHeight: 1.8,
											}}
										>
											{project.description}
										</Typography>
										<Box
											sx={{
												display: "flex",
												flexWrap: "wrap",
												marginTop: 2,
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											{project.technologies.map(
												(tech, techIndex) => (
													<Box
														variant="contained"
														color="inherit"
														key={techIndex}
														sx={{
															display:
																"inline-block",
															borderRadius: 1,
															padding: "8px 16px",
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

															boxShadow: "none",
															"&:hover": {
																opacity: 0.8,
																transition:
																	"all 0.3s ease-in-out",
															},
															"&:focus": {
																outline: "none",
															},
														}}
													>
														{tech}
													</Box>
												)
											)}
										</Box>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					))}
				</Grid>
			</motion.div>
		</Box>
	);
}
