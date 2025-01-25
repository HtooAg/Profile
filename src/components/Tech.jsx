import { Box, Typography } from "@mui/material";
import { blue, green, cyan, yellow, purple, red } from "@mui/material/colors";
import { DiMongodb } from "react-icons/di";
import {
	RiBootstrapLine,
	RiCss3Fill,
	RiJavascriptFill,
	RiPhpLine,
	RiReactjsLine,
	RiTailwindCssLine,
} from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { motion } from "motion/react";

const iconVar = (duration) => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
});

export default function Tech() {
	return (
		<Box
			sx={{
				flexDirection: { xs: "column", md: "row" },
				justifyContent: "center",
				alignItems: "center",
				padding: 2,
			}}
		>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, y: -10 }}
				transition={{ duration: 1.5 }}
			>
				<Typography
					variant="h4"
					sx={{ textAlign: "center", paddingTop: 5 }}
				>
					Technologies
				</Typography>
			</motion.div>

			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 1 }}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						gap: 2,
						paddingTop: 5,
						alignItems: "center",
						flexWrap: "wrap",
					}}
				>
					<motion.div
						variants={iconVar(2.5)}
						initial="initial"
						animate="animate"
					>
						<Box
							sx={{
								border: "3px solid #262626",
								borderRadius: 2,
								padding: 0.5,
								color: blue[500],
							}}
						>
							<RiCss3Fill size={40} />
						</Box>
					</motion.div>
					<motion.div
						variants={iconVar(3)}
						initial="initial"
						animate="animate"
					>
						<Box
							sx={{
								border: "3px solid #262626",
								borderRadius: 2,
								padding: 0.5,
								color: yellow[600],
							}}
						>
							<RiJavascriptFill size={40} />
						</Box>
					</motion.div>
					<motion.div
						variants={iconVar(5)}
						initial="initial"
						animate="animate"
					>
						<Box
							sx={{
								border: "3px solid #262626",
								borderRadius: 2,
								padding: 0.5,
								color: purple[500],
							}}
						>
							<RiBootstrapLine size={40} />
						</Box>
					</motion.div>
					<motion.div
						variants={iconVar(2)}
						initial="initial"
						animate="animate"
					>
						<Box
							sx={{
								border: "3px solid #262626",
								borderRadius: 2,
								padding: 0.5,
								color: cyan[500],
							}}
						>
							<RiReactjsLine size={40} />
						</Box>
					</motion.div>
					<motion.div
						variants={iconVar(4)}
						initial="initial"
						animate="animate"
					>
						<Box
							sx={{
								border: "3px solid #262626",
								borderRadius: 2,
								padding: 0.5,
								color: green[500],
							}}
						>
							<DiMongodb size={40} />
						</Box>
					</motion.div>
					<motion.div
						variants={iconVar(5.7)}
						initial="initial"
						animate="animate"
					>
						<Box
							sx={{
								border: "3px solid #262626",
								borderRadius: 2,
								padding: 0.5,
								color: blue[700],
							}}
						>
							<SiMysql size={40} />
						</Box>
					</motion.div>
					<motion.div
						variants={iconVar(6)}
						initial="initial"
						animate="animate"
					>
						<Box
							sx={{
								border: "3px solid #262626",
								borderRadius: 2,
								padding: 0.5,
								color: cyan[600],
							}}
						>
							<RiTailwindCssLine size={40} />
						</Box>
					</motion.div>
					<motion.div
						variants={iconVar(3.7)}
						initial="initial"
						animate="animate"
					>
						<Box
							sx={{
								border: "3px solid #262626",
								borderRadius: 2,
								padding: 0.5,
								color: purple[700],
							}}
						>
							<RiPhpLine size={40} />
						</Box>
					</motion.div>
					<motion.div
						variants={iconVar(6.4)}
						initial="initial"
						animate="animate"
					>
						<Box
							sx={{
								border: "3px solid #262626",
								borderRadius: 2,
								padding: 0.5,
								color: red[500],
							}}
						>
							<TbApi size={40} />
						</Box>
					</motion.div>
				</Box>
			</motion.div>
		</Box>
	);
}
