"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";

export function AuroraBackgroundDemo() {
	return (
		<div className="dark">
			<AuroraBackground>
				<motion.div
					initial={{ opacity: 0.0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="relative flex flex-col gap-4 items-center justify-center px-4 mx-64 text-center"
				>
					<div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
						PotHolePatrol
					</div>
					<div className="text-base md:text-4xl dark:text-neutral-200 py-4">
						"Hit a pothole? Report it with Pothole Patrol! We map it, time-stamp
						it, and push for fast fixes. Turn bumps into action!"
					</div>
					<a href="/map">
						<button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
							Open Map
						</button>
					</a>
				</motion.div>
			</AuroraBackground>
		</div>
	);
}
