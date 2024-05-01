"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

import loganpotter from "../assets/images/loganpotter.png";
import oldLogan from "../assets/images/oldlogan.png";

export default function NotFound() {
	const [logan, setLogan] = useState<StaticImageData>(oldLogan);

	return (
		<main className="flex min-h-screen flex-col items-center gap-12 p-24">
			<div className="max-h-96 max-w-96 overflow-hidden rounded-3xl border-2 border-opacity-40">
				<Image
					onClick={() => {
						setLogan(logan === oldLogan ? loganpotter : oldLogan);
					}}
					src={logan}
					alt="eu"
					className="h-auto w-auto cursor-pointer"
				/>
			</div>
			<div>
				<div className="flex flex-col items-center gap-1 p-5 sm:flex-row">
					<h1 className="text-3xl">404 |</h1>
					<div>
						<h2 className="text-center">This page could not be found</h2>
					</div>
				</div>
				<div className="mt-6 text-center">
					<Link className="hover:text-blue-500" href="/">
						Go Back
					</Link>
				</div>
			</div>
		</main>
	);
}
