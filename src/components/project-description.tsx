'use client';

import React, { useState } from 'react';
import { CardDescription } from './ui/card';

interface ProjectDescriptionProps {
	description: string
}
export default function ProjectDescription({description}: ProjectDescriptionProps) {
	const [showFullDescription, setShowFullDescription] = useState(false);
	const maxLength = 150; // Define your maximum character length here

	const toggleDescription = (event: React.MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault();
		setShowFullDescription(!showFullDescription);
	};

  return (
		<CardDescription className="text-muted-foreground text-sm">
			{description.length > maxLength && !showFullDescription ? (
				<>
					{`${description.slice(0, maxLength)}...`}
					<button onClick={toggleDescription} className="ml-2 text-blue-300 cursor-pointer hover:underline">
						Read More
					</button>
				</>
			) : (
				description
			)}
		</CardDescription>
  );
}
