import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
						Thank you for your interest in getting in touch with us at The ANS Studio. We value your feedback, questions, and suggestions. If you have a specific inquiry or comment, please feel free to email us directly at <strong>info@ansstudio.com</strong>. We strive to respond to all messages within 24 hours, although it may take longer during busy periods. Alternatively, you can use the contact form on our website to reach out. Simply fill out the required fields and we'll get back to you as soon as possible.
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. If you prefer to connect with us on social media, you can find us on <a href="https://instagram.com/ansstudio">Instagram</a>, <a href="https://facebook.com/ansstudio">Facebook</a>, and <a href="https://linkedin.com/company/ansstudio">LinkedIn</a>. We post regular updates about our latest projects and engage with our community there, so don't hesitate to reach out. Your engagement and feedback are essential to us as we continue to innovate and create inspiring architectural solutions.{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							. Thank you once again for your interest in The ANS Studio. We look forward to hearing from you and exploring how we can collaborate to bring your architectural visions to life. Whether you have a project in mind or just want to learn more about our work, we are here to assist you. Feel free to reach out via email, our contact form, or social media. Your support and feedback help us grow and succeed in our mission to design the future.
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

  

export default Contact;


