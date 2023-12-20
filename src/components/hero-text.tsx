"use client";

import { main } from "@/app/styles";
import React, { useState, useEffect } from "react";

const HeroText = () => {
	const [hoveredProgrammer, setHoveredProgrammer] = useState("");
	const [hoveredMusician, setHoveredMusician] = useState("");
	const [hoveredEditor, setHoveredEditor] = useState("");

	useEffect(() => {
		// Set initial values when the component mounts
		setHoveredProgrammer("Programmer");
		setHoveredMusician("Musician");
		setHoveredEditor("Video Editor");
	}, []);

	const resetProgrammer = () => {
		setHoveredProgrammer("Programmer.");
	};

	const resetMusician = () => {
		setHoveredMusician("Musician.");
	};

	const resetEditor = () => {
		setHoveredEditor("Video Editor.");
	};

	return (
		<h1 className={`${main.heading1}`}>
			<br />
			<span
				className="hoverable-text"
				onMouseEnter={() => setHoveredProgrammer("Developer.")}
				onMouseLeave={() => setTimeout(resetProgrammer, 1500)}
			>
				{hoveredProgrammer}
			</span>
			<br />
			<span
				className="hoverable-text"
				onMouseEnter={() => setHoveredMusician("Composer.")}
				onMouseLeave={() => setTimeout(resetMusician, 1500)}
			>
				{hoveredMusician}
			</span>
			<br />
			<span
				className="hoverable-text"
				onMouseEnter={() => setHoveredEditor("Content Creator.")}
				onMouseLeave={() => setTimeout(resetEditor, 1500)}
			>
				{hoveredEditor}
			</span>
		</h1>
	);
};

export default HeroText;
