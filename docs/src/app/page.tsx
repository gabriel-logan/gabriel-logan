"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

import loganpotter from "../assets/images/loganpotter.png";
import oldLogan from "../assets/images/oldlogan.png";
import pic01 from "../assets/images/pic01.jpg";
import pic05 from "../assets/images/pic05.jpg";

import "../assets/css/main.css";

export default function Home() {
	const [logan, setLogan] = useState<StaticImageData>(oldLogan);

	return (
		<>
			{/* <!-- Nav --> */}
			<nav id="nav">
				<ul className="container">
					<li>
						<Link href="#top">Top</Link>
					</li>
					<li>
						<Link href="#work">Work</Link>
					</li>
					<li>
						<Link href="#portfolio">Portfolio</Link>
					</li>
					<li>
						<Link href="#contact">Contact</Link>
					</li>
				</ul>
			</nav>

			{/* <!-- Home --> */}
			<article id="top" className="wrapper style1">
				<div className="container">
					<div className="row">
						<div className="col-4 col-5-large col-12-medium">
							<span className="image fit">
								<Image
									onClick={() => {
										setLogan(logan === oldLogan ? loganpotter : oldLogan);
									}}
									src={logan}
									alt="eu"
									className="h-auto w-auto cursor-pointer"
									priority
								/>
							</span>
						</div>
						<div className="col-8 col-7-large col-12-medium">
							<header>
								<h1>
									Hi. I&apos;m <strong>Gabriel Logan</strong>.
								</h1>
							</header>
							<p>
								Full Stack Developer with over 2 years of experience in
								freelance and open-source projects. I have advanced knowledge of
								JavaScript, TypeScript and frameworks such as ReactJS, React
								Native and ExpressJS. I work on both the frontend and backend,
								creating complete, efficient and scalable solutions, with
								experience in NestJS, MySQL, AWS, Docker and microservices
								architecture.
							</p>
							<Link href="#work" className="button large scrolly">
								Learn about what I do
							</Link>
						</div>
						<Link
							href="/full-stack-developer-resume-gabriellogan.pdf"
							className="w-full text-center text-xl"
						>
							See my resume
						</Link>
					</div>
				</div>
			</article>

			{/* <!-- Work --> */}
			<article id="work" className="wrapper style2">
				<div className="container">
					<header>
						<h2>Here&apos;s all the stuff I do</h2>
						<p>
							Here are some of the services I offer. I can help you with the
							development of web applications, mobile applications, libraries,
							and much more. I have experience in various technologies and
							tools, which allows me to create high-quality solutions for your
							projects.
						</p>
					</header>
					<div className="row aln-center">
						<div className="col-4 col-6-medium col-12-small">
							<section className="box style1">
								<span className="icon featured fa-comments" />
								<h3>Frontend Web Applications</h3>
								<p>
									Frontend application development using ReactJs, Typescript,
									Nextjs and other technologies.
								</p>
							</section>
						</div>
						<div className="col-4 col-6-medium col-12-small">
							<section className="box style1">
								<span className="icon solid featured fa-camera-retro" />
								<h3>Backend Web Applications</h3>
								<p>
									Backend application development using NodeJs, ExpressJs,
									NestJs, MySQL, MongoDB and other technologies.
								</p>
							</section>
						</div>
						<div className="col-4 col-6-medium col-12-small">
							<section className="box style1">
								<span className="icon featured fa-thumbs-up" />
								<h3>Mobile Applications</h3>
								<p>
									Mobile application development using React Native, Typescript
									and other technologies.
								</p>
							</section>
						</div>
					</div>
					<footer>
						<p>
							Wanna see more of my work? Check out some of my projects below.
						</p>
						<Link href="#portfolio" className="button large scrolly">
							See some of my recent work
						</Link>
					</footer>
				</div>
			</article>

			{/* <!-- Portfolio --> */}
			<article id="portfolio" className="wrapper style3">
				<div className="container">
					<header>
						<h2>Here&apos;s some stuff I made recently</h2>
						<p>
							Here are some of the projects I have worked on recently. Each
							project showcases my skills and expertise in different areas of
							software development, from frontend and backend web applications
							to mobile applications and libraries. Feel free to explore them
							and see the quality of my work.
						</p>
					</header>
					<div className="row">
						<div className="col-4 col-6-medium col-12-small">
							<article className="box style2 lg:h-full">
								<Link
									href="https://multiformvalidator.netlify.app"
									target="_blank"
									className="image featured"
								>
									<Image
										src="https://multiformvalidator.netlify.app/opengraph-image.png"
										alt="multiformvalidator"
										width={0}
										height={0}
										className="max-h-52 w-auto"
									/>
								</Link>
								<h3>
									<Link
										href="https://multiformvalidator.netlify.app"
										target="_blank"
									>
										Multiform Validator
									</Link>
								</h3>
								<p>
									Multilingual library made for validation, various form fields,
									such as: email, telephone, password, cpf, cnpj, credit card,
									magic numbers for image mimetype validation and much more.
								</p>
							</article>
						</div>
						<div className="col-4 col-6-medium col-12-small">
							<article className="box style2 lg:h-full">
								<Link
									href="https://azuretranslatorcode.vercel.app"
									target="_blank"
									className="image featured"
								>
									<Image
										src="https://azuretranslatorcode.vercel.app/logo.png"
										alt="azuretranslatorcode"
										width={0}
										height={0}
										className="max-h-52 w-auto"
									/>
								</Link>
								<h3>
									<Link
										href="https://azuretranslatorcode.vercel.app"
										target="_blank"
									>
										Azure Translator Code
									</Link>
								</h3>
								<p>
									Azure Translator Code is a powerful library for translating
									JSON files into multiple languages using the Azure Cognitive
									Translator service. You can use it in your projects to
									translate.
								</p>
							</article>
						</div>
						<div className="col-4 col-6-medium col-12-small">
							<article className="box style2 lg:h-full">
								<Link
									href="https://gabriel-logan.github.io/Gerador-CPF-e-CNPJ-valido"
									target="_blank"
									className="image featured"
								>
									<Image
										src="https://gabriel-logan.github.io/Gerador-CPF-e-CNPJ-valido/18-Fkfa6iXNuTXkMdu.png"
										alt="cpf-cnpj-generator"
										width={0}
										height={0}
										className="max-h-52 w-auto"
									/>
								</Link>
								<h3>
									<Link
										href="https://gabriel-logan.github.io/Gerador-CPF-e-CNPJ-valido"
										target="_blank"
									>
										Cpf and Cnpj Generator
									</Link>
								</h3>
								<p>
									This npm package provides JavaScript and Python functions to
									generate valid Brazilian CPF (Cadastro de Pessoas Físicas) and
									CNPJ (Cadastro Nacional da Pessoa Jurídica) numbers.
								</p>
							</article>
						</div>
						<div className="col-4 col-6-medium col-12-small">
							<article className="box style2 lg:h-full">
								<Link
									href="https://gabriel-logan.github.io/DsacJs"
									target="_blank"
									className="image featured"
								>
									<Image
										src="https://gabriel-logan.github.io/DsacJs/logo-transparent.png"
										alt="dsacjs"
										width={0}
										height={0}
										className="max-h-52 w-auto"
									/>
								</Link>
								<h3>
									<Link
										href="https://gabriel-logan.github.io/DsacJs"
										target="_blank"
									>
										DsacJs
									</Link>
								</h3>
								<p>
									A high-performance JavaScript and TypeScript library offering
									a comprehensive set of efficient data structures. Simplify
									your algorithm implementation and data manipulation with
									optimized, easy-to-use tools.
								</p>
							</article>
						</div>
						<div className="col-4 col-6-medium col-12-small">
							<article className="box style2 lg:h-full">
								<Link
									href="https://github.com/gabriel-logan/clean-memory"
									target="_blank"
									className="image featured"
								>
									<Image src={pic05} alt="clean-memory" />
								</Link>
								<h3>
									<Link
										href="https://github.com/gabriel-logan/clean-memory"
										target="_blank"
									>
										Clean Memory
									</Link>
								</h3>
								<p>
									Shell script code designed to streamline system performance by
									clearing unused temporary memory and system cache. Helping to
									enhance overall system efficiency and responsiveness.
								</p>
							</article>
						</div>
						<div className="col-4 col-6-medium col-12-small">
							<article className="box style2 lg:h-full">
								<Link
									href="https://github.com/gabriel-logan/easy-templates"
									target="_blank"
									className="image featured"
								>
									<Image src={pic01} alt="easy-templates" />
								</Link>
								<h3>
									<Link
										href="https://github.com/gabriel-logan/easy-templates"
										target="_blank"
									>
										Easy Templates
									</Link>
								</h3>
								<p>
									&ldquo;easy-templates&ldquo; is a library that simplifies the
									process of creating various templates using NPX. It automates
									and streamlines the setup of project structures, making
									template creation more efficient.
								</p>
							</article>
						</div>
					</div>
					<footer>
						<p>
							Wanna see more of my work? Check out my GitHub profile for more
						</p>
						<Link href="#contact" className="button large scrolly">
							Get in touch with me
						</Link>
					</footer>
				</div>
			</article>

			{/* <!-- Contact --> */}
			<article id="contact" className="wrapper style4">
				<div className="medium container">
					<header>
						<h2>Have me make stuff for you</h2>
						<p>
							If you like my work and have a project you need help with, think
							you need my help with something or just fancy saying hey, then get
							in touch. I&apos;ll be happy to help you.
						</p>
					</header>
					<div className="row">
						{/**
						 * 						<div className="col-12">
							<form method="post" action="#">
								<div className="row">
									<div className="col-6 col-12-small">
										<input
											type="text"
											name="name"
											id="name"
											placeholder="Name"
										/>
									</div>
									<div className="col-6 col-12-small">
										<input
											type="text"
											name="email"
											id="email"
											placeholder="Email"
										/>
									</div>
									<div className="col-12">
										<input
											type="text"
											name="subject"
											id="subject"
											placeholder="Subject"
										/>
									</div>
									<div className="col-12">
										<textarea
											name="message"
											id="message"
											placeholder="Message"
										/>
									</div>
									<div className="col-12">
										<ul className="actions">
											<li>
												<input type="submit" value="Send Message" />
											</li>
											<li>
												<input
													type="reset"
													value="Clear Form"
													className="alt"
												/>
											</li>
										</ul>
									</div>
								</div>
							</form>
						</div>
						 *
						 */}
						<div className="col-12 flex flex-col">
							<hr />
							<h3>Find me on ...</h3>
							<ul className="social">
								<li>
									<Link
										href="https://play.google.com/store/apps/dev?id=5118283462925344777"
										className="icon brands fa-google-plus"
										target="_blank"
									>
										<span className="label">Google+</span>
									</Link>
								</li>
								<li>
									<Link
										href="https://github.com/gabriel-logan"
										className="icon brands fa-github"
										target="_blank"
									>
										<span className="label">Github</span>
									</Link>
								</li>
								{/*<!--*/}
								<li>
									<Link
										href="/full-stack-developer-resume-gabriellogan.pdf"
										target="_blank"
										className="icon brands fa-dochub"
									>
										<span className="label">Resume</span>
									</Link>
								</li>
								{/*-->*/}
							</ul>
							<hr />
						</div>
					</div>
					<footer>
						<ul id="copyright">
							<li>&copy; All rights reserved.</li>
							<li>
								By:{" "}
								<Link href="https://github.com/gabriel-logan" target="_blank">
									Gabriel Logan
								</Link>
							</li>
						</ul>
					</footer>
				</div>
			</article>

			<Script src="/assets/js/jquery.min.js" />

			<Script src="/assets/js/jquery.scrolly.min.js" />

			<Script src="/assets/js/browser.min.js" />

			<Script src="/assets/js/breakpoints.min.js" />

			<Script src="/assets/js/util.js" />

			<Script src="/assets/js/main.js" />
		</>
	);
}
