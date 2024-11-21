"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

import { useI18n, useScopedI18n } from "@/locales/client";

import loganpotter from "../../assets/images/loganpotter.png";
import oldLogan from "../../assets/images/oldlogan.png";
import pic01 from "../../assets/images/pic01.jpg";
import pic05 from "../../assets/images/pic05.jpg";

import "../../assets/css/main.css";

export default function Home() {
	const [logan, setLogan] = useState<StaticImageData>(oldLogan);
	const t = useI18n();
	const homeScopeT = useScopedI18n("Home");

	return (
		<>
			{/* <!-- Nav --> */}
			<nav id="nav">
				<ul className="container">
					<li>
						<Link href="#top">{t("NavContainer.Top")}</Link>
					</li>
					<li>
						<Link href="#work">{t("NavContainer.Work")}</Link>
					</li>
					<li>
						<Link href="#portfolio">{t("NavContainer.Portfolio")}</Link>
					</li>
					<li>
						<Link href="#contact">{t("NavContainer.Contact")}</Link>
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
									{t("Hi. I'm")} <strong>Gabriel Logan</strong>.
								</h1>
							</header>
							<p>{homeScopeT("Description")}</p>
							<Link href="#work" className="button large scrolly">
								{t("Learn about what I do")}
							</Link>
						</div>
						<Link
							href="/full-stack-developer-resume-gabriellogan.pdf"
							className="w-full text-center text-xl"
						>
							{t("See my resume")}
						</Link>
					</div>
				</div>
			</article>

			{/* <!-- Work --> */}
			<article id="work" className="wrapper style2">
				<div className="container">
					<header>
						<h2>{homeScopeT("Here's all the stuff I do")}</h2>
						<p>{homeScopeT("All Stuffs I do description")}</p>
					</header>
					<div className="row aln-center">
						<div className="col-4 col-6-medium col-12-small">
							<section className="box style1">
								<span className="icon featured fa-comments" />
								<h3>{homeScopeT("Frontend Web Applications")}</h3>
								<p>{homeScopeT("Frontend Web Applications description")}</p>
							</section>
						</div>
						<div className="col-4 col-6-medium col-12-small">
							<section className="box style1">
								<span className="icon solid featured fa-camera-retro" />
								<h3>{homeScopeT("Backend Web Applications")}</h3>
								<p>{homeScopeT("Backend Web Applications description")}</p>
							</section>
						</div>
						<div className="col-4 col-6-medium col-12-small">
							<section className="box style1">
								<span className="icon featured fa-thumbs-up" />
								<h3>{homeScopeT("Mobile Applications")}</h3>
								<p>{homeScopeT("Mobile Applications description")}</p>
							</section>
						</div>
					</div>
					<footer>
						<p>{homeScopeT("Wanna see more")}</p>
						<Link href="#portfolio" className="button large scrolly">
							{homeScopeT("See some of my recent work")}
						</Link>
					</footer>
				</div>
			</article>

			{/* <!-- Portfolio --> */}
			<article id="portfolio" className="wrapper style3">
				<div className="container">
					<header>
						<h2>{homeScopeT("Here's some stuff I made recently")}</h2>
						<p>{homeScopeT("Here's some stuff description")}</p>
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
								<p>{homeScopeT("Multiform Validator description")}</p>
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
								<p>{homeScopeT("Azure Translator Code description")}</p>
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
								<p>{homeScopeT("Cpf And Cnpj Generator description")}</p>
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
								<p>{homeScopeT("DsacJs description")}</p>
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
								<p>{homeScopeT("Clean Memory description")}</p>
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
								<p>{homeScopeT("Easy Templates description")}</p>
							</article>
						</div>
					</div>
					<footer>
						<p>{homeScopeT("Wanna see more of my work?")}</p>
						<Link href="#contact" className="button large scrolly">
							{homeScopeT("Get in touch with me")}
						</Link>
					</footer>
				</div>
			</article>

			{/* <!-- Contact --> */}
			<article id="contact" className="wrapper style4">
				<div className="medium container">
					<header>
						<h2>{homeScopeT("Have me make stuff for you")}</h2>
						<p>{homeScopeT("Have me make description")}</p>
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
							<h3>{homeScopeT("Find me on ...")}</h3>
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
							<li>&copy; {homeScopeT("All rights reserved")}</li>
							<li>By: Gabriel Logan</li>
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
