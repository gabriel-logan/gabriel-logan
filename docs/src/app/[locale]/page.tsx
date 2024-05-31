"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

import { useI18n } from "@/locales/client";

import loganpotter from "../../assets/images/loganpotter.png";
import oldLogan from "../../assets/images/oldlogan.png";
import pic01 from "../../assets/images/pic01.jpg";
import pic02 from "../../assets/images/pic02.jpg";
import pic03 from "../../assets/images/pic03.jpg";
import pic04 from "../../assets/images/pic04.jpg";
import pic05 from "../../assets/images/pic05.jpg";
import pic06 from "../../assets/images/pic06.jpg";

import "../../assets/css/main.css";

export default function Home() {
	const [logan, setLogan] = useState<StaticImageData>(oldLogan);
	const t = useI18n();

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
							<p>
								And this is <strong>Miniport</strong>, loren ipsun dolor amet
								sit loren ipsun dolor amet sit loren ipsun dolor amet sit
							</p>
							<Link href="#work" className="button large scrolly">
								{t("Learn about what I do")}
							</Link>
						</div>
						<p>Under development...</p>
					</div>
				</div>
			</article>

			{/* <!-- Work --> */}
			<article id="work" className="wrapper style2">
				<div className="container">
					<header>
						<h2>Here&apos;s all the stuff I do.</h2>
						<p>Odio turpis amet sed consequat eget posuere consequat.</p>
					</header>
					<div className="row aln-center">
						<div className="col-4 col-6-medium col-12-small">
							<section className="box style1">
								<span className="icon featured fa-comments" />
								<h3>Consequat lorem</h3>
								<p>
									Ornare nulla proin odio consequat sapien vestibulum ipsum
									primis sed amet consequat lorem dolore.
								</p>
							</section>
						</div>
						<div className="col-4 col-6-medium col-12-small">
							<section className="box style1">
								<span className="icon solid featured fa-camera-retro" />
								<h3>Lorem dolor tempus</h3>
								<p>
									Ornare nulla proin odio consequat sapien vestibulum ipsum
									primis sed amet consequat lorem dolore.
								</p>
							</section>
						</div>
						<div className="col-4 col-6-medium col-12-small">
							<section className="box style1">
								<span className="icon featured fa-thumbs-up" />
								<h3>Feugiat posuere</h3>
								<p>
									Ornare nulla proin odio consequat sapien vestibulum ipsum
									primis sed amet consequat lorem dolore.
								</p>
							</section>
						</div>
					</div>
					<footer>
						<p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
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
						<h2>Here&apos;s some stuff I made recently.</h2>
						<p>
							Proin odio consequat sapien vestibulum consequat lorem dolore
							feugiat.
						</p>
					</header>
					<div className="row">
						<div className="col-4 col-6-medium col-12-small">
							<article className="box style2">
								<Link href="#" className="image featured">
									<Image src={pic01} alt="pic01" />
								</Link>
								<h3>
									<Link href="#">Magna feugiat</Link>
								</h3>
								<p>Ornare nulla proin odio consequat.</p>
							</article>
						</div>
						<div className="col-4 col-6-medium col-12-small">
							<article className="box style2">
								<Link href="#" className="image featured">
									<Image src={pic02} alt="pic02" />
								</Link>
								<h3>
									<Link href="#">Veroeros primis</Link>
								</h3>
								<p>Ornare nulla proin odio consequat.</p>
							</article>
						</div>
						<div className="col-4 col-6-medium col-12-small">
							<article className="box style2">
								<Link href="#" className="image featured">
									<Image src={pic03} alt="pic03" />
								</Link>
								<h3>
									<Link href="#">Lorem ipsum</Link>
								</h3>
								<p>Ornare nulla proin odio consequat.</p>
							</article>
						</div>
						<div className="col-4 col-6-medium col-12-small">
							<article className="box style2">
								<Link href="#" className="image featured">
									<Image src={pic04} alt="pic04" />
								</Link>
								<h3>
									<Link href="#">Tempus dolore</Link>
								</h3>
								<p>Ornare nulla proin odio consequat.</p>
							</article>
						</div>
						<div className="col-4 col-6-medium col-12-small">
							<article className="box style2">
								<Link href="#" className="image featured">
									<Image src={pic05} alt="pic05" />
								</Link>
								<h3>
									<Link href="#">Feugiat aliquam</Link>
								</h3>
								<p>Ornare nulla proin odio consequat.</p>
							</article>
						</div>
						<div className="col-4 col-6-medium col-12-small">
							<article className="box style2">
								<Link href="#" className="image featured">
									<Image src={pic06} alt="pic06" />
								</Link>
								<h3>
									<Link href="#">Sed amet ornare</Link>
								</h3>
								<p>Ornare nulla proin odio consequat.</p>
							</article>
						</div>
					</div>
					<footer>
						<p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
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
						<h2>Have me make stuff for you.</h2>
						<p>Ornare nulla proin odio consequat sapien vestibulum ipsum.</p>
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
									<Link href="#" className="icon brands fa-google-plus">
										<span className="label">Google+</span>
									</Link>
								</li>
								<li>
									<Link
										href="https://github.com/gabriel-logan"
										className="icon brands fa-github"
									>
										<span className="label">Github</span>
									</Link>
								</li>
								{/*<!--*/}
								<li>
									<Link href="#" className="icon brands fa-youtube">
										<span className="label">YouTube</span>
									</Link>
								</li>
								<li>
									<Link href="#" className="icon brands fa-vimeo">
										<span className="label">Vimeo</span>
									</Link>
								</li>
								{/*-->*/}
							</ul>
							<hr />
						</div>
					</div>
					<footer>
						<ul id="copyright">
							<li>&copy; Untitled. All rights reserved.</li>
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
